import { createRental as createRentalInRepo, findCustomerById, findGameById, getActiveRentalsByGameId, getAllRentalsFromRepo } from '../repositories/rentals.repository.js';
import dayjs from 'dayjs';

export const createRental = async (req, res) => {
    const { customerId, gameId, daysRented } = req.body;

    if (!customerId || !gameId || daysRented <= 0) {
        const error = new Error('Dados inválidos');
        error.type = 'validationError';
        throw error;
    }

    const customer = await findCustomerById(customerId);
    if (!customer) {
        const error = new Error('Cliente não encontrado');
        error.type = 'notFound';
        throw error;
    }

    const game = await findGameById(gameId);
    if (!game) {
        const error = new Error('Jogo não encontrado');
        error.type = 'notFound';
        throw error;
    }

    const activeRentals = await getActiveRentalsByGameId(gameId);
    if (activeRentals.length >= game.stockTotal) {
        const error = new Error('Jogos indisponíveis no momento');
        error.type = 'unprocessableEntity';
        throw error;
    }


    const rentDate = dayjs().format('DD-MM-YYYY');
    const originalPrice = daysRented * game.pricePerDay;

    await createRentalInRepo({ customerId, gameId, daysRented, rentDate, originalPrice });
    res.status(201).send();
};

export const getAllRentals = async (req, res) => {
    const rentals = await getAllRentalsFromRepo();

    const formattedRentals = rentals.map((rental) => ({
        id: rental.id,
        customerId: rental.customerId,
        gameId: rental.gameId,
        rentDate: rental.rentDate,
        daysRented: rental.daysRented,
        returnDate: rental.returnDate,
        originalPrice: rental.originalPrice,
        delayFee: rental.delayFee,
        customer: {
            id: rental.customerId,
            name: rental.customerName,
        },
        game: {
            id: rental.gameId,
            name: rental.gameName,
        },
    }));

    res.status(200).json(formattedRentals);
};
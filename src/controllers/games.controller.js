import { getAllGames as getAllGamesFromRepo, findGameByName, createGame as createGameInRepo } from '../repositories/games.repository.js';

export const getAllGames = async (req, res, next) => {
    const games = await getAllGamesFromRepo();
    res.status(200).json(games);
};

export const createGame = async (req, res) => {
    const { name, image, stockTotal, pricePerDay } = req.body;

    if (!name || !image || stockTotal <= 0 || pricePerDay <= 0) {
        const error = new Error('Dados inválidos');
        error.type = 'validationError';
        throw error;
    }

    const existingGame = await findGameByName(name);
    if (existingGame) {
        const error = new Error('Jogo já existe');
        error.type = 'conflict';
        throw error;
    }

    await createGameInRepo({ name, image, stockTotal, pricePerDay });
    res.status(201).send();
};
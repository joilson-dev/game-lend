// src/repositories/rentals.repository.js
import connection from '../database/database.js';

export const findCustomerById = async (id) => {
    const result = await connection.query('SELECT * FROM customers WHERE id = $1', [id]);
    return result.rows[0];
};

export const findGameById = async (id) => {
    const result = await connection.query('SELECT * FROM games WHERE id = $1', [id]);
    return result.rows[0];
};

export const getActiveRentalsByGameId = async (gameId) => {
    const result = await connection.query('SELECT * FROM rentals WHERE "gameId" = $1 AND "returnDate" IS NULL', [gameId]);
    return result.rows;
};

export const createRental = async (rental) => {
    const { customerId, gameId, daysRented, rentDate, originalPrice } = rental;
    await connection.query(
        'INSERT INTO rentals ("customerId", "gameId", "rentDate", "daysRented", "returnDate", "originalPrice", "delayFee") VALUES ($1, $2, $3, $4, NULL, $5, NULL)',
        [customerId, gameId, rentDate, daysRented, originalPrice]
    );
};

export const getAllRentalsFromRepo = async () => {
    const result = await connection.query(`
    SELECT
      rentals.*,
      customers.name AS "customerName",
      games.name AS "gameName"
    FROM rentals
    JOIN customers ON rentals."customerId" = customers.id
    JOIN games ON rentals."gameId" = games.id
  `);
    return result.rows;
};
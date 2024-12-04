import connection from '../database/database.js';

export const getAllGames = async () => {
  const result = await connection.query('SELECT * FROM games');
  return result.rows;
};

export const findGameByName = async (name) => {
  const result = await connection.query('SELECT * FROM games WHERE name = $1', [name]);
  return result.rows[0];
};

export const createGame = async (game) => {
  const { name, image, stockTotal, pricePerDay } = game;
  await connection.query(
    'INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)',
    [name, image, stockTotal, pricePerDay]
  );
};
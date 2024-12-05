import connection from "../database/database.js";

export const findCustomerByCpf = async (cpf) => {
    const result = await connection.query('SELECT * FROM customers WHERE cpf = $1', [cpf]);
    return result.rows[0];
};

export const createCustomer = async (customer) => {
    const { name, phone, cpf } = customer;
    await connection.query(
        'INSERT INTO customers (name, phone, cpf) VALUES ($1, $2, $3)',
        [name, phone, cpf]
    );
};


export const getAllCustomers = async () => {
    const result = await connection.query('SELECT * FROM customers');
    return result.rows;
};
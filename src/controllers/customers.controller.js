import { createCustomer as createCustomerInRepo, findCustomerByCpf } from '../repositories/customers.repository.js';

export const createCustomer = async (req, res) => {
    const { name, phone, cpf } = req.body;

    if (!name || !cpf || cpf.length !== 11 || !phone || (phone.length !== 10 && phone.length !== 11)) {
        const error = new Error('Dados inválidos');
        error.type = 'validationError';
        throw error;
    }

    const existingCustomer = await findCustomerByCpf(cpf);
    if (existingCustomer) {
        const error = new Error('Cliente já existe');
        error.type = 'conflict';
        throw error;
    }

    await createCustomerInRepo({ name, phone, cpf });
    res.status(201).send();
};
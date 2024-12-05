import { createCustomer as createCustomerInRepo, findCustomerByCpf, getAllCustomers as getAllCustomersFromRepo, getCustomerById as getCustomerByIdFromRepo } from '../repositories/customers.repository.js';

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

export const getAllCustomers = async (req, res) => {
    const customers = await getAllCustomersFromRepo();
    res.status(200).json(customers);
};

export const getCustomerById = async (req, res) => {
    const { id } = req.params;
    const customer = await getCustomerByIdFromRepo(id);
    if (!customer) {
        const error = new Error('Cliente não encontrado');
        error.type = 'notFound';
        throw error;
    }
    res.status(200).json(customer);
};
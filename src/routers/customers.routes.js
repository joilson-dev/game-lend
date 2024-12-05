import express from 'express';
import { createCustomer, getAllCustomers, getCustomerById } from '../controllers/customers.controller.js';

const router = express.Router();


router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.post('/', createCustomer);

export default router;
import express from 'express';
import { createCustomer, getAllCustomers } from '../controllers/customers.controller.js';

const router = express.Router();


router.get('/', getAllCustomers);
// router.get('/:id', createCustomer);
router.post('/', createCustomer);

export default router;
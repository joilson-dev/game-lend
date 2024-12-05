import express from 'express';
import { createCustomer } from '../controllers/customers.controller.js';

const router = express.Router();


// router.get('/', createCustomer);
// router.get('/:id', createCustomer);
router.post('/', createCustomer);

export default router;
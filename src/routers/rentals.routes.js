import express from 'express';
import { createRental, getAllRentals, returnRental } from '../controllers/rentals.controller.js';

const router = express.Router();


router.post('/', createRental);
router.get('/', getAllRentals);
router.post('/:id/return', returnRental);

export default router;
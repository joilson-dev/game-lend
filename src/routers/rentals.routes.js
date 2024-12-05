import express from 'express';
import { createRental, getAllRentals } from '../controllers/rentals.controller.js';

const router = express.Router();


router.post('/', createRental);
router.get('/', getAllRentals);

export default router;
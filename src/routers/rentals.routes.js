import express from 'express';
import { createRental } from '../controllers/rentals.controller.js';

const router = express.Router();


router.post('/', createRental);

export default router;
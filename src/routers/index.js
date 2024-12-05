import express from 'express';
import gamesRoutes from './games.routes.js';
import customersRoutes from './customers.routes.js';
import rentalsRoutes from './rentals.routes.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('API ON!');
});


router.use('/games', gamesRoutes);
router.use('/customers', customersRoutes);
router.use('/rentals', rentalsRoutes);

export default router;

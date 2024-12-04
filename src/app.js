import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";

import router from "./routers/index.js";
import errorHandler from "./middlewares/errorHandler.middleware.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

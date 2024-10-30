import express from "express";
import { ping } from "./controllers/pingController";

const app = express();
app.use(express.json());

// Rota de teste de saúde
app.get("/ping", ping);

export default app;

import { Router } from "express";

const router = Router();

router.post("/truck", (req, res) => {
  const { licensePlate, model } = req.body;
  res.status(201).json({ id: 1, licensePlate, model });
});

export default router;

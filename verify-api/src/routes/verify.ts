import { Router, Request, Response } from "express";
import { statusStore, VerificationEntry } from "../data/store";
import { validateFields } from "../middleware/validate";

const router = Router();

router.post("/", validateFields(["userId", "category"]), (req: Request, res: Response) => {
  const { userId, category } = req.body;

  if (statusStore.has(userId)) {
    res.status(409).json({ message: "User already has a verification entry." });
    return;
  }

  const now = new Date().toISOString();
  const entry: VerificationEntry = {
    userId,
    category,
    status: "pending",
    createdAt: now,
    updatedAt: now,
  };

  statusStore.set(userId, entry);
  res.status(201).json(entry);
});

export default router;

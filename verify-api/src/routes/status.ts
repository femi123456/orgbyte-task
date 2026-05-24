import { Router, Request, Response } from "express";
import { statusStore } from "../data/store";
import { validateFields } from "../middleware/validate";

const router = Router();

router.get("/:userId", (req: Request, res: Response) => {
  const { userId } = req.params;
  const entry = statusStore.get(userId);

  if (!entry) {
    res.status(404).json({ message: "User not found." });
    return;
  }

  res.status(200).json(entry);
});

router.patch("/:userId", validateFields(["status"]), (req: Request, res: Response) => {
  const { userId } = req.params;
  const { status } = req.body;

  if (!["pending", "verified", "rejected"].includes(status)) {
    res.status(400).json({ message: "Invalid status value." });
    return;
  }

  const entry = statusStore.get(userId);
  if (!entry) {
    res.status(404).json({ message: "User not found." });
    return;
  }

  entry.status = status;
  entry.updatedAt = new Date().toISOString();
  statusStore.set(userId, entry);

  res.status(200).json(entry);
});

export default router;

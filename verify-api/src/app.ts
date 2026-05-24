import express from "express";
import verifyRouter from "./routes/verify";
import statusRouter from "./routes/status";
import healthRouter from "./routes/health";

const app = express();

app.use(express.json());

app.use("/verify", verifyRouter);
app.use("/status", statusRouter);
app.use("/health", healthRouter);

export default app;

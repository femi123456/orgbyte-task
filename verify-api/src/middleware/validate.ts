import { Request, Response, NextFunction, RequestHandler } from "express";

export function validateFields(fields: string[]): RequestHandler {
  return (req: Request, res: Response, next: NextFunction): void => {
    const missingFields = fields.filter((field) => !req.body[field]);
    if (missingFields.length > 0) {
      res.status(400).json({ message: "Missing required fields", missingFields });
      return;
    }
    next();
  };
}

export interface VerificationEntry {
  userId: string;
  category: string;
  status: "pending" | "verified" | "rejected";
  createdAt: string;
  updatedAt: string;
}

export const statusStore = new Map<string, VerificationEntry>();

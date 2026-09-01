import mongoose from "mongoose";

const UnsubscribeSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    reason: { type: String, required: true },
    
  },
  { timestamps: true }
);

export default mongoose.models.Unsubscribe || mongoose.model("Unsubscribe", UnsubscribeSchema);

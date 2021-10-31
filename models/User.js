import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    isAdmin: { type: Boolean, required: true, default: false },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

//If model exists, use, else create new  model
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

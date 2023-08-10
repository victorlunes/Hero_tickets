import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://victorllunes:O4dqr1btQgScY0wU@cluster0.kqzahcw.mongodb.net/hero-ticket"
    );
    console.log("Connect database success");
  } catch (error) {
    console.log("🚀 ~ file: database.ts:10 ~ connect ~ error:", error);
  };
}

import { Clerk } from "@clerk/clerk-sdk-node";

const clerk = new Clerk({ apiKey: process.env.CLERK_SECRET_KEY });

export default async function handler(req, res) {
  try {
    const users = await clerk.users.getUserList();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
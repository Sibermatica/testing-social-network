import { config } from 'dotenv';
config();

export const DATABASE_URI = process.env.DATABASE_URI || "";

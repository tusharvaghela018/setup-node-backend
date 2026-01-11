import dotEnv from "dotenv";
dotEnv.config();

export const { DATABASE_URL, NODE_ENV, PORT } = process.env;

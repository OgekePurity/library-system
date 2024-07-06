import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME: string = process.env.MONGO_USERNAME || '';
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || '';
const MONGO_CLUSTER_URL: string = process.env.MONGO_CLUSTER_URL || '';
const MONGO_QUERY_PARAMS: string = process.env.MONGO_QUERY_PARAMS || '';

const MONGO_URL: string = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER_URL}/${MONGO_QUERY_PARAMS}`;

const PORT: number = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 8000;
const ROUNDS:number = process.env.SERVER_ROUNDS ? Number(process.env.SERVER_ROUNDS) : Math.floor(Math.random() * 11)

export const config = {
  mongo: {
    url: MONGO_URL,
  },
  server: {
    port: PORT,
    rounds: ROUNDS
  },
};

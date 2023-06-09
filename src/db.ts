import { Dialect, Sequelize } from 'sequelize';
import dbConfig from '../config/db';
import { logger } from './utils/logger';
import HistoryPromptModel from "./history/historyPromptSchema";

const { username, dialect, password, database, host, pool } = dbConfig;

export const connectionParams = {
  username,
  password,
  dialect: dialect as Dialect,
  database,
  host,
  pool,
  timezone: '+00:00',
  logQueryParameters: process.env.NODE_ENV === 'development',
  benchmark: true,
  logging: false,
};

const sequelize = new Sequelize(connectionParams);
sequelize
  .authenticate()
  .then(() => {
    logger.info('PG authenticated!');
  })
  .catch((e) => logger.error(e));

export { sequelize };

const db = {
  HistoryPrompt: HistoryPromptModel(sequelize),
};

export default db;

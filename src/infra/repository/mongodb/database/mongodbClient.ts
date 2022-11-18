import * as mongoose from 'mongoose';
import { mongoDBDonfig } from '../../../../config/mongoDBConfig';

const {
  host, pass, port, user,
} = mongoDBDonfig;

const connectionString = `mongodb://${user}:${pass}@${host}:${port}`;

const mongoDBClient = mongoose
  .connect(connectionString)
  .then(() => {
    console.log('[MONGOOSE] - connected');
  })
  .catch((err) => {
    console.log('[MONGOOSE] - error -', err);
  });

export default mongoDBClient;

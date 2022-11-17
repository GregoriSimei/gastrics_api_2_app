export const mongoDBDonfig = Object.freeze({
  host: process.env.MONGODB_HOST,
  port: parseInt(process.env.MONGODB_PORT as string, 10),
  user: process.env.MONGODB_USER,
  pass: process.env.MONGODB_PASS,
  database: process.env.MONGODB_NAME,
});

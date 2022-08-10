import 'dotenv/config';

const config = Object.freeze({
  app_prefix: process.env.APP_PREFIX || '/jaiminho',
  port: process.env.PORT || 3000,
});

export default config;

import http from 'http';
import config from './config/http';
import { initializeTerminus } from './config/terminus';
import { app } from './index';

const server: http.Server = http.createServer(app);
initializeTerminus(server);
server.listen(config.port, () => console.info(`Server is running in the port ${config.port}!`));

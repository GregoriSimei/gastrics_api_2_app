import { createTerminus } from '@godaddy/terminus';
import http from 'http';

function onSignal() {
  console.info('server is starting cleanup');
  return Promise.all([
    // your clean logic, like closing database connections
  ]);
}

async function onShutdown() {
  console.info('cleanup finished, server is shutting down');
}

function beforeShutdown() {
  console.info('Wait for terminate');
  return new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });
}

export const initializeTerminus = (server: http.Server) => {
  createTerminus(server, {
    signal: 'SIGTERM',
    logger: console.error,
    healthChecks: {
      '/healthcheck': ({ state }) => Promise.resolve(),
    },
    onSignal,
    onShutdown,
    beforeShutdown,
  });
};

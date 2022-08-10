import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';

export default (endpoint: string, app: Express) => {
  app.use(
    endpoint,
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/gastrics/swagger.json',
      },
    }),
  );
};

import { typeormConfig } from 'src/config/typeORMConfig';
import { DataSource } from 'typeorm';

const datasource = new DataSource(typeormConfig);
datasource.initialize()
  .then(
    () => {
      console.log('DataBase connected');
    },
  )
  .catch(
    () => {
      console.log('Error to connect Database');
    },
  );

export default datasource;

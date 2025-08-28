import dotenv from 'dotenv';
dotenv.config();
(async () => {
  await require('./config');
  await require('./db/connection');
  await require('./runServer');
})();


import Server from './server';
import routes from './routes';
import CONFIG from './config';

const port = CONFIG.RUNNING_PORT;
new Server().router(routes).listen(port);

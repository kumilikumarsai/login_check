import Server from './server';
import routes from './routes';
import CONFIG from './config';

const port = CONFIG.RUNNING_PORT;
const server = new Server();
const app = server.router(routes).listen(port);

// Export for Vercel serverless
export default app;

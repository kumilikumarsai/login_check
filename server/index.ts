import dotenv from 'dotenv';
dotenv.config();

// Import modules
import './config';
import './db/connection';
import './runServer';

// For Vercel serverless deployment
const app = require('./runServer').default;

// Export for Vercel
export default app;


# Login Service API

A Node.js/TypeScript backend service for user authentication and management.

## Features

- User authentication (login/signup)
- JWT token management
- MySQL database integration
- Rate limiting and security features
- File upload support
- Email notifications

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database**: MySQL with Sequelize ORM
- **Authentication**: JWT
- **Security**: Helmet, CORS, Rate limiting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd login
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
DATABASE_NAME=your_database_name
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_HOST=your_db_host

# Server Configuration
PORT=3003
NODE_ENV=development

# JWT Configuration
JWT_ACCESS_SECRET=your_jwt_access_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
JWT_ISSUER=your_jwt_issuer
JWT_EXPIRES_IN=1h

# Domain Configuration
LOCAL_DOMAIN=localhost:3003
```

4. Run the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3003`

## Deployment to Vercel

### Prerequisites

- Vercel account
- Database hosted on a cloud provider (e.g., PlanetScale, AWS RDS, etc.)

### Steps

1. **Install Vercel CLI** (optional):
```bash
npm i -g vercel
```

2. **Build the project**:
```bash
npm run build
```

3. **Deploy to Vercel**:

   **Option A: Using Vercel CLI**
   ```bash
   vercel
   ```

   **Option B: Using Vercel Dashboard**
   - Push your code to GitHub/GitLab
   - Connect your repository to Vercel
   - Configure environment variables in Vercel dashboard

4. **Set Environment Variables in Vercel**:
   - Go to your project settings in Vercel dashboard
   - Add all the environment variables from your `.env` file
   - Make sure to use production database credentials

### Environment Variables for Production

Set these in your Vercel project settings:

```env
DATABASE_NAME=your_production_db_name
DB_USERNAME=your_production_db_username
DB_PASSWORD=your_production_db_password
DB_HOST=your_production_db_host
NODE_ENV=production
JWT_ACCESS_SECRET=your_secure_jwt_secret
JWT_REFRESH_SECRET=your_secure_refresh_secret
JWT_ISSUER=your_app_name
JWT_EXPIRES_IN=1h
LOCAL_DOMAIN=your-vercel-domain.vercel.app
```

### Important Notes for Vercel Deployment

1. **Database**: Use a cloud database service (PlanetScale, AWS RDS, etc.) as Vercel doesn't support persistent local databases
2. **Environment Variables**: All sensitive data should be set in Vercel's environment variables
3. **Port**: Vercel automatically assigns ports, so the PORT environment variable will be set by Vercel
4. **Build Process**: The project uses TypeScript compilation during build

## API Endpoints

The API endpoints will be available at your Vercel domain once deployed.

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the TypeScript project
- `npm start` - Start the production server

## Project Structure

```
login/
├── server/
│   ├── config/          # Configuration files
│   ├── controller/      # Route controllers
│   ├── db/             # Database connection
│   ├── helpers/        # Helper functions
│   ├── middleware/     # Express middleware
│   ├── models/         # Database models
│   ├── routes.ts       # Route definitions
│   └── server.ts       # Express server setup
├── package.json
├── tsconfig.json
└── vercel.json         # Vercel configuration
```

## Support

For issues and questions, please create an issue in the repository.

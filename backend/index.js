import express from 'express';
import startServer from './libs/boots.js';
import path from 'path';
import injectionMiddlewares from './libs/middlewares.js';
import injectionRoutes from './routes/index.js';
import { connectDB } from './utils/bd.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, '/images')));

injectionMiddlewares(app);
app.get('/', (req, res) => {
  res.send('Backend is running');
});
injectionRoutes(app);

// Route pour servir index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Connectez-vous à la base de données
connectDB();

// Démarrez le serveur (cela ne s'exécutera que dans les environnements non-Vercel)
startServer(app);

// Exportez l'application pour Vercel
export default app;
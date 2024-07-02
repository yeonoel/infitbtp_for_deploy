// ./utils/bd.js

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Définir l'URI de connexion ici (remplacez avec votre URI réel)

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

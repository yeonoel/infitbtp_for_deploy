// models/Article.js
import mongoose from "mongoose";

const sousTitreSchema = new mongoose.Schema({
  sousTitre: { type: String, required: true },
  contenuSousTitre: { type: String, required: true },
  imageSousTitre: { type: String },
});

const opinionShema = new mongoose.Schema({
  titres: {
    grandTitre: { type: String, required: true },
    contenuGrandTitre: { type: String, required: true },
    imageGrandTitre: { type: String },
    sousTitres: [sousTitreSchema],
  },
  auteur: { type: String },
  categorie: { type: String, required: true },
  datePublication: { type: Date, default: Date.now },
  tags: [String],
}, { timestamps: true });

const Opinion = mongoose.model('Opinion', opinionShema);

export default Opinion;

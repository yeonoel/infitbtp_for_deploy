import Economie from "../models/economie.js";

export default class EconomieControler {
    static async createEconomie (req, res) {
        console.log(req.file);

        const { 
            grandTitre, contenuGrandTitre,
            sousTitre1, contenuSousTitre1,
            sousTitre2, contenuSousTitre2,
            auteur, categorie, datePublication, tags
        } = req.body;


        console.log(datePublication)
        const images = 
        {
            imageGrandTitre: req.file ?  `${req.protocol}://${req.get('host')}/images/imagesEconomies/${req.file.filename}` : null
        };
        
        console.log(images);
        console.log(datePublication)
        const economie = await new Economie({
            titres: {
                grandTitre, contenuGrandTitre, ...images,
                sousTitres: [
                    { sousTitre: sousTitre1, contenuSousTitre: contenuSousTitre1},
                    { sousTitre: sousTitre2, contenuSousTitre: contenuSousTitre2},
                ],
            },
            auteur, categorie, tags, datePublication
        });
        console.log(economie)
        economie.save()
            .then(() => res.status(201).json({message: 'Object enregistré'}))
            .catch((error) => res.status(400).json({ error }));
    }

    // recuperation de tous les articles 
    static getAll(req, res) {
        Economie.find()
            .then(article => res.status(200).json(article))
            .catch(error => {
                console.error(error);
                res.status(500).json({ error : "Erreur lors de la recuperation de données"})
            })
    }
    
    static getOne(req, res) {
        console.log(req.params);
        //recuperation de l'ID de l'article
        const articleId  = req.params.id;
        console.log(articleId);

        //recherche de l'article via son id
        Economie.findOne({ _id : articleId})
        .then(article => res.status(200).json(article))
        .catch(error => res.status(404).json({error}));
        
    }
    static UpdateOne(req, res) {
        
    }
    static deleteOne(req, res) {
        
    }
}
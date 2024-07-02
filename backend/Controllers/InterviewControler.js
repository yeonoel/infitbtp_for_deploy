import Interview from "../models/interviews.js";

export default class InterviewControler {
    static async createInterview (req, res) {
        
        const interviewMiniatureUrl = req.file ? `${req.protocol}://${req.get('host')}/images/interviewsMiniature/${req.file.filename}` : null;

        req.body.interviewsMiniature = interviewMiniatureUrl;
        
        const interviews = await new Interview(req.body);
        console.log(interviews)
        interviews.save()
            .then(() => res.status(201).json({message: 'Object enregistré'}))
            .catch((error) => res.status(400).json({ error }));
    }

    // recuperation de tous les articles de public reportage
    static getAll(req, res) {
        Interview.find()
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
        Interview.findOne({ _id : articleId})
        .then(article => res.status(200).json(article))
        .catch(error => res.status(404).json({error}));
        
    }
    static UpdateOne(req, res) {
        
    }
    static deleteOne(req, res) {
        
    }
}
import Survey from "../models/sondage.js";

export default class SondagesContoler {
    static async createSurvey(req, res) {
        console.log(req.body)
        const survey = await new Survey(req.body);
        console.log(survey);
        survey.save()
            .then(() => res.status(201).json({message: "Object enregistré avec success"}))
            .catch(error => res.status(400).json({error}));
    }

    static async handleVote(req, res) {
        try {
            const surveyId = req.params.surveyId;
            const optionId = req.params.optionId;

            const survey = await Survey.findById(surveyId);
            if (!survey) {
                return res.status(404).json({ message: "Sondage non trouvé" });
            }

            const option = survey.options.id(optionId);
            if (!option) {
                return res.status(404).json({ message: "Option non trouvée" });
            }

            option.votes += 1;
            survey.totalVotes += 1;

            await survey.save()
                .then((data) => res.status(200).json(data))
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static getAll(req, res) {
        Survey.find()
            .then(survey => res.status(200).json(survey))
            .catch(error => {
                console.error(error);
                res.status(500).json({ error : "Erreur lors de la recuperation de données"})
            });   
    }
    
    static getOne(req, res) {
        console.log(req.params);
        //recuperation de l'ID de l'article
        const {surveyId}  = req.params;
        console.log(surveyId);

        //recherche de l'article via son id
        Survey.findOne({ _id : surveyId})
        .then(survey => res.status(200).json(survey))
        .catch(error => res.status(404).json({error}));
        
    }
    static UpdateOne(req, res) {
        
    }
    static getDeleteOne(req, res) {
        
    }
}
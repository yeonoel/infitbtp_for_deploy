
// import multer config items
import uploadPublicreportage from '../middlewares/multer-config_publicReportage.js';
import uploadEconomie from '../middlewares/multer-config_economir.js';
import uploadOpinion from '../middlewares/multer-config_opinions.js';
import uploadDivers from '../middlewares/multer-config_divers.js';
import uploadEnquetesExclusives from '../middlewares/multer-config_enquetesExclusives.js';
import uploadInstitutions from '../middlewares/multer-config_institutions.js';
import uploadInterviewMiniature from '../middlewares/videos/multer-config_interview_miniature.js';



// import controller fonction
import PublicReportageControler from '../Controllers/PublicReportageControler.js';
import EconomieControler from '../Controllers/EconomieControler.js'
import OpinionControler from '../Controllers/OpinionControler.js';
import DiversController from '../Controllers/DiversController.js';
import EnquetesExclusivesControler from '../Controllers/EnquetesExclusivesControler.js.js';
import InstitutionControler from '../Controllers/InstitutionControler.js';
import InterviewControler from '../Controllers/InterviewControler.js';
import SondagesControler from '../Controllers/SondagesControler.js'
import ContactsControler from '../Controllers/ContactsControler.js';
import SubscriberControler from '../Controllers/SubscriberControler.js';
import SearchControler from '../Controllers/SearchControler.js';

const injectionRoutes = (api) => {
    // Public reportage 
    api.get('/publicreportage', PublicReportageControler.getAll);
    api.get('/publicreportage/:id', PublicReportageControler.getOne);
    api.post('/publicreportage', uploadPublicreportage, PublicReportageControler.createPublicReportage);
    // api.update('/publicreportage', PublicReportageControler.getAll);
    // api.delete('/publicreportage', PublicReportageControler.deleteOne);

    // // Economie
    api.get('/economie', EconomieControler.getAll);
    api.get('/economie/:id', EconomieControler.getOne);
    api.post('/economie', uploadEconomie, EconomieControler.createEconomie);
    // api.update('/publicreportage', PublicReportageControler.getAll);
    // api.delete('/publicreportage', PublicReportageControler.deleteOne);

    // // Enquetes exlusives
    api.get('/enquetesExclusives', EnquetesExclusivesControler.getAll);
    api.get('/enquetesExclusives/:id', EnquetesExclusivesControler.getOne);
    api.post('/enquetesExclusives', uploadEnquetesExclusives, EnquetesExclusivesControler.createEnquetesExclisives);
    // api.update('/publicreportage', PublicReportageControler.getAll());
    // api.delete('/publicreportage', PublicReportageControler.deleteOne());

    // // Institution
    api.get('/institutions', InstitutionControler.getAll);
    api.get('/institutions/:id', InstitutionControler.getOne);
    api.post('/institutions', uploadInstitutions, InstitutionControler.createInstitutions);
    // api.update('/publicreportage', PublicReportageControler.getAll());
    // api.delete('/publicreportage', PublicReportageControler.deleteOne());

    // // Opinions
    api.get('/opinions', OpinionControler.getAll);
    api.get('/opinions/:id', OpinionControler.getOne);
    api.post('/opinion', uploadOpinion, OpinionControler.createOpinion);
    // api.update('/publicreportage', PublicReportageControler.getAll());
    // api.delete('/publicreportage', PublicReportageControler.deleteOne());

    // // Interviews
    api.get('/interviews', InterviewControler.getAll);
    api.get('/interviews/:id', InterviewControler.getOne);
    api.post('/interviews', uploadInterviewMiniature, InterviewControler.createInterview);
    // api.update('/publicreportage', InterviewControler.update);
    // api.delete('/publicreportage', PublicReportageControler.deleteOne());

    // // Sondages
    api.post('/sondages', SondagesControler.createSurvey);
    api.put('/sondages/:surveyId/:optionId', SondagesControler.handleVote);
    api.get('/sondages', SondagesControler.getAll);
    api.get('/sondages/:surveyId', SondagesControler.getOne);
    // api.update('/publicreportage', PublicReportageControler.getAll());
    // api.delete('/publicreportage', PublicReportageControler.deleteOne());

    // // Divers
    api.get('/divers', DiversController.getAll);
    api.get('/divers/:id', DiversController.getOne);
    api.post('/divers', uploadDivers, DiversController.createDivers);
    // api.update('/publicreportage', PublicReportageControler.getAll());
    // api.delete('/publicreportage', PublicReportageControler.deleteOne());

    // // Videos Journalistiques
    //api.get('/videosJournalistique', PublicReportageControler.getAll);
    //api.post('/videosJournalistique', PublicReportageControler.createVideoJournalistique);
    // api.update('/videosJournalistique', PublicReportageControler.getAll());
    // api.delete('/videosJournalistique', PublicReportageControler.deleteOne());

    // // Contacts
    // api.get('/publicreportage', PublicReportageControler.getAll());
    api.post('/contact', ContactsControler.createContact);
    // api.update('/publicreportage', PublicReportageControler.getAll());
    // api.delete('/publicreportage', PublicReportageControler.deleteOne());

    // // Abonnement
    //api.get('/videosJournalistique', PublicReportageControler.getAll);
    api.post('/abonnement', SubscriberControler.createSubscription);
    // api.update('/videosJournalistique', PublicReportageControler.getAll());
    // api.delete('/videosJournalistique', PublicReportageControler.deleteOne());

    // // Search informations
    //api.get('/videosJournalistique', PublicReportageControler.getAll);
    api.get('/recherche/:q', SearchControler.rechercherElements);
    // api.update('/videosJournalistique', PublicReportageControler.getAll());
    // api.delete('/videosJournalistique', PublicReportageControler.deleteOne());

}

export default injectionRoutes;
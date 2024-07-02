import Contact from "../models/contact.js";

export default class ContactsControler {
    static async createContact(req, res) {
        console.log(req.body)
        try {
            const { name, email, subject, message } = req.body;

            const newContact = await Contact.create({ name, email, subject, message });
            console.log(newContact)
            res.status(201).json({ message: 'Message envoyé avec succès', data: newContact });
        } catch (error) {
            res.status(400).json({ message: 'Erreur lors de l\'envoi du message', error });
        }
    }
    static getOne(req, res) {
        
    }
    static UpdateOne(req, res) {
        
    }
    static getDeleteOne(req, res) {
        
    }
}
// multer-config.js
import multer from "multer";

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp'
};
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/interviewsMiniature/');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

const uploadInterviewMiniature = multer({ storage: storage }).single("interviewMiniature");

export default uploadInterviewMiniature;  

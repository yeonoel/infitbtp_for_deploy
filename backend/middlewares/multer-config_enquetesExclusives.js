// multer-config.js
import multer from "multer";

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images/imagesEnquetesExclusives/');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

const uploadEnquetesExclusives = multer({ storage: storage }).single("imageGrandTitre");

export default uploadEnquetesExclusives;  
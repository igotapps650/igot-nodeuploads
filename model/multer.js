const multer = require("multer");

// set fileStorageEngine -we are saving the incoming files to the image folder
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

//WITHOUT CHECKING FILETYPE -to check for type add more option to multer
const upload = multer({ storage: fileStorageEngine });

module.exports = upload;

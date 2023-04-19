'use strict';

const multer = require(`multer`);
const path = require(`path`);
const fs = require(`fs`);

const Utils = require(`@helpers/utils`);

const report = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = `./images/report`;
    if (!fs.existsSync(path)) {
      fs.mkdirSync(`./images/report`, { recursive: true });
    }
    cb(null, path);
  },
  filename: function (req, file, cb) {
    const uuid = Utils.uid(30);
    const newFileName = `img-report-` + uuid + path.extname(file.originalname.split('.').shift() + '.jpg')
    cb(null, newFileName);
  }
});

const imageFilter = function (req, file, cb) {
  // Accept images only
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
    req.fileValidationError = `Only image files are allowed!`;
    return cb(new Error(`Only image files are allowed!`), false);
  }
  cb(null, true);
};

module.exports = {

  report: (req, res, next) => {
    const upload = multer({ storage: report, fileFilter: imageFilter }).single(`file`);
    upload(req, res, function (err) {
      if (req.fileValidationError) {
        return res.send(req.fileValidationError);
      } else if (!req.file) {
        return res.status(400).send(`Please select an image to upload`);
      } else if (err instanceof multer.MulterError) {
        return res.send(err);
      } else if (err) {
        return res.send(err);
      }
      next();
    });
  },

};

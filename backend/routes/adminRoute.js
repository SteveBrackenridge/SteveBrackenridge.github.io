// /backend/routes/media.js
const router = require('express').Router();
const multer = require('multer');
const AWS = require('aws-sdk');
const Image = require('../models/image');
const Video = require('../models/video');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

router.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  const s3Params = {
    Bucket: process.env.AWS_S3_BUCKET,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read'
  };

  s3.upload(s3Params, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error -> " + err });
    }
    res.json({ message: 'File uploaded successfully', url: data.Location });
  });
});

module.exports = router;

const multer = require("multer");

module.exports = (multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, ('public/upload/products'))
    },
    filename: (req, file, cb) => {
      cb(null, Date.now().toString() + "_" + file.originalname)
    },    
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
    const extensionImage = ['image/png', 'image/jpeg', 'image/jpg'].find(acceptFormat => acceptFormat == file.mimetype)

    if(extensionImage) {
      return cb(null, true)
    }

    return cb(new Error('Invalid file type'), false)
  }
}))
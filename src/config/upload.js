const multer = require('multer')
const path = require('path')
const random = require('randomstring')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req, file, cb) => {
      const rnd = random.generate({
        length: 15,
        charset: 'alphanumeric'
      })
      const ext = path.extname(file.originalname)
      cb(null, `${rnd}-${Date.now()}${ext}`)
    }
  })
}
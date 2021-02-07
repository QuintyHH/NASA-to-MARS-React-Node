const path = require('path')
const cfg = require('../config')
const bucket = require('../consumers/s3')
const csv = require('fast-csv')

exports.home = (_, res) => {
  res.sendFile('/index.html', {
    root: path.join(__dirname, '../', cfg.RELATIVE_PATH),
  })
}

exports.test = (req, res) => {
  // bucket.uploadFile(req)
  res.send({ test: 'value', test2: 'value2' })
  console.log(req.file)
  const fileRows = []

  // open uploaded file
  csv
    .fromPath(req.file.path)
    .on('data', function (data) {
      fileRows.push(data) // push each row
    })
    .on('end', function () {
      console.log(fileRows)
      fs.unlinkSync(req.file.path) // remove temp file
      //process "fileRows" and respond
    })
}

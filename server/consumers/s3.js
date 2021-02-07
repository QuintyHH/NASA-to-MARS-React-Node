const fs = require('fs')
const AWS = require('aws-sdk')
const config = require('../config.json')
const s3 = new AWS.S3({
  accessKeyId: config.S3.ID,
  secretAccessKey: config.S3.SECRET,
})

const currentTime = () => Date.now()

exports.uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(file)
  const params = {
    Bucket: config.S3.BUCKET_NAME,
    Key: `${config.S3.FILE_NAME}-${currentTime()}.csv`, // File name you want to save as in S3
    ContentType: 'text/csv',
    Body: fileContent,
  }
  s3.upload(params, (err, data) => {
    err
      ? console.log(`File uploaded failed. ${err}`)
      : console.log(`File uploaded successfully. ${data.Location}`)
  })
}

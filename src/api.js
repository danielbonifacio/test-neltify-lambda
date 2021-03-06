const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()

router
  .get('/', (req, res) => {
    res.send({
      message: 'everything is working fine'
    })
  })

app.use(express.json())
app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)

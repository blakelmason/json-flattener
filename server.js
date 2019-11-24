//native modules
const path = require('path')
const fs = require('fs')

//foreign modules
const express = require('express')
const bodyParser = require('body-parser')

//native files
const scripts = require('./scripts')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'client')))

app.get('/csv', (req, res) => res.download('csv_report.csv', 'report.csv'))

app.post('/csv', (req, res) => {
  const report = JSON.parse(req.body.json)
  const flat = scripts.flatten(report)
  const csvReport = scripts.createCsv(flat)
  fs.writeFile('csv_report.csv', csvReport, err => {
    if (err) throw err
    console.log('wrote to file')
    res.end()
  })
})

app.get('/json', (req, res) =>
  res.download('samples/sales_report.json', 'sales_report.json')
)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`))

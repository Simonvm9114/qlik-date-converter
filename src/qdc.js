const path = require('path')
const express = require('express')
const moment = require('moment')

const app = express()
const port = process.env.PORT || 3005

// Define paths for Express config
const staticContent = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(staticContent))

app.get('', (req, res) => {
    console.log('index page loaded')
})

app.get('/date', (req, res) => {
    if (!req.query.number) {
        return res.send({
            error: 'You must provide an address'
        })
    }

    const qlikRootDate = moment("30-12-1899", "DD-MM-YYYY")
    const convertedDate = qlikRootDate.add(req.query.number, 'd').format('DD-MM-YYYY').toString()
    
    console.log(convertedDate)
    console.log(qlikRootDate)

    return res.send({
        status: 'Success',
        date: convertedDate
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
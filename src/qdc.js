const path = require('path')
const express = require('express')
const moment = require('moment')
const validator = require('validator')

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
            error: 'Number parameter is required.'
        })
    }

    if (!validator.isInt(req.query.number)) {
        return res.send({
            error: 'Invalid data type: only integer numbers are allowed.'
        })
    }

    const qlikRootDate = moment("30-12-1899", "DD-MM-YYYY")
    const convertedDate = qlikRootDate.add(req.query.number, 'd').format('DD-MM-YYYY').toString()

    return res.send({
        status: 'Success',
        date: convertedDate
    })
})

app.get('/number', (req, res) => {
    if (!req.query.date) {
        return res.send({
            error: 'Date parameter is required.'
        })
    }

    if (!validator.isDate(req.query.date, 'YYYY-MM-DD')) {
        return res.send({
            error: "Invalid data type. Only datestrings formatted as YYYY-MM-DD are allowed."
        })
    }

    const qlikRootDate = moment("30-12-1899", "DD-MM-YYYY")
    const dateToCalculate = moment(req.query.date, "YYYY-MM-DD")
    const convertedNumber = dateToCalculate.diff(qlikRootDate, 'days')

    return res.send({
        status: 'Success',
        number: convertedNumber
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})
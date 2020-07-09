console.log('Converter is running')

const numberForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


numberForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const number = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(`/date?number=${number}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
                messageTwo.textContent = ''
            } else {
                messageOne.textContent = data.status
                messageTwo.textContent = data.date
            }
        })
    })
    // fetch(`/weather?address=${location}`).then((response) => {
    //     response.json().then((data) => {
    //         if (data.error) {
    //             messageOne.textContent = data.error
    //             messageTwo.textContent = ''
    //         } else {
    //             messageOne.textContent = data.location
    //             messageTwo.textContent = data.forecast
    //         }
    //     })
    // })
})


// const addDays = require('../../src/utils/addDays')
// const moment = require('moment')

// const qlikRootDate = moment("30-12-1899", "DD-MM-YYYY")
// console.log(qlikRootDate)

// const newDate = qlikRootDate.add(33695, 'd')

// console.log(newDate.format('DD-MM-YYYY'))
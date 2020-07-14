console.log('Converter is running')

const numberForm = document.querySelector('#numberForm')
const numberSearch = document.querySelector('#numberInput')
const messageOne = document.querySelector('#message-1')

numberForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const number = numberSearch.value

    messageOne.textContent = 'Loading...'

    fetch(`/date?number=${number}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.date
            }
        })
    })
})

const dateForm = document.querySelector('#dateForm')
const dateSearch = document.querySelector('#datePicker')
const messageThree = document.querySelector('#message-3')

dateForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const date = dateSearch.value

    messageThree.textContent = 'Loading...'

    fetch(`/number?date=${date}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageThree.textContent = data.error
            } else {
                messageThree.textContent = data.number
            }
        })
    })
})
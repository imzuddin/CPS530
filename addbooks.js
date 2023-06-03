const booksURL = 'http://127.0.0.1:3000'

const onSubmit = (e) => {
    e.preventDefault()

    let title = document.getElementById('InputTitle').value
    let author = document.getElementById('InputAuthor').value
    let publisher = document.getElementById('InputPublisher').value
    let date = document.getElementById('InputDate').value
    let website = document.getElementById('InputWebsite').value

    $.ajax({
        url: `${booksURL}/bookinventory/add`,
        type: 'POST',
        data: {
            'title': title,
            'author': author,
            'publisher': publisher,
            'date': date,
            'website': website
        },
        success: (response) => {
            console.log(response)
        },
        error: (response) => {
            console.log(response)
        }
    })
}

$(document).ready(() => {
    document.getElementById('submit').addEventListener('click', onSubmit)
})
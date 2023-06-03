const booksURL = 'http://127.0.0.1:3000'
let currIdx = 0
let booksData;

const displayBook = (book) => {
    $(".card-title").html(book.title)
    $(".card-subtitle").html(book.author)
    $(".one").text(`Publisher: ${book.publisher}`)
    $(".two").text(`Date Published: ${book.date}`)
    $(".three").text(`Website: ${book.website}`)
}

const handleNextClick = () => {
    currIdx++;

    if (currIdx == booksData.length) {
        currIdx = 0;
      }

    displayBook(booksData[currIdx])
}

const handlePrevClick = () => {
    currIdx--;

    if (currIdx < 0) {
        currIdx = (booksData.length)-1; 
      }

    displayBook(booksData[currIdx])
}
$("#next").on("click", handleNextClick);
$("#prev").click(handlePrevClick);

$.ajax({
    url: `${booksURL}/bookinventory/list`,
    type: 'GET',
    success: (response) => {
        booksData = response
        displayBook(booksData[currIdx]);
    },
    error: (response) => {
        console.log(response)
    }
})

$(document).ready(() => {
    document.getElementById('next').addEventListener('click', handleNextClick)
    document.getElementById('prev').addEventListener('click', handlePrevClick)

})


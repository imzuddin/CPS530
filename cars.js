const carsURL = 'https://raw.githubusercontent.com/tofighi/dataset/main/big-data/web/car.json'
let carsData; 
$.ajax({
    url: carsURL,
    type: 'GET',
    success: (response) => {
        setData(response)
    },
    error: (response) => {
        console.log(response)
    }
})

const renderHTML = (data) => {
    console.log(data)

    let statsDict= {'year': data.year, ...data.brakes, ...data.engine}
    console.log(statsDict)

    const StatsList = Object.entries(statsDict).map(([key, value]) => (
    
    `<tr>
        <td> ${key.toUpperCase()} </td>
        <td> ${value} </td>
    </tr>`
    
    ))

    console.log(StatsList)

    $("#titleName").append('<h1>', `${data.name}`)

    $(".img-fluid").attr("src", data.imageURL)
    $("#statsTable").append(StatsList)

    // $("#img-fluid").attr("alt", data.imageURL)


}
const setData = (response) => {
    const carsData = JSON.parse(response)

    renderHTML(carsData)


}






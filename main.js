let currentIndex = 0; 

let advertisementUrls = [
  "./images/ad_one.jpg",
  "./images/ad_two.jpg",
  "./images/ad_three.jpg",
  "./images/ad_four.jpg"
]

let descriptionUrls = [
  "./components/descriptions/descriptionOne.html",
  "./components/descriptions/descriptionTwo.html",
  "./components/descriptions/descriptionThree.html",
  "./components/descriptions/descriptionFour.html"
];

$(document).ready(() => {
    $('#recipeCardControls').carousel();

    $(".carousel-control-prev").click(() => {
      $("#recipeCardControls").carousel("prev");
    });

    $(".carousel-control-next").click(() => {
      $("#recipeCardControls").carousel("next");
    });

    $('.navbar-toggler').click(() => {
      $('.collapse').collapse("toggle");
    });


  });


  const iterImage = () => {
    let url = advertisementUrls[currentIndex]
    let descUrl = descriptionUrls[currentIndex]

    let image = $.ajax({
      url:url,
      type:'GET',
      xhrFields: {
        responseType: 'blob'
      },
      success: (response) => {
        let imageUrl = URL.createObjectURL(response);
        
        console.log(imageUrl)
        $("#img-fluid").attr("src", imageUrl);
      }, 
      error: (response) => {
  
  
        console.log(imageUrl)
      }
    })

    let description = $.ajax({
      url: descUrl,
      type: "GET",
      success: (response) => {
        $("#description").html(response)
      }
    })
  
    if(currentIndex < advertisementUrls.length-1) {
      currentIndex++;
    } else {
      currentIndex=0
    }
  
  }

  iterImage()
  
  setInterval(iterImage, 20000)

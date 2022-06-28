async function getHotels() {
    return fetch('../model/db.json')
        .then(function (response) {
            return response.json();
        })
        .then((data) => data)        
        .catch((error) => [])
}

function reviewData(data) {
    //console.log(data)
    let output = '<h2">Reviews</h2>';
    for (var i = 0; i < data.reviews.length; i++) {
        console.log(i, data.reviews[i]);
        output += `
          <ul>
            <li>Mark:${data.reviews[i].title}</li>
            <li>Down: ${data.reviews[i].description}</li>
          </ul>
        `;
    }
    
}

window.onload = function () {
    searchHotel()
};

async function searchHotel() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const {reviews:data, hotels} = await getHotels();
    const reviews = data.filter(el => el.hotelId == id);
    const hotel = hotels.find(el => el.id == id)
    let output = `<h2>${hotel.title} Reviews </h2>`;
    for(let i in reviews) {
        output += `
          <ul>
            <li>Mark:${reviews[i].title}</li>
            <li>Down: ${reviews[i].description}</li>
          </ul>
        `;
    }
    document.getElementById('reviews').innerHTML = output;
    
}

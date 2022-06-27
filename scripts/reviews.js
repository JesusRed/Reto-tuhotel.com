fetch('../model/db.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        reviewData(data);
    })

    .catch((error) => {
        console.log(`Error Fetching data : ${error}`)
        document.getElementById('reviews').innerHTML = 'Error Loading Data'
    })

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
    document.getElementById('reviews').innerHTML = output;
}
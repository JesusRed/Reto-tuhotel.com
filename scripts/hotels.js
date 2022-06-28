fetch('model/db.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    hotelsData(data);
  })

  .catch((error) => {
    console.log(`Error Fetching data : ${error}`)
    document.getElementById('hotels').innerHTML = 'Error Loading Data'
  })

function hotelsData(data) {
  //console.log(data)
  let output = '';
  for (var i = 0; i < data.hotels.length; i++) {
    for (const element of data.reviews) {
      if (element.hotelId === data.hotels[i].id) {
        console.log(i, data.hotels[i]);
        output += `
            <tr>
            <td><a onclick="reviewsPage(${data.hotels[i].id})">${data.hotels[i].title}</a></td>
            <td>${element.description}</td>
            </tr>
          `;
      }

    }
  }
  document.getElementById('hotels').innerHTML = output;
}

function reviewsPage(id) {
  console.log(id);
  window.open(`http://localhost:5500/pages/reviews.html?id=${id}`,"_blank");
}


// function fetchData() {
//     fetch('model/hotels.json)')
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data)
//             let output = '<h2">Hotels</h2>'
//             data.forEach(function (item) {
//                 output += `
//           <ul>
//             <li>Title: ${item.title}</li>
//             <li>Description: ${item.description}</li>
//           </ul>
//         `
//             })
//             document.getElementById('hotels').innerHTML = output
//         })
//         .catch((error) => {
//             console.log(`Error Fetching data : ${error}`)
//             document.getElementById('hotels').innerHTML = 'Error Loading Data'
//         })
// }

// fetchData()


// var divContainer = document.getElementById("titles"); href="pages/reviews.html"
//     for (const element of data) {
//         var title = document.createElement("p");
//         title.innerHTML = 'Title: '+element.title;
//         divContainer.appendChild(title);
//     }
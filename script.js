// Q1
// let namesInput = document.getElementById('nameInput');
// let displayDiv = document.getElementById('output');
//
// let btnClick = document.getElementById('btn');
// btnClick.addEventListener('click', predictAge);
//
// function predictAge() {
//     let name = namesInput.value;
//
//     fetch(`https://api.agify.io?name=${name}`)
//         .then((response) => response.json())
//         .then(data => {
//             displayDiv.innerHTML = `Hello ${data.name},I guess your age is ${data.age} `
//         })
// }


//Q2
// let skyAPI = fetch("https://go-apod.herokuapp.com/apod")
//     .then((response) => response.json())
//     .then(data => {
//         let title = data.title;
//         let imageUrl = data.url;
//         let description = data.explanation;
//
//         document.getElementById("title").innerHTML = title;
//         document.getElementById("image").src = imageUrl;
//         document.getElementById("description").innerHTML = description;
//
//         if (localStorage.getItem(title) == null) {
//             localStorage.setItem(title, JSON.stringify({ imageUrl, description }));
//         }
//     });

//Q3

let priceTag = document.getElementById('price');
let prevPrice = 0;
let prices =[];

function displayData() {
    fetch("https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
        .then(response => response.json())
        .then(data => {
            let color;
            if (data.lastPrice > prevPrice) {
                color = 'green';
            } else {
                color = 'red';
            }
            priceTag.innerHTML = `The price of ${data.symbol} is <span style="color: ${color}">${data.lastPrice}</span>`;
            prevPrice = data.lastPrice;
            prices.push(prevPrice)
            console.log(prices)
        })

    setTimeout(displayData, 6000);
}

displayData();
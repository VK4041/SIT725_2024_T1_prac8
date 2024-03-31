let cardList = [
    {
        title: "Melbourne City",
        image: "./images/melb.png",
        description: `Food capital of Australia. Filled with beautiful scenaries and a
        spectacular city with sky-scrapers and wonderful beaches. A must visit in my book!`,
        // Image sourced from vector stock
        link: "https://www.vectorstock.com/",
        linkText: "Visit Melbourne"
    },
    {
        title: "Sydney City",
        image: "./images/syd.png",
        description: `The capital of The Australian State of New South Wales. Sydney is popular tourist destination famous for its harbour and Opera House.`,
        // Image sourced from vector stock
        link: "https://www.vectorstock.com/",
        linkText: "Visit Sydney"
    },
    {
        title: "Brisbane City",
        image: "./images/bris.png",
        description: `The capital of Queensland is situated on the Brisbane River. Famous for its vast and open parklands, lookouts and local markets.`,
        // Image sourced from vector stock
        link: "https://www.vectorstock.com/",
        linkText: "Visit Brisbane"
    }
]

let body = document.body;
let container = document.createElement('div');
let cardRow = document.createElement('div');

container.classList.add('container-fluid');
cardRow.classList.add('row', 'justify-content-center');

function addCards(cards) {
    let i = 1; // counter for image alt attribute
    cards.forEach(card => {

        //Raw HTML content for card
        let div = document.createElement('div');
        div.classList.add("col-lg-4", "col-sm-5", "my-2");
        div.innerHTML = `
                <div class="card text-center">
                    <img src= "${card.image}" alt="Image${i++}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text lead">${card.description}</p>
                        <p class="card-text"><a href="${card.link}" target="_blank">${card.linkText}</a></p>
                    </div>
                </div>
        `;
        cardRow.appendChild(div);
    });
}


// Button for modal
let btnContainer = document.createElement("div");
let button = document.createElement("button");

btnContainer.classList.add("d-flex", "justify-content-center", "mb-3");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary", "text-center");
button.setAttribute("data-bs-toggle", "modal");
button.setAttribute("data-bs-target", "#modalForm");
button.innerHTML = "Click Me";

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
    let formData = {
        Firstname: document.getElementById('firstName').value,
        Lasttname: document.getElementById('lastName').value,
        Email: document.getElementById('email').value,
        Password: document.getElementById('password').value
    };
    console.log("Form Submitted: ", formData);
});

//Append Everything at the end
container.appendChild(cardRow);
body.appendChild(container);
btnContainer.appendChild(button);
body.appendChild(btnContainer);

document.addEventListener("DOMContentLoaded", function () {
    addCards(cardList);
});
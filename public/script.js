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
                    <img src= "${card.path}" alt="Image${i++}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text lead">${card.description}</p>
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
function clicked() {
    alert('City data posted successfully!');
}
function submitForm() {
    let formData = {
        title: document.getElementById('title').value,
        path: document.getElementById('path').value,
        description: document.getElementById('desc').value,
    };
    console.log("Form Submitted: ", formData);
    postCities(formData);
    clicked();
};

const getCards = () => {
    $.get('/api/cities', (response) => {
        if (response.statusCode == 200) {
            addCards(response.data);
        }
    })
}
const postCities = (formData) => {
    $.post('/api/cities', formData);
}
//Append Everything at the end
container.appendChild(cardRow);
body.appendChild(container);
btnContainer.appendChild(button);
body.appendChild(btnContainer);

$(document).ready(function () {
    $("#submit").click(() => {
        submitForm();
    });
    getCards();
});
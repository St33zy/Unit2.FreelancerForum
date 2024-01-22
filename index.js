const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
];

const moreFreelancers = [
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
];

//renders i
const render = document.querySelector('.table');
function renderFreelancer(freelancer) {
    const row = document.createElement('tr');
    const nameCell = document.createElement('td');
    const occupationCell = document.createElement('td');
    const priceCell = document.createElement('td');

    nameCell.textContent = freelancer.name;
    occupationCell.textContent = freelancer.occupation;
    priceCell.textContent = `$${freelancer.price}`;

    row.appendChild(nameCell);
    row.appendChild(occupationCell);
    row.appendChild(priceCell);

    render.appendChild(row);
}
//renders 2 inital freelancers on page from first array and calculates and updates the average start price
function renderInitialFreelancers() {
    freelancers.forEach(renderFreelancer);

    const totalStartingPrice = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);
    const averageStartingPrice = totalStartingPrice / freelancers.length;

    document.querySelector('.average').textContent = `The average starting price is: $${averageStartingPrice.toFixed(2)}`;
}

renderInitialFreelancers();
//
function addFreelancers() {
    if (freelancers.length + moreFreelancers.length <= 15) {
        const randomIndex = Math.floor(Math.random() * moreFreelancers.length); // Generate a random index to select a freelancer from the moreFreelancers array
        const freelancer = moreFreelancers[randomIndex];  // Retrieve the randomly selected freelancer

        freelancers.push(freelancer);  // Add the selected freelancer to the freelancers array

        renderFreelancer(freelancer); // Render the details of the newly added freelancer on the webpage

        const totalStartingPrice = freelancers.reduce((total, freelancer) => total + freelancer.price, 0);  // Calculate the total starting price of all freelancers
        const averageStartingPrice = totalStartingPrice / freelancers.length; // Calculate the average starting price

        document.querySelector('.average').textContent = `The average starting price is: $${averageStartingPrice.toFixed(2)}`; // Update the average price to display the new average starting price and is rounded by '(2)' decimal places
    } else {
        clearInterval(addFreelancersIntervalId); // stop adding freelancers by clearing the interval
    }
}

//adds new freelancer every 3 seconds
const addFreelancersIntervalId = setInterval(addFreelancers, 3000);
const houses = [
    { id: 1, title: '3 BHK Apartment', location: 'Nungambakkam', price: 'RS.30000/month' },
    { id: 2, title: '2 BHK Condo', location: 'Shollingnallur', price: 'RS.32000/month' },
    { id: 3, title: 'Studio Apartment', location: 'Porur', price: 'RS.24000/month' }
];

// Show section based on navigation click
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Populate house listings
function displayHouses() {
    const container = document.getElementById('houseContainer');
    houses.forEach(house => {
        const houseDiv = document.createElement('div');
        houseDiv.classList.add('house-card');
        houseDiv.innerHTML = `
            <h3>${house.title}</h3>
            <p>Location: ${house.location}</p>
            <p>Price: ${house.price}</p>
            <button onclick="bookHouse(${house.id})">Book</button>
        `;
        container.appendChild(houseDiv);
    });
}

// Book a house (dummy functionality)
function bookHouse(id) {
    alert(`House ID ${id} has been booked!`);
}

// Handle Login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    alert(`Login successful for ${email}!`);
    showSection('houses');
});

// Handle Register form submission
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    alert(`Welcome, ${name}! Your account has been created.`);
    showSection('login');
});

// Initialize the app with house listings
window.onload = function() {
    displayHouses();
};

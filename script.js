// I used resources like ChatGPT, Youtube, and some of yoour example code
// Stores car oobjects
let cars = [];

// Handles form submission
function addCar() {
    // Get form input values
    const name = document.getElementById("name").value;
    const model = document.getElementById("model").value;
    const year = parseInt(document.getElementById("year").value);
    const price = document.getElementById("price").value;

    // Create car object
    const newCar = { name, model, year, price };

    // Add the new car 
    cars.push(newCar);

    // Display the list 
    displayCars();

    // Clear form fields
    document.getElementById("carForm").reset();
}

// Function to display the list of cars
function displayCars() {
    const carList = document.getElementById("carList");
    carList.innerHTML = ""; // Clear previous content

    // List with prices
    cars.forEach((car) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${car.name} - ${car.model} (${car.year}) - Price: $${car.price}`;
        carList.appendChild(listItem);
    });
}

// Calculate and display total price
function showTotalPrice() {
    const totalPrice = cars.reduce((sum, car) => sum + parseFloat(car.price), 0);

    // Display total price
    document.getElementById("result").textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    // Highest price identifier
    const highestPriceCar = findHighestPriceCar();
    document.getElementById("result").textContent += `\nHighest Price Car: ${highestPriceCar.name} - ${highestPriceCar.model} (${highestPriceCar.year}) - Price: $${highestPriceCar.price}`;
}

// Function to find the car with the highest price
function findHighestPriceCar() {
    return cars.reduce((highestPriceCar, currentCar) => {
        return parseFloat(currentCar.price) > parseFloat(highestPriceCar.price) ? currentCar : highestPriceCar;
    }, cars[0]);
}

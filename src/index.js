import Wishlist from "./wishlist";

let wishlist = new Wishlist();

//Dom Elements
let form = document.querySelector("#submitForm");
//select the input for carmake
let makeInput = document.querySelector("#makeInput");

let modelInput = document.querySelector("#modelInput");

let yearInput = document.querySelector("#yearInput");

let makeDisplay = document.querySelector("#car-make");

let modelDisplay = document.querySelector("#car-model");

let yearDisplay = document.querySelector("#car-year");

let removeBtn = document.querySelector("#removeBtn");

let listUl = document.querySelector("#wishListContainer > ul");

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

// Functions

function showCarDetails(car) {
  //update car display texts
  makeDisplay.textContent = car.make;
  modelDisplay.textContent = car.model;
  yearDisplay.textContent = car.year;
  //enable the remove btn
  removeBtn.disabled = false;
  //set the current car ID to the data-carID attribute
  removeBtn.setAttribute("data-carId", car.id);
}

function updateDOMList() {
  //clear the ul contents
  listUl.innerHTML = "";

  //iterate through the list of cars

  wishlist.list.forEach((car) => {
    //add a li to the UL for each car
    let li = document.createElement("li");
    li.textContent = car.model;
    // add a click event listener to showCarDetails per list item click
    li.addEventListener("click", () => showCarDetails(car));
    listUl.appendChild(li);
  });
}

function addCar(event) {
  event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;

  wishlist.add(make, model, year);

  updateDOMList();

  //reset form values

  makeInput.value = "";
  modelInput.value = "";
  yearInput.value = "";
}

function removeCar() {
  let carId = removeBtn.getAttribute("data-carId");

  //remove selected car
  wishlist.remove(carId);

  updateDOMList(); // update the dom list

  //reset display
  makeDisplay.textContent = "";
  modelDisplay.textContent = "";
  yearDisplay.textContent = "";

  //disable remove button
  removeBtn.disabled = true;
}

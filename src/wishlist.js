import Car from "./car";

export default class Wishlist {
  //two class properties
  list = [];
  nextID = 0;

  //two methods
  add(make, model, year) {
    //use the Car class to create a new car
    let car = new Car(this.nextID++, make, model, year);
    //add that car to the wishlist list
    this.list.push(car);
  }

  remove(carId) {
    //find the car in te wishlist list that matches the remove id
    let index = this.list.findIndex((car) => car.id == carId); //
    //remove it and update wishlist list
    this.list.splice(index, 1);
  }
}

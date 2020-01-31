import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







// class Hero{
//     //properties or attributes
//     //"variables that belong to each instance"
//     constructor(health=18, power=5){
//         this.health = health;
//         this.power = power;
//     }
//     //behaviors or methods
//     //"function that belong to each instance"
//     hug(otherHero){
//         otherHero.recieveHealth(this.power);
        
//     }

//     recieveHealth(amount){
//         this.health += amount;
//         console.log(`Hero has gained health! new amount : ${this.health}`);
//     }
// }

// class Cat{
//     constructor(name="cat", attack=10, health=20 ){
//         this.name = name;
//         this.attack = attack;
//         this.health = health;
//     }

//     scratch(thing){
//         thing.takeDamage(this.attack);
//     }

//     takeDamage(amount){
//         this.health -= amount;
//         console.log(`${this.name} took ${amount} damage`);

//     }
// }

// class Car{
//     constructor(make="Volvo", model="740", year="1985"){
//         this.make=make;
//         this.model=model;
//         this.year=year;
//         this.mileage=0;
//     }

//     drive(miles){
//         this.mileage+=miles;
//     }

//     display(){
//         return `${this.year} ${this.make} ${this.model} has ${this.mileage} miles`;

//     }

//     odometerFraud(amount){
//         this.mileage -= amount;
//     }
// }

// const RSP = new Car();
// const nu3 = new Car("Mazda", "3", "2007");
// const leBaron = new Car("Chrystler", "LeBaron", "1986");
// const aHero = new Hero();
// const anotherHero = new Hero();
// console.log(aHero);
// console.log(anotherHero);
// aHero.hug(anotherHero);
// aHero.hug(anotherHero);

// let newCat = new Cat("babby");
// let otherCat = new Cat("baby G");

// newCat.scratch(otherCat);
// RSP.drive(500);
// console.log(RSP.display());
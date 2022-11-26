import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from './AvailableMeals.module.css'
// import DummyMeals from "./DummyMeals";

const DummyMeals=[
    {
        id:'m1',
        food: "Sushi",
        desc: "Finest fish and veggies",
        price: '22.99'
    },
    {
        id:'m2',
        food: "Schnitzel",
        desc: "A german speciality",
        price: '16.50'
    },
    {
        id:'m3',
        food: "Barbecue Burger",
        desc: "American, raw, meaty",
        price: '12.99'
    },
    {
        id:'m4',
        food: "Green Bowl",
        desc: "Finest fish and veggiesHealthy... and green...",
        price: '22.99'
    }
]
const AvailableMeal =()=>{

const mealItem=DummyMeals.map((ele)=>
<MealItem 
key={ele.id} 
food={ele.food}
desc={ele.desc}
price={ele.price}
/>
)


    return(
        <section className={classes.meals}>
        <Card>
      <ul>{mealItem} </ul> 
      </Card> 
      </section>
    );
}

export default AvailableMeal;
import React from "react";

import classes from './MealSummary.module.css';


const MealSummary=()=>{
    return(
           <div className={classes.summary}>
            <h2> Delicious Food , Delivered to you</h2>
            <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
            <div>
            <p>All our meals are cooked with high quality ingrediants, just-in-time and of course by experienced chefs</p>
            </div>
            
            
        </div>
        

    );
}

export default MealSummary;
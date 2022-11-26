import React, {Fragment} from "react";

import mealsImage from '../../assets/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header =(props)=>{
    return(
        <Fragment>
            <div className={classes.header}>
                <h1>ReactMeals</h1> 
                  <HeaderCartButton onClick={props.onShowCart}/>
            </div>
            <div className={classes['main-image']}>
                { <img src={mealsImage} alt="A table full of food.."/>}
              </div> 
     </Fragment>
    );
}

export default Header;
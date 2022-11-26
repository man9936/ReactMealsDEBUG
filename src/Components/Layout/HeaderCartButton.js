import React from "react";
import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../Store/Cart-context";
const HeaderCartButton =(props)=>{
   const cartCtx= useContext(CartContext)
   let quantity=0;
   cartCtx.items.forEach(item=>{
    quantity = quantity + Number(item.quantity)
   })
    
  return(
    <React.Fragment>
        
            <button className={classes.button} onClick={props.onClick}> 
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span> Your Cart </span>
            <span className={classes.badge}> {quantity} </span>
            </button> 
            </React.Fragment>
    );
}

export default HeaderCartButton;
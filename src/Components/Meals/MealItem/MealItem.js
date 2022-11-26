import MealItemForm from './MealItemForm'
import classes from './MealItem.module.css';

const MealItem =(props)=>{
    const price=`$${props.price}`
    return(
        <li className={classes.meal}>
            <div> 
                <h2>{props.food}</h2>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
                
            </div>
            <div> 
                <MealItemForm id={props.id} item={props}/>
            </div>
        </li>
    );
}

export default MealItem;
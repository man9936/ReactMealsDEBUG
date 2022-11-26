import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../Store/Cart-context'
import { useContext } from 'react'

const Cart =(props)=>{
    let total=0;

    const cartcntx=useContext(CartContext)    

    const hasItems=cartcntx.items.length>0;

    const addItemHandler=(item)=>{

        cartcntx.addItem({ ...item,quantity:1})
        }
        const removeItemHandler=(item)=>{
            if(item.quantity>1){
            cartcntx.addItem({...item,quantity:-1})
            }
            else
            cartcntx.removeItem(item)
        }
    
    const cartItems=(<ul className={classes['cart-items']}>
        {
        cartcntx.items.map((item)=>
          (
            <CartItem key={item.id} 
              name= {item.food} 
              price= {item.price} 
              quantity = {item.quantity} 
              onAdd={addItemHandler.bind(null,item)}
              onRemove={removeItemHandler.bind(null,item)}
              
             />
         )  
    )
    }
    </ul>
    );
   

  cartcntx.items.forEach((item) =>{
    total=total+(Number(item.price)*Number(item.quantity));
  })
  
  total=`$${total.toFixed(2)}`;
  return(
        <Modal onClose={props.onClose}>   
         {cartItems} 
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{total}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
           {hasItems && <button className={classes.button}>Order</button>} 

        </div>
        </Modal>

    );
}

export default Cart;
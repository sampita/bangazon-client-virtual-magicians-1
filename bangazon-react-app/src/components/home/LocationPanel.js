import React from 'react';
import MyAccount from '../myAccount/MyAccount'
import Order from '../Order/order';
import CompleteOrder from './Order/CompleteOrder'
import Confirmation from './OrderConfirmation'

export default props => {

    const currDisplay = () => {
        if 
        (props.displayTitle === "My Account") 
        return <MyAccount changeDisplay={props.changeDisplay} {...props}/>
        if 
        (props.displayTitle === "Complete Order") 
        return <CompleteOrder changeDisplay={props.changeDisplay} 
        getShoppingCartInfo={props.getShoppingCartInfo}/>
        if 
        (props.displayTitle === "Order Confirmation") 
        return <Confirmation changeDisplay={props.changeDisplay} />
        else 
        return <Order changeDisplay={props.changeDisplay} 
        orderProducts={props.orderProducts} 
        emptyCart={props.emptyCart} 
        cancelOrder={props.cancelOrder} 
        orderId={props.orderId} 
        deleteProductFromCart={props.deleteProductFromCart}/>
    }

    return (
        <section>
            <h2>{props.displayTitle}</h2>
            {currDisplay()}
        </section>
    )
}
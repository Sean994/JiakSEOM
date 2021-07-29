import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useState } from 'react';
import CartItem from './CartItem';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const OrderSideBar = (props) => {
  const { order, setOrder, restaurant, subTotal, setSubTotal} = props;
  const [totalItems, setTotalItems] = useState(0)
  const [final, setFinal] = useState(false)
  let history = useHistory();
  let {id} = useParams()

  useEffect(()=>{
    if (!id){
      console.log('hey its final page')
      console.log(order)
      setFinal(true)
    }
  },[id, order])

  const checkOut = () => {
    order.subtotal = subTotal
    history.push('/checkout')
  }

  const completeOrder = () => {
    let axiosPostOrderArray = []
    for (let i of order.orders){
      axiosPostOrderArray.push({"item": i._id ,"quantity": i.quantity})
    }
    axios.post("/api/v1/orders",
    {
      "user": order.user,
      "restaurant": order.restaurant,
      "orders": axiosPostOrderArray
    })
    // .then(res=> {setOrderId(res.data.newOrder._id)})
    .then(res=> history.push(`/review?user=${order.user}&restaurant=${order.restaurant}&orderid=${res.data.newOrder._id}`))
  }

  useEffect(()=>{
    setTotalItems(()=>order.orders.length)
  }, [order.orders.length])

  return (
    <div className="container bg-white text-center py-5 px-0 shadow sticky-top" style={{top: `50px`}}>
      <div className="mb-5">
        <h6 className="fw-light mb-3">
          <FontAwesomeIcon icon={['fas', 'hourglass-half']} className="mx-1" />
          <span>{restaurant.preparation_time}</span>min
        </h6>
        <h5>Your order from: {restaurant?.name}</h5>
        <h5>Total Cart Items: {totalItems}</h5>
      </div>
      <div className="bg-light container-fluid py-4 border-bottom">
        {order['orders'].map((orderItem, index) => (
          <CartItem
            key={index}
            orderItem={orderItem}
            index={index}
            order={order}
            setOrder={setOrder}
            setSubTotal={setSubTotal}
            final={final}
          />
        ))}
      </div>
      <div className="px-3">
        <table className="table table-borderless ">
          <tbody>
            <tr>
              <th scope="row" className="text-start fw-light">
                Subtotal
              </th>
              <td className="text-end">
                {final ? <span>S${order.subtotal}</span> : <span>S${subTotal}</span>}
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start fw-light">
                Delivery fee
              </th>
              <td className="text-end">
                S$ <span>{restaurant.delivery_fee ? restaurant.delivery_fee.toFixed(2): "0.00"}</span>
              </td>
            </tr>
            {
            restaurant.discount_rate ?
              <tr>
                <th scope="row" className="text-start fw-light">
                  Discount ({(restaurant.discount_rate)*100}% off subtotal)
                </th>
                <td className="text-end">
                  S$ <span>-{(restaurant.discount_rate*subTotal).toFixed(2)}</span>{' '}
                </td>
              </tr> 
              :
              null
            }
            <tr>
              <th scope="row" className="text-start">
                Total
              </th>
              <td className="text-end">
              {
              final ? 
              restaurant.discount_rate ?
              (<span>S$ {(order.subtotal+restaurant.delivery_fee-(restaurant.discount_rate*order.subtotal)).toFixed(2)}</span>) : 
              (<span>S$ {(order.subtotal+restaurant.delivery_fee).toFixed(2)}</span>)
              :
              restaurant.discount_rate ?
              (<span>S$ {(subTotal+restaurant.delivery_fee-(restaurant.discount_rate*subTotal)).toFixed(2)}</span>) : 
              (<span>S$ {(subTotal+restaurant.delivery_fee).toFixed(2)}</span>)
              }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {final ?
      <div className="d-grid gap-2">
          <button className="btn btn-danger p-3" onClick={completeOrder}>COMPLETE ORDER</button>
      </div>
      :
      <div className="d-grid gap-2">
        <button className="btn btn-danger p-3" onClick={checkOut}>CHECKOUT &amp; PAYMENT</button>
      </div>
      }
    </div>
  );
};

export default OrderSideBar;

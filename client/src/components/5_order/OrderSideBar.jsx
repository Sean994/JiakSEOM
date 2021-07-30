import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useHistory, useParams } from 'react-router-dom';
import { actions, useMain } from '../utils/MainProvider';
import CartItem from './CartItem';

const postOrderFormat = (orderObj) => {
  const totalArray = [];
  for (const item in orderObj) {
    const newObj = {
      item: item, // id
      quantity: orderObj[item],
    };
    totalArray.push(newObj);
  }
  return totalArray;
};

const OrderSideBar = (props) => {
  const { mainState, mainDispatch } = useMain();
  const { user, order, total_price, restaurant, isAuthenticated, isCheckOut } =
    mainState;

  const history = useHistory();
  const { id } = useParams();

  const location = useLocation();
  console.log('location: ', location);

  console.log('id', id);

  useEffect(() => {
    // if(id !== restaurant._id.toString()){
    //   mainDispatch({type: actions.SETRESTAURANT, payload:  })
    // }

    if (!id) {
      console.log('hey its final page');
    }
  }, [id]);

  console.log('order', order);
  const checkOut = () => {
    const orderArr = Object.keys(order);
    if (orderArr.length === 0) {
      return;
    } else {
      mainDispatch({ type: actions.CHECKOUT });
      history.push('/checkout');
    }
  };

  const completeOrder = () => {
    if (isAuthenticated) {
      const axiosPostOrderArray = postOrderFormat(order);
      mainDispatch({ type: actions.COMPLETEORDER });
      axios
        .post('/api/v1/orders', {
          user: user._id,
          restaurant: restaurant._id,
          orders: axiosPostOrderArray,
        })
        .then((res) =>
          history.push(
            `/review?user=${user._id}&restaurant=${restaurant._id}&orderid=${res.data.newOrder._id}`
          )
        );
    } else {
      history.push('/user/signin');
    }
  };

  // {a:1, b:2}
  // [{a:1}, {b:2}]
  //[{item: id, quantity: 3}]

  const cartObj = postOrderFormat(order);

  const CartItems = (cartObj) => {
    return cartObj.map((orderItem, index) => {
      const cartArr = [];
      if (orderItem.quantity > 0) {
        cartArr.push(<CartItem key={index} orderItem={orderItem} />);
      }
      return cartArr;
    });
  };

  return (
    <div
      className="container bg-white text-center py-5 px-0 shadow sticky-top"
      style={{ top: `20px` }}
    >
      <div className="mb-5">
        <h6 className="fw-light mb-3">
          <FontAwesomeIcon icon={['fas', 'hourglass-half']} className="mx-1" />
          <span>{restaurant.preparation_time}</span>min
        </h6>
        <h5>Your order from: {restaurant?.name}</h5>
        <h5>Total Cart Items: {}</h5>
      </div>
      <div className="bg-light container-fluid py-4 border-bottom">
        {CartItems(cartObj)}
      </div>
      <div className="px-3">
        <table className="table table-borderless ">
          <tbody>
            <tr>
              <th scope="row" className="text-start fw-light">
                Subtotal
              </th>
              <td className="text-end">
                <span>S${total_price}</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start fw-light">
                Delivery fee
              </th>
              <td className="text-end">
                S${' '}
                <span>
                  {restaurant.delivery_fee
                    ? restaurant.delivery_fee.toFixed(2)
                    : '0.00'}
                </span>
              </td>
            </tr>
            {restaurant.discount_rate && (
              <tr>
                <th scope="row" className="text-start fw-light">
                  Discount ({restaurant.discount_rate * 100}% off subtotal)
                </th>
                <td className="text-end">
                  S${' '}
                  <span>
                    -{(restaurant.discount_rate * total_price).toFixed(2)}
                  </span>
                </td>
              </tr>
            )}
            <tr>
              <th scope="row" className="text-start">
                Total
              </th>
              <td className="text-end">
                {restaurant.discount_rate && (
                  <span>
                    S${' '}
                    {(
                      total_price +
                      restaurant.delivery_fee -
                      restaurant.discount_rate * total_price
                    ).toFixed(2)}
                  </span>
                )}
                {!restaurant.discount_rate && (
                  <span>
                    S$ {(total_price + restaurant.delivery_fee).toFixed(2)}
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {isCheckOut && (
        <div className="d-grid gap-2">
          <button className="btn btn-danger p-3" onClick={completeOrder}>
            COMPLETE ORDER
          </button>
        </div>
      )}
      {!isCheckOut && (
        <div className="d-grid gap-2">
          <button className="btn btn-danger p-3" onClick={checkOut}>
            CHECKOUT &amp; PAYMENT
          </button>
        </div>
      )}
    </div>
  );
};

export default OrderSideBar;

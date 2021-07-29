import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useHistory, useParams } from 'react-router-dom';
import { useMain } from '../utils/MainProvider';
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
  const { mainState } = useMain();
  const { user, order, cart, total_price, restaurant } = mainState;
  const [subTotalPrice, setSubTotalPrice] = useState(0);

  const [final, setFinal] = useState(false);
  const history = useHistory();
  const { id } = useParams();

  const location = useLocation();
  //console.log(location);

  useEffect(() => {
    if (!id) {
      console.log('hey its final page');
      setFinal(true);
    }
  }, [id]);

  const checkOut = () => {
    history.push('/checkout');
  };

  const completeOrder = () => {
    const axiosPostOrderArray = postOrderFormat(order);
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
  };

  // {a:1, b:2}
  // [{a:1}, {b:2}]
  //[{item: id, quantity: 3}]

  console.log('🍉', order);

  const cartObj = postOrderFormat(order);

  const CartItems = (cartObj) => {
    return cartObj.map((orderItem, index) => {
      const cartArr = [];
      if (orderItem.quantity > 0) {
        cartArr.push(
          <CartItem
            key={index}
            orderItem={orderItem}
            order={order}
            final={final}
            id={orderItem.item}
            setSubTotalPrice={setSubTotalPrice}
          />
        );
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
      {final ? (
        <div className="d-grid gap-2">
          <button className="btn btn-danger p-3" onClick={completeOrder}>
            COMPLETE ORDER
          </button>
        </div>
      ) : (
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

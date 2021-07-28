import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const CartItem = (props) => {
  const {orderItem, order, setOrder, index} = props
  const [price, setPrice] = useState(orderItem.price*orderItem.quantity);

  useEffect(() => {
    setPrice((prev) => (orderItem.price*orderItem.quantity));
  }, [orderItem.price, orderItem.quantity]);

  const plusHandler = () => {
    let tempArray = order.orders
    tempArray[index].quantity +=1
    setOrder((order)=>({...order, "orders": tempArray}))
  };

  const minusHandler = () => {
    let tempArray = order.orders
    tempArray[index].quantity -=1
    if(tempArray[index].quantity===0){
      tempArray.splice(index, 1)
    }
    setOrder((order)=>({...order, "orders": tempArray}))
  };

  return (
    <div className="bg-white row d-flex flew-row align-item-center mb-2">
      <div className="col-8 d-flex flew-row align-items-center justify-content-start p-0">
        <img
          className="img-thumbnail me-1"
          style={{ width: '4rem', height: '100%' }}
          src={orderItem.item_img}
          alt="item"
        />
        <div className="half">{orderItem.name}</div>
      </div>

      <div className="col-3 offset-md-1 align-self-end px-1 ">
        <div className=" text-end me-1">
          S$ <span id="itemPrice">{price}</span>
        </div>
        <div className="d-flex ">
          <button
            type="button"
            className="btn btn-white"
            onClick={minusHandler}
          >
            {orderItem.quantity=== 1 && (
              <FontAwesomeIcon size="sm" icon={['fas', 'trash-alt']} />
            )}
            {orderItem.quantity > 1 && (
              <FontAwesomeIcon size="sm" icon={['fas', 'minus']} />
            )}
          </button>
          <span className="p-1">{orderItem.quantity}</span>
          <button type="button" className="btn btn-white" onClick={plusHandler}>
            <FontAwesomeIcon size="sm" icon={['fas', 'plus']} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

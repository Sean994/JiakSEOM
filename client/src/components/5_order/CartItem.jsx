import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const CartItem = () => {
  // item from props
  const originPrice = 24; // default will be item.price props = item item.price

  const [quantity, setQuantity] = useState(1);

  //! props.function
  const [price, setPrice] = useState(originPrice); // this will be origin price * quantity

  useEffect(() => {
    setPrice((prev) => originPrice * quantity);

    //! props.function  to send up the info.
  }, [quantity]);

  const plusHandler = () => {
    setQuantity((prev) => prev + 1);
    setPrice((prev) => originPrice);
  };

  const minusHandler = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <div className="bg-white row d-flex flew-row align-item-center mb-2">
      <div className="col-8 d-flex flew-row align-items-center justify-content-start p-0">
        <img
          className="img-thumbnail me-1"
          style={{ width: '4rem', height: '100%' }}
          src="https://recipe1.ezmember.co.kr/cache/recipe/2015/11/03/ca654152bb5ed8a9521ec901ab5c34211.jpg"
          alt="item"
        />
        <div className="half">Mega Max Chicken Meal</div>
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
            {quantity === 1 && (
              <FontAwesomeIcon size="sm" icon={['fas', 'trash-alt']} />
            )}
            {quantity > 1 && (
              <FontAwesomeIcon size="sm" icon={['fas', 'minus']} />
            )}
          </button>
          <span className="p-1">{quantity}</span>
          <button type="button" className="btn btn-white" onClick={plusHandler}>
            <FontAwesomeIcon size="sm" icon={['fas', 'plus']} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

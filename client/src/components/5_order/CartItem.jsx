import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useMain, actions } from '../utils/MainProvider';

const CartItem = ({ orderItem, setSubTotalPrice }) => {
  const { mainDispatch } = useMain();
  const itemId = orderItem.item;
  const [oneItem, setOneItem] = useState('');
  const [price, setPrice] = useState(0);

  const plusHandler = () => {
    mainDispatch({ type: actions.ADDTOCART, payload: oneItem });
    setSubTotalPrice((prev) => prev + oneItem.price);
    mainDispatch({ type: actions.PLUSPRICE, payload: oneItem.price });
  };
  const minusHandler = () => {
    mainDispatch({ type: actions.MINUSCART, payload: oneItem });
    mainDispatch({ type: actions.MINUSPRICE, payload: oneItem.price });
  };

  useEffect(() => {
    const getMenuInfo = async () => {
      try {
        const res = await fetch(`/api/v1/menu-items/${itemId}`);
        const resJson = await res.json();
        const { data } = resJson;
        const { menuItem } = data;
        setOneItem(menuItem);
        setPrice(menuItem.price * orderItem.quantity);
      } catch (error) {
        console.log(error);
      }
    };
    getMenuInfo();
  }, [itemId, orderItem.quantity]);

  return (
    <div className="bg-white row d-flex flew-row align-item-center mb-2">
      <div className="col-8 d-flex flew-row align-items-center justify-content-start p-0">
        <img
          className="img-thumbnail me-1"
          style={{ width: '4rem', height: '100%' }}
          src={oneItem.item_img}
          alt="item"
        />
        <div className="half">{oneItem.name}</div>
      </div>

      <div className="col-3 offset-md-1 align-self-end px-1 ">
        <div className=" text-end me-1">
          S$ <span id="itemPrice">{price}</span>
        </div>
        <div className="d-flex ">
          {/* {final || ( */}
          <button
            type="button"
            className="btn btn-white"
            onClick={minusHandler}
          >
            {orderItem.quantity === 1 && (
              <FontAwesomeIcon size="sm" icon={['fas', 'trash-alt']} />
            )}
            {orderItem.quantity > 1 && (
              <FontAwesomeIcon size="sm" icon={['fas', 'minus']} />
            )}
          </button>
          {/* )} */}

          <span className="p-1">{orderItem.quantity}</span>
          {/* {final || ( */}
          <button type="button" className="btn btn-white" onClick={plusHandler}>
            <FontAwesomeIcon size="sm" icon={['fas', 'plus']} />
          </button>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default CartItem;

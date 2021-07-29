import React from 'react';
import { useMain, actions } from '../utils/MainProvider';

const FoodItemCard = ({ foodItem }) => {
  const { mainDispatch } = useMain();
  //const { foodItem, setSubTotal } = props;

  const addItemCart = (fooditem) => {
    // let cartArray = order['orders'];
    // let checkCartForItem = { existing: false, indexFound: null };
    // cartArray.forEach((element, index) => {
    //   if (element._id === fooditem._id) {
    //     checkCartForItem.existing = true;
    //     checkCartForItem.indexFound = index;
    //   }
    // });
    // if (checkCartForItem.existing) {
    //   cartArray[checkCartForItem.indexFound].quantity += 1;
    //   setSubTotal((prev) => prev + fooditem.price);
    // } else {
    //   fooditem.quantity = 1;
    //   cartArray.push(fooditem);
    //   setSubTotal((prev) => prev + fooditem.price);
    // }
    console.log('adding to cart', fooditem);

    mainDispatch({ type: actions.ADDTOCART, payload: fooditem });
    mainDispatch({ type: actions.PLUSPRICE, payload: fooditem.price });
  };

  return (
    <div className="card mb-2 border-0 shadow" style={{ maxWidth: '900px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={foodItem.item_img}
            className="card-img"
            alt={foodItem.name}
            style={{
              minHeight: '12rem',
              maxHeight: '12rem',
              overflow: 'hidden',
              height: '100%',
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {foodItem.name}
              <br />[{foodItem.kor_name}] <br /> ${foodItem.price}
            </h5>

            <p className="card-text">
              <small className="text-muted">
                {foodItem.price < 8 ? (
                  <span>$</span>
                ) : foodItem.price < 24 ? (
                  <span>$$</span>
                ) : (
                  <span>$$$</span>
                )}
                {foodItem.tags.map((tag) => (
                  <span key={tag}>, {tag}</span>
                ))}
              </small>
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => addItemCart(foodItem)}
            >
              Add to cart
            </button>
            {/* <button
              type="button"
              className="btn btn-warning"
            >
              Favourite
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;

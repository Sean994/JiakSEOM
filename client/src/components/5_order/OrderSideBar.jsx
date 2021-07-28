import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import CartItem from './CartItem';

const OrderSideBar = () => {
  //const [subTotal, setSubTotal] = useState(0);

  //! context  chosenMenu
  return (
    <div className="container bg-white text-center py-5 px-0 shadow ">
      <div className="mb-5">
        <h6 className="fw-light mb-3">
          <FontAwesomeIcon icon={['fas', 'hourglass-half']} className="mx-1" />
          <span>35</span>min
        </h6>
        <h5>Your order from 'restaurant name'</h5>
      </div>
      <div className="bg-light container-fluid py-4 border-bottom">
        {/* map the chosen menu items list */}
        {/* <ItemCard item={item} key={item._id}/> */}
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="px-3">
        <table className="table table-borderless ">
          <tbody>
            <tr>
              <th scope="row" className="text-start fw-light">
                Subtotal
              </th>
              <td className="text-end">
                S$ <span>24.21</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start fw-light">
                Delivery fee
              </th>

              <td className="text-end">
                S$ <span>4</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start fw-light">
                Discount
              </th>

              <td className="text-end">
                S$ <span>0</span>{' '}
              </td>
            </tr>
            <tr>
              <th scope="row" className="text-start">
                Total
              </th>
              <td className="text-end">
                S$ <span>28.21</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="d-grid gap-2">
        <button className="btn btn-danger p-3">GO TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default OrderSideBar;

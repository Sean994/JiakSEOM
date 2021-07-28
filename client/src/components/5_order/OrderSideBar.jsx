import CartItem from './CartItem';

const OrderSideBar = () => {
  return (
    <div className="container bg-success">
      <h4>Your order from 'restaurant name'</h4>

      {/* map the chosen menu items list */}
      {/* <ItemCard item={item} key={item._id}/> */}
      <CartItem />
    </div>
  );
};

export default OrderSideBar;

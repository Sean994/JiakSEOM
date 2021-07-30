import { Link } from 'react-router-dom';
const HistoryRow = ({ order, index, user_id }) => {
  const { orders } = order;
  const itemsArray = orders?.map((item) => {
    return <span>{item.item.name}, </span>;
  });
  const totalPrice = orders?.reduce((prev, curr) => {
    return prev + curr.item.price;
  }, 0);
  const restaurantId = order.restaurant._id;
  const orderId = order._id;

  return (
    <>
      <td>{index + 1}</td>
      <td>{order.restaurant.name}</td>
      <td>{itemsArray}</td>
      <td>${totalPrice}</td>
      <td>
        {order.review.length === 0 ? (
          <Link
            to={`/review?user=${user_id}&restaurant=${restaurantId}&orderid=${orderId}`}
          >
            Review Now
          </Link>
        ) : (
          'done'
        )}
      </td>
    </>
  );
};
export default HistoryRow;

import HistoryRow from './HistoryRow';
import { useState, useEffect } from 'react';
import axios from 'axios';
const HistoryTable = (props) => {
  let url = `/api/v1/orders/${props.user._id}`;
  const [orderHistory, setOrderHistory] = useState();

  useEffect(() => {
    axios.get(url).then((res) => setOrderHistory(res.data.data.orders));
  }, [url]);

  return (
      <div className = "container">
    <table class="table table-bordered table-hover">
      <thead>
        <tr class="table-dark">
          <th scope="col">#Order</th>
          <th scope="col">Restaurant</th>
          <th scope="col">Items Ordered</th>
          <th scope="col">Total Price</th>
          <th scope="col">Review</th>
        </tr>
      </thead>
      <tbody>
        {orderHistory?.map((order, index) => {
          return (
            <tr key={order._id} class ="table-info">
              <HistoryRow
                order={order}
                index={index}
                user_id={props.user._id}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};
export default HistoryTable;

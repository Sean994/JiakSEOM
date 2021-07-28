import DeliveryDetailForm from './DeliveryDetailForm';
import PersonalDetailForm from './PersonalDetailForm';
import PaymentForm from './PaymentForm';
import OrderSideBar from '../5_order/OrderSideBar';

const CheckOut = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6  p-3 mb-5 shadow rounded-2">
          <DeliveryDetailForm />
          <PersonalDetailForm />
          <PaymentForm />
        </div>
        <div className="col-4">
          <OrderSideBar />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

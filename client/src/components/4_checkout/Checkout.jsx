import DeliveryDetailForm from './DeliveryDetailForm';
import PersonalDetailForm from './PersonalDetailForm';
import PaymentForm from './PaymentForm';
import OrderSideBar from '../5_order/OrderSideBar';

const CheckOut = (props) => {
  return (
    <div className="container d-flex justify-content-between">
      <div className="p-3 mb-5 shadow rounded-2">
        <DeliveryDetailForm />
        <PersonalDetailForm />
        <PaymentForm />
      </div>
      <div className="col-4 position-abolute right-0">
        <OrderSideBar />
      </div>
    </div>
  );
};

export default CheckOut;

import DeliveryDetailForm from './DeliveryDetailForm';
import PersonalDetailForm from './PersonalDetailForm';
import PaymentForm from './PaymentForm';
import OrderSideBar from '../5_order/OrderSideBar';
import { useMain, actions } from '../utils/MainProvider';
import { useEffect } from 'react';

const CheckOut = (props) => {
  const { address, order, restaurant } = props;
  const { mainDispatch } = useMain();
  useEffect(() => {
    mainDispatch({ type: actions.CHECKOUT });
  }, [mainDispatch]);

  return (
    <div className="container d-flex justify-content-between">
      <div className="p-3 mb-5 shadow rounded-2">
        <DeliveryDetailForm address={address} />
        <PersonalDetailForm />
        <PaymentForm />
      </div>
      <div className="col-4 position-abolute right-0">
        <OrderSideBar order={order} restaurant={restaurant} />
      </div>
    </div>
  );
};

export default CheckOut;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import OrderSideBar from '../5_order/OrderSideBar';
import ShowReview from '../6_review/ShowReview';
import { actions, useMain } from '../utils/MainProvider';
import FoodItemCard from './FoodItemCard';

const RestaurantID = (props) => {
  const { mainState, mainDispatch } = useMain();
  const { id } = useParams();
  const [status, setStatus] = useState('idle');
  const { restaurant } = mainState;
  const [currRestaurant, setCurrRestaurant] = useState(restaurant);

  useEffect(() => {
    mainDispatch({ type: actions.COMPLETEORDER });
    axios
      .get(`/api/v1/restaurants/${id}`, {})
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Bad connection');
        } else {
          setStatus('success');
          const restaurantRes = res.data.restaurant;
          if (restaurant._id !== restaurantRes._id) {
            mainDispatch({ type: actions.DELETEORDER });
            mainDispatch({ type: actions.RESETPRICE });
          }
          setCurrRestaurant(restaurantRes);
          mainDispatch({
            type: actions.SETRESTAURANT,
            payload: restaurantRes,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus('error');
      });
  }, [id, restaurant._id, mainDispatch]);

  const discountRate = currRestaurant.discount_rate * 100;

  return (
    <>
      <div className="container d-flex justify-content-between">
        {status === 'success' && (
          <div className="col-lg-8 me-2">
            <div className="container restContainer shadow rounded-1 mb-4">
              <div
                className="ratio ratio-21x9 rounded-1"
                style={{
                  height: '13rem',
                  width: '100%',
                  overflow: 'hidden',
                  backgroundImage: `url(${currRestaurant?.image_cover})`,
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="container p-3 px-5">
                <h3 className="fw-bold">{currRestaurant?.name}</h3>
                <h5 className="text-secondary"> {currRestaurant?.kor_name}</h5>
                <div className="d-flex text-white align-item-center justify-content-starts">
                  {currRestaurant.discount_rate && (
                    <p className="bg-danger p-1 rounded-2 me-3">
                      DISCOUNT {discountRate}%
                    </p>
                  )}
                  <p className="text-secondary text-center align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'star']}
                      size="sm"
                      className="text-primary me-1"
                    />
                    {currRestaurant?.ratingAverage}/5 (
                    {currRestaurant?.ratingQuantity})
                  </p>
                </div>
              </div>
            </div>

            <Tabs>
              <TabList>
                <Tab>Menu</Tab>
                <Tab>Review</Tab>
              </TabList>
              <TabPanel>
                <div className="container restContainer bg-warning p-4 rounded-3 active">
                  {currRestaurant?.menuItems?.map((food) => (
                    <div key={food._id} className="row-2 mb-3">
                      <FoodItemCard foodItem={food} />
                    </div>
                  ))}
                </div>
              </TabPanel>
              <TabPanel>
                <ShowReview id={currRestaurant._id} />
              </TabPanel>
            </Tabs>
          </div>
        )}
        <div className="col-4 position-abolute right-0">
          <OrderSideBar />
        </div>
      </div>
    </>
  );
};

export default RestaurantID;

import { useEffect, useState } from 'react';
import FoodItemCard from './FoodItemCard';
import OrderSideBar from '../5_order/OrderSideBar';
import axios from 'axios';
import { useParams } from 'react-router';

const RestaurantID = (props) => {
  let { id } = useParams();
  const [restaurant, setRestaurant] = useState({});
  //   const [restName, setRestName] =useState({
  //       "english": "",
  //       "korean": ""
  //     })
  //   const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/v1/restaurants/${id}`, {})
      .then((res) => {
        const restaurantResponse = res.data.restaurant;
        console.log(restaurantResponse);
        setRestaurant(restaurantResponse);
        // setRestName({"english": restaurantResponse["name"], "korean": restaurantResponse["kor_name"]})
        // setFoodList(restaurantResponse.menuItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className="container-fluid row">
      <div className="row">
          
        <div className="col-lg-8">
        <div className="container-xl restContainer">
          <h1>
            {restaurant.name}
            <br /> {restaurant.kor_name}{' '}
          </h1>
          <h4>
          {restaurant.ratingAverage}/5 ({restaurant.ratingQuantity})
          </h4>
          </div>
          <div className="container-xl restContainer">
          {restaurant?.menuItems?.map((food) => (
            <div key={food._id} className="row-2 mb-3">
              <FoodItemCard foodItem={food} />
            </div>
          ))}
          </div>
        </div>
        <div className="col-lg-4">
            <OrderSideBar />
        </div>
      </div>
    </div>
  );
};

export default RestaurantID;

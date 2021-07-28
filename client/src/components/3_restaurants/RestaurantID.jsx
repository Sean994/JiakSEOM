import { useEffect, useState } from 'react';
import FoodItemCard from './FoodItemCard';
import axios from 'axios';
import { useParams } from 'react-router';

const RestaurantID = (props) => {
  let { id } = useParams();
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/v1/restaurants/${id}`, {})
      .then((res) => {
        console.log(res.data.restaurant.menuItems);
        setFoodList(res.data.restaurant.menuItems)
        
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Welcome to restaurant {props.rest} </h1>
      <p>See Our Menu</p>
      {foodList.map((food) => (
          <FoodItemCard foodItem={food} />
      ))}
       
      <p>ID: {id}</p>

      
    </div>
  );
};

export default RestaurantID;

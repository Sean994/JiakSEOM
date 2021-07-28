import { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import RestaurantCard from './RestaurantCard';
import axios from 'axios';

const Restaurants = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/v1/categories', {})
      .then((res) => {
        setCategoryList(res.data.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get('/api/v1/restaurants', {})
      .then((res) => {
        console.log(res.data.data.restaurants)
        setRestaurantList(res.data.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>


      <div className="container">
        <h3 className="text-body">Categories</h3>
        <div className="container-xl d-flex overflow-auto align-baseline">
          {categoryList.map((category) => (
            <CategoryCard key={category._id} category={category} setRestaurantList={setRestaurantList} />
          ))}
        </div>
      </div>

      <div className="container">
        <h3 className="text-body">All Restaurants</h3>
        <div className="container-xl restContainer row">
          {restaurantList.map((restaurant) => (
            < div className="col-4 mb-4"
            >
            <RestaurantCard key={restaurant._id} restaurant={restaurant}
             />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

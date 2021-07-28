import { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import RestaurantCard from './RestaurantCard';
import axios from 'axios';
import FilterButtons from './FilterButtons';
import SearchBar from './SearchBar';

const Restaurants = (props) => {
  const [categoryList, setCategoryList] = useState([]);
  const [filter, setFilter] = useState({
    'top-rated': false,
    'fast-delivery': false,
    'free-delivery': false,
    'has-discount': false,
    category: '',
  });
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
  }, []);

  useEffect(() => {
    let url = '/api/v1/restaurants?';
    if (filter['free-delivery'] && filter['has-discount']) {
      url += 'offers=has-discount,free-delivery&';
    } else {
      if (filter['free-delivery']) {
        url += 'offers=free-delivery&';
      }
      if (filter['has-discount']) {
        url += 'offers=has-discount&';
      }
    }
    if (filter['top-rated'] && filter['fast-delivery']) {
      url += 'sort_by=top-rated,fast-delivery&';
    } else {
      if (filter['top-rated']) {
        url += 'sort_by=top-rated&';
      }
      if (filter['fast-delivery']) {
        url += 'sort_by=fast-delivery&';
      }
    }
    if (filter['category'].length > 0) {
      url += `category=${filter['category']}`;
    }
    console.log(url);
    axios
      .get(url, {})
      .then((res) => {
        console.log(res.data.data.restaurants);
        setRestaurantList(res.data.data.restaurants);
      })
      .catch((err) => {
        setRestaurantList([]);
        console.log(err);
      });
    console.log('filter toggled');
  }, [filter]);

  return (
    <div>
      <div className="container">
        <SearchBar resState={setRestaurantList} />
        <div>
          <div className="d-flex align-items-center justify-content-center">
            {filter['top-rated'] ? <span>top rated / </span> : null}
            {filter['fast-delivery'] ? <span>fast delivery / </span> : null}
            {filter['free-delivery'] ? <span>free delivery / </span> : null}
            {filter['has-discount'] ? <span>discounts / </span> : null}
            {filter['category'] ? <span>{filter['category']}</span> : null}
          </div>
          <FilterButtons setFilter={setFilter} />
        </div>
      </div>
      <div className="container">
        <h3 className="text-body">Categories</h3>
        <div className="container-xl d-flex overflow-auto align-baseline">
          {categoryList.map((category) => (
            <CategoryCard
              key={category._id}
              category={category}
              filter={filter}
              setFilter={setFilter}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <h3 className="text-body">All Restaurants</h3>
        <div className="container-xl restContainer row">
          {restaurantList.length === 0 ? (
            <span>Sorry, no restaurants fit the criteria</span>
          ) : null}
          {restaurantList.map((restaurant) => (
            <div className="col-4 mb-4" key={restaurant._id}>
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

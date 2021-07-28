<<<<<<< HEAD
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
const Restaurants = (props) => {
    const { clickHandle } = props
    const restaurantArray = ["Jeju", "Seoul", "Busan", "Daegu"]
    return (

        <div>
            <h1> List of Restaurants</h1>
            <ul>
                {restaurantArray.map((element, index) => (
                    <Link key={element} to={`/restaurants/${element}`}>
                        <li key={element}
                            onClick={() => clickHandle(element)}>
                            {element} -
                            index {index}
                        </li>
                    </Link>
                ))}
            </ul>
=======
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryRes from './CategoryRes';
const axios = require('axios').default;

const Restaurants = (props) => {
  const { clickHandle } = props;
  const [categoryList, setCategoryList] = useState([]);
  const restaurantArray = ['Jeju', 'Seoul', 'Busan', 'Daegu'];

  useEffect(() => {
    axios
      .get('/api/v1/categories', {})
      .then(function (response) {
        setCategoryList(response.data.data.categories);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1> List of Restaurants</h1>
      <ul>
        {restaurantArray.map((element, index) => (
          <Link key={element} to={`/restaurants/${element}`}>
            <li key={element} onClick={() => clickHandle(element)}>
              {element} - index {index}
            </li>
          </Link>
        ))}
      </ul>
      <div className="container">
        <h3 className="text-body">Categories</h3>
        <div className="container-xl d-flex overflow-auto align-baseline">
          {categoryList.map((category) => (
            <CategoryRes key={category._id} category={category} />
          ))}
>>>>>>> main
        </div>
      </div>
    </div>
  );
};

export default Restaurants;

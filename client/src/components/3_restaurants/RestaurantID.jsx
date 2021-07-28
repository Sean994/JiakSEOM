import { useEffect, useState } from 'react';
import FoodItemCard from './FoodItemCard';
import OrderSideBar from '../5_order/OrderSideBar';
import axios from 'axios';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container>
          <Row>
              <Col xs={12} md={8}>
      {foodList.map((food) => (
          <div className="col-4 mb-4">
          <FoodItemCard foodItem={food} />
          </div>
      ))}
      </Col>
      <Col xs={12} md={4}>
      <OrderSideBar />
      </Col>
      </Row>
      </Container>
      <p>ID: {id}</p>

      
    </div>
  );
};

export default RestaurantID;

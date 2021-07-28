import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const FoodItemCard = ({ foodItem }) => {
  let history = useHistory();
  const goToRest = (id) => {
    history.push(`/restaurants/${id}`)
  }

  return (
    <div className="card" style={{ width: '24rem' }}>
      <img
        className="card-img-top a"
        src={foodItem.item_img}
        alt={foodItem.name}
        style={{ minHeight: '16rem', maxHeight: '16rem', overflow: 'hidden', height: '100%' }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {foodItem.name}
          <br />[{foodItem.kor_name}]
        </h5>
        <p>{foodItem.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Price: {foodItem.price}
        </li>
      </ul>
      <div className="card-body">
        <Button variant="primary" type="submit" className="btn-lg rounded-0" onClick = {() => goToRest(foodItem.restaurant_id)}>
          Order
        </Button>
        <Button variant="warning" type="button" className="rounded-0 btn-lg">
          Favourite
        </Button>
      </div>
    </div>
  );
};

export default FoodItemCard;


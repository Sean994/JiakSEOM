import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const RestaurantCard = ({ restaurant }) => {
  let history = useHistory();
  const goToRest = (id) => {
    history.push(`/restaurants/${id}`)
  }

  return (
    <div className="card" style={{ width: '24rem' }}>
      <img
        className="card-img-top a"
        src={restaurant.image_cover}
        alt="Restaurant"
        style={{ minHeight: '16rem', maxHeight: '16rem', overflow: 'hidden', height: '100%' }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {restaurant.name}
          <br />[{restaurant.kor_name}]
        </h5>
        <p className="card-text">{restaurant.location.address}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Delivery fee: ${restaurant.delivery_fee}
        </li>
        <li className="list-group-item">
          Ratings: {restaurant.ratingAverage} ({restaurant.ratingQuantity})
        </li>
        {/* <li className="list-group-item">Vestibulum at eros</li> */}
      </ul>
      <div className="card-body">
        <Button variant="primary" type="submit" className="btn-lg rounded-0" onClick = {() => goToRest(restaurant.id)}>
          Menu
        </Button>
        <Button variant="warning" type="button" className="rounded-0 btn-lg">
          Favourite
        </Button>
      </div>
    </div>
  );
};

export default RestaurantCard;

//display: block;
// margin-left: auto;
// margin-right: auto;
// width: 50%;

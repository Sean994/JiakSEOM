const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card" style={{width: "16rem"}}>
      <img
        className="card-img-top"
        src={restaurant.image_cover}
        alt="Restaurant"
      />
      <div className="card-body">
        <h5 className="card-title">{restaurant.name}<br/>[{restaurant.kor_name}]</h5>
        <p className="card-text">
       {restaurant.location.address}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Delivery fee: ${restaurant.delivery_fee}</li>
        <li className="list-group-item">Ratings: {restaurant.ratingAverage} ({restaurant.ratingQuantity})</li>
        {/* <li className="list-group-item">Vestibulum at eros</li> */}
      </ul>
      <div className="card-body">
        <button className="btn btn-primary">
          See Menu
        </button> 
        <button className="btn btn-primary">
          Favourite
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;

//display: block;
// margin-left: auto;
// margin-right: auto;
// width: 50%;

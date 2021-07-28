const FoodItemCard = ({ foodItem }) => {
  return (
    <div className="card mb-2 border-0 shadow" style={{ maxWidth: '900px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={foodItem.item_img}
            className="card-img"
            alt={foodItem.name}
            style={{
              minHeight: '12rem',
              maxHeight: '12rem',
              overflow: 'hidden',
              height: '100%',
            }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {foodItem.name} {foodItem.category_id}
              <br /> [{foodItem.kor_name}] <br /> ${foodItem.price}
            </h5>

            <p className="card-text">
              <small className="text-muted">
                {foodItem.price < 8 ? (
                  <span>$</span>
                ) : foodItem.price < 24 ? (
                  <span>$$</span>
                ) : (
                  <span>$$$</span>
                )}
                {foodItem.tags.map((tag) => (
                  <span key={tag}>, {tag}</span>
                ))}
              </small>
            </p>
            <button type="button" className="btn btn-primary">
              Add to cart
            </button>
            {/* <button
              type="button"
              className="btn btn-warning"
            >
              Favourite
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;

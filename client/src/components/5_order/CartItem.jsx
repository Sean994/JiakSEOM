import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartItem = () => {
  return (
    <div className="bg-light row p-2 d-flex flew-row align-item-center ">
      <div className="col-8 d-flex flew-row align-item-center justify-content-start">
        <img
          className="img-thumbnail me-2"
          style={{ width: '4rem' }}
          src="https://recipe1.ezmember.co.kr/cache/recipe/2015/11/03/ca654152bb5ed8a9521ec901ab5c34211.jpg"
          alt="item"
        />
        <div className="half">Mega Max Chicken Meal</div>
      </div>

      <div className="col-3 offset-md-1 align-self-end">
        <strong className="right">
          S$ <span>24.21</span>
        </strong>
        <div className="d-flex">
          <button type="button" className="btn btn-light">
            <FontAwesomeIcon size="sm" icon={['fas', 'trash-alt']} />
          </button>
          <span className="p-1">1</span>
          <button type="button" className="btn btn-light">
            <FontAwesomeIcon size="sm" icon={['fas', 'plus']} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

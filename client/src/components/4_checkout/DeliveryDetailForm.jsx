import { useMain } from '../utils/MainProvider';

const DeliveryDetailForm = () => {
  const { mainState } = useMain();
  const { address } = mainState;

  return (
    <form class="row g-1 m-3">
      <h4>
        {' '}
        <span className="badge bg-warning me-2">1</span>Delivery details
      </h4>

      <div class="col-12">
        <label for="address" class="form-label">
          Delivery Address
        </label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Street Address"
          defaultValue={address ? address : ''}
        />
      </div>
      <div class="col-12">
        <input
          type="text"
          class="form-control"
          id="address2"
          placeholder="Floor / unit number"
        />
      </div>

      <div class="d-grid gap-2">
        <button type="button" class="btn btn-warning">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default DeliveryDetailForm;

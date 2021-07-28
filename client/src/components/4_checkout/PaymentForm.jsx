const PaymentForm = () => {
  return (
    <form class="row g-1 m-3">
      <h4>
        {' '}
        <span className="badge bg-warning me-2">3</span>Payment
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
        />
      </div>

      <div class="d-grid gap-2">
        <button type="submit" class="btn btn-warning">
          PLACE ORDER
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;

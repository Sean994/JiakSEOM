const PaymentForm = () => {
  return (
    <form class="row g-1 m-3">
      <h4>
        {' '}
        <span className="badge bg-warning me-2">3</span>Payment Method
      </h4>
      <select class="form-control">
        <option>Cash on Delivery (Default)</option>
        <option>PayLah!</option>
        <option>PayPal</option>
        <option>Credit / Debit Card</option>
      </select>
      {/* <div class="col-12">
        <label for="address" class="form-label">
          Delivery Address
        </label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="Street Address"
        />
      </div> */}

      
    </form>
  );
};

export default PaymentForm;

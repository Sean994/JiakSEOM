const DeliveryDetailForm = ({address}) => {
  //! submit => api call to post orders
  //! userid , restaurantid, chosen MENU Array [ {itemid : quantity }, {itemid : quantity }  ]

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

//_id: 60fe3215d6932e1093b56253,
// first_name: 'HyunJung',
// last_name: 'Oh',
// contact: 81713726,
// email: 'hyunjung.agnes.oh@gmail.com',
// username: 'hjolauren',
// password: '$2b$08$1Apu1OTFGWU/uDmV.bPVDu1sZL22agZTx1JoxQ2VndwqpEivjD78a',
// address: '111 paris ris grove',
// postal_code: 518170,
// birthday: '20 Jan 1993',
// __v: 0

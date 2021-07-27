class RestaurantFilter {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  sortBy() {
    if (this.queryString.sort_by) {
      const querySort = this.queryString.sort_by
        .split(',')
        .map((str) => {
          let newStr;
          if (str === 'top-rated') {
            newStr = '-ratingAverage';
          } else if (str === 'fast-delivery') {
            newStr = 'preparation_time';
          }
          return newStr;
        })
        .join(' ');
      this.query = this.query.sort(querySort);
    }
    return this;
  }

  populateMenu() {
    if (this.queryString.category) {
      this.query.populate('menuItems');
    }

    return this;
  }

  giveOffers() {
    if (this.queryString.offers) {
      const queryObj = {};
      const queryOffersArr = this.queryString.offers.split(',');
      queryOffersArr.forEach((offer) => {
        if (offer === 'has-discount') {
          queryObj.discount_rate = { $ne: null };
        }
        if (offer === 'free-delivery') {
          queryObj.delivery_fee = { $eq: 0 };
        }
      }); // ['has-discount', 'free-delivery']
      this.query.find(queryObj);
    }
    return this;
  }
}

module.exports = RestaurantFilter;

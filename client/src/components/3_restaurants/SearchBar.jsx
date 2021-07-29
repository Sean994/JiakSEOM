import axios from 'axios';
import { useState } from 'react';
const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const submitHandler = (event) => {
    console.log(event.target.select.value);
    event.preventDefault();
    const select = event.target.select.value;
    if (select === 'Restaurant Name') {
      console.log(search);
      axios
        .get(`/api/v1/search/restaurants?query=${search}`)
        .then((res) => props.resState(res.data.data))
        .catch((err) => {
          console.log(err);
        });
    } else if (select === 'Menu Item') {
      console.log(search);
      axios
        .get(`/api/v1/search/menuitems?query=${search}`)
        .then((res) => props.resState(res.data.data))
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className="d-flex row align-items-center ">
      <form onSubmit={submitHandler} className="row g-3">
        <div className="col-md-2">
          <select className="form-select" name="select">
            <option selected>Restaurant Name</option>
            <option>Menu Item</option>
          </select>
        </div>
        <div className="col-md-9">
          <input
            type="text"
            placeholder="search..."
            onChange={(event) => setSearch(event.target.value)}
            className="form-control"
          ></input>
        </div>
        <div className="col-md-1">
          <button className="btn-primary btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;

// import axios from 'axios';
const CategoryCard = (props) => {
  const { category, setFilter } = props;

  const toggleFilterCategory = (id) => {
    // axios.get(` /api/v1/restaurants?&category=${id}`).then((res) => {
    //   console.log(id);
    //   console.log(res.data.data.restaurants);
    //   setRestaurantList(res.data.data.restaurants)
    // })
    setFilter(filter  => ({...filter, "category": id}))
    // axios.get(`/api/v1/categories/${id}/restaurants`).then((res) => {
    //   console.log(id);
    //   console.log(res.data.restaurants);
    // });
  };
  return (
    <div
      id={category._id}
      className="card me-2 shadow-sm border-0 catCard"
      style={{ minWidth: '12rem' }}
      onClick={() => toggleFilterCategory(category._id)}
    >
      <img
        src={category.img_cover}
        alt={category.category_name}
        className="card-img-top d-block mx-auto img-fluid "
        style={{ maxHeight: '8rem', overflow: 'hidden', height: '100%' }}
      />
      <div className="card-body text-center" >
        <h6 className="card-text">{category.category_name}</h6>
      </div>
    </div>
  );
};

export default CategoryCard;

//display: block;
// margin-left: auto;
// margin-right: auto;
// width: 50%;

const CategoryRes = ({ category }) => {
  return (
    <div
      id={category._id}
      className="card me-2 shadow-sm border-0"
      style={{ minWidth: '12rem' }}
    >
      <img
        src={category.img_cover}
        alt={category.category_name}
        className="card-img-top d-block mx-auto img-fluid "
        style={{ maxHeight: '8rem', overflow: 'hidden', height: '100%' }}
      />
      <div className="card-body text-center">
        <p className="card-text">{category.category_name}</p>
      </div>
    </div>
  );
};

export default CategoryRes;

//display: block;
// margin-left: auto;
// margin-right: auto;
// width: 50%;

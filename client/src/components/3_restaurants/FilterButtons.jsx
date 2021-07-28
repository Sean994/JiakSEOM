const FilterButtons = (props) => {

    const {setFilter} = props

    const toggleFilterRating = () => {
        setFilter(filter=>({...filter, "top-rated": !filter["top-rated"] }))
    }

    const toggleFilterFastDelivery = () => {
        setFilter(filter=>({...filter, "fast-delivery": !filter["fast-delivery"] }))
    }
    const toggleFilterFreeDelivery = () => {
        setFilter(filter=>({...filter, "free-delivery": !filter["free-delivery"] }))
    }
    const toggleFilterDiscounts = () => {
        setFilter(filter=>({...filter, "has-discount": !filter["has-discount"] }))
    }
    const toggleFilterCategory= () => {
        setFilter({
            "top-rated": false,
            "fast-delivery": false,
            "free-delivery": false,
            "has-discount": false,
            "category": "",
          })
    }

    return(
        <div className="d-flex align-items-center justify-content-center">
            <button onClick={toggleFilterRating} className ="btn btn-success m-2">Top rated</button>
            <button onClick={toggleFilterFastDelivery} className="btn btn-danger m-2">Delivery time</button>
            <button onClick={toggleFilterFreeDelivery} className="btn btn-dark m-2">Free delivery</button>
            <button onClick={toggleFilterDiscounts} className="btn btn-info m-2">Discounts</button>
            <button onClick={toggleFilterCategory} className="btn btn-warning m-2">Clear filters</button>
        </div>
    )
}

export default FilterButtons
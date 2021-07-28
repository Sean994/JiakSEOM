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
        <div>
            <button onClick={toggleFilterRating}>Top rated</button>
            <button onClick={toggleFilterFastDelivery}>Delivery time</button>
            <button onClick={toggleFilterFreeDelivery}>Free delivery</button>
            <button onClick={toggleFilterDiscounts}>Discounts</button>
            <button onClick={toggleFilterCategory}>Clear filters</button>
        </div>
    )
}

export default FilterButtons
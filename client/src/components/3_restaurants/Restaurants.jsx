import { useState , useEffect } from "react";
import { Link } from "react-router-dom"
import CategoryRes from "./CategoryRes";
const axios = require('axios').default;

const Restaurants = (props) => {
    const {clickHandle} = props
    const [categoryList, setCategoryList] = useState([])
    const restaurantArray = ["Jeju", "Seoul", "Busan", "Daegu"]

    useEffect(()=>{
        axios.get('/api/v1/categories', {
        })
        .then(function (response) {
          setCategoryList(response.data.data.categories)
        })
        .catch(function (error) {
          console.log(error);
        })
    },[])
  
    return (
        <div>
            <h1> List of Restaurants</h1>
            <ul>
                {restaurantArray.map((element, index) => (
                    <Link key={element} to={`/restaurants/${element}`}>
                        <li key={element}
                            onClick={() => clickHandle(element)}>
                            {element} -
                            index {index}
                        </li>
                    </Link>
                ))}
            </ul>
            <div className="categoryList">
                {categoryList.map((element,index) => (
                    <CategoryRes keyid={index} catName={element.category_name}/> 
                ))}
            </div>
        </div>
    )
}

export default Restaurants
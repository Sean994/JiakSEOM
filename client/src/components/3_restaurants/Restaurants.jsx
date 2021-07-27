import { useState , useEffect } from "react";
import { Link } from "react-router-dom"
const axios = require('axios').default;

const Restaurants = (props) => {
    const {clickHandle} = props
    const [category, setCategory] = useState([])
    const restaurantArray = ["Jeju", "Seoul", "Busan", "Daegu"]

    useEffect(()=>{
        axios.get('/api/v1/categories', {
        })
        .then(function (response) {
          console.log(response)
          setCategory(response.data.data.categories)
          console.log(category)
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
            <div>
                {category.map((element,index) => (
                    <p>{element.category_name}</p>   
                ))}
            </div>
        </div>
    )
}

export default Restaurants
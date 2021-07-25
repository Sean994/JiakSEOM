import { Link } from "react-router-dom"

const Restaurants = (props) => {
const {clickHandle} = props
const restaurantArray = ["Jeju", "Seoul", "Busan", "Daegu"]
    return (
        <div>
            <h1> List of Restaurants</h1>
            <ul>
            {restaurantArray.map( (element,index) => (
                <Link key={element} to={`/restaurants/id/${element}`}>
                    <li key={element}
                    onClick={()=>clickHandle(element)}>
                        {element} -
                        index {index}
                </li>
                </Link>
            ))}
            </ul>
        </div>
    )
}

export default Restaurants
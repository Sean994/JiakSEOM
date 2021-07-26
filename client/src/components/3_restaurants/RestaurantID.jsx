import { useParams } from "react-router"


const RestaurantID = (props) => {
    let {id} = useParams();

    return (
        <div>Welcome to restaurant {props.rest}
            <p>See Our Menu</p>
            <p>ID: {id}</p>
        </div>
    )
}

export default RestaurantID
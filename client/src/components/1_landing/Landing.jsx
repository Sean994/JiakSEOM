const Landing = (props) => {

    return (
        <div>
            Landing page
            <form>
                <input 
                className="postalCode"
                type="text" 
                placeholder="Enter your postal code"
                id="postal code"
                name="postal code"
                />
                <input 
                type="submit" 
                value="Delivery"/>
            </form>
        </div>
    )
}

export default Landing
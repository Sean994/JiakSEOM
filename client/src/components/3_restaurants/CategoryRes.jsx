const CategoryRes = (props) => {
    const {catName , keyid} = props
    
    return (
        <div key={keyid} className="categoryCard">
            <span className="categoryCardTitle">{catName}</span>
        </div>
    )
}

export default CategoryRes
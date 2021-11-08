const Introduction = ({ data }) => {
    return (
        <div className = "introduction" >

            <h1>{data.restaurant.name}</h1>

            <p>{data.restaurant.description}</p>

            <img className = "classic" src = {data.restaurant.picture} alt = "" />

        </div>
    );
}

export default Introduction;
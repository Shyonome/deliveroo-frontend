const Soupe = ({ data }) => {

    const soupe = data.categories[5];

    return (
        <div>
            
            <h2>{soupe.name}</h2>
        
            {soupe.meals.map((elem, index) => {
                return (
                    <div key = {index} >
                
                        <h3>{elem.title}</h3>

                        <p>{elem.description}</p>

                        {elem.picture && <img className = "classic" src = {elem.picture} alt="" />}

                        <span>{elem.price}</span>

                        {elem.popular && <span>👌</span> }

                    </div>
                )
            })}
        
        </div>
    );
}

export default Soupe;
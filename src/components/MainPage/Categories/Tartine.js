const Tartine = ({ data }) => {

    const tartine = data.categories[4];

    return (
        <div>
            
            <h2>{tartine.name}</h2>
        
            {tartine.meals.map((elem, index) => {
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

export default Tartine;
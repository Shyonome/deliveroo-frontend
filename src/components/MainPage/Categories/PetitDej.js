const PetitDej = ({ data }) => {
    
    const petiDej = data.categories[1];

    return (
        <div>
            
            <h2>{petiDej.name}</h2>
        
            {petiDej.meals.map((elem, index) => {
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

export default PetitDej;
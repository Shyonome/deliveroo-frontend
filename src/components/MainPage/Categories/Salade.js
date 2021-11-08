const Salade = ({ data }) => {

    const salade = data.categories[3];

    return (
        <div>
            
            <h2>{salade.name}</h2>
        
            {salade.meals.map((elem, index) => {
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

export default Salade;
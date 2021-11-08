const Viennoiseries = ({ data }) => {

    const viennoiseries = data.categories[2];

    return (
        <div>
            
            <h2>{viennoiseries.name}</h2>
        
            {viennoiseries.meals.map((elem, index) => {
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

export default Viennoiseries;
const Bunchs = ({ data }) => {

    const bunchs = data.categories[0];

    return (
        <div>

            <h2>{bunchs.name}</h2>

            {bunchs.meals.map((elem, index) => {
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

export default Bunchs;
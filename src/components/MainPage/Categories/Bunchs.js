const Bunchs = ({ data }) => {

    const bunchs = data.categories[0];

    return (
        <div>

            <h2>{bunchs.name}</h2>

            <div>
                
                <h3>{bunchs.meals[0].title}</h3>

                <p>{bunchs.meals[0].description}</p>

                <img className = "classic" src = {bunchs.meals[0].picture} alt="" />

                {bunchs.meals[0].popular && <span>👌</span> }

            </div>

            <div>
                
                <h3>{bunchs.meals[1].title}</h3>

                <p>{bunchs.meals[1].description}</p>

                <img className = "classic" src = {bunchs.meals[1].picture} alt="" />

                {bunchs.meals[1].popular && <span>👌</span> }

            </div>

        </div>
    );
}

export default Bunchs;
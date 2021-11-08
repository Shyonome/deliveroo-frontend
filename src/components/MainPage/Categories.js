import Bunchs from "./Categories/Bunchs";
import PetitDej from "./Categories/PetitDej";
import Viennoiseries from "./Categories/Viennoiseries";
import Salade from "./Categories/Salade"
import Tartine from "./Categories/Tartine"
import Soupe from "./Categories/Soupe"

const Categories = ({ data }) => {
    return (
        <div>
            
            <Bunchs data = {data} />

            <PetitDej data = {data} />

            <Viennoiseries data = {data} />

            <Salade data = {data} />

            <Tartine data = {data} />

            <Soupe data = {data} />

        </div>
    );
}

export default Categories;
import Introduction from "./MainPage/Introduction";
import Categories from "./MainPage/Categories";

const MainPage = ({ data }) => {
    return (
        <div>
            <Introduction data = {data} />
            <Categories data = {data} />
        </div>
    );
}

export default MainPage;
import AgricultureProduct from "../AgricultureProduct/AgricultureProduct";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <section>
                <Navbar/>
            </section>
            <section>
                <Banner/>
            </section>
            <section>
                <AgricultureProduct/>
            </section>
        </div>
    );
};

export default Home;
import AgricultureProduct from "../AgricultureProduct/AgricultureProduct";
import Banner from "../Banner/Banner";
import LandscapeProducts from "../LandscapeProducts/LandscapeProducts";
import Navbar from "../Navbar/Navbar";
import OutCustomerSays from "../OurCustomersSays/OutCustomerSays";
import TrustedCustomer from "../TrustedCustomer/TrustedCustomer";

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
            <section>
                <LandscapeProducts/>
            </section>
            <section>
                <TrustedCustomer/>
            </section>
            <section>
                <OutCustomerSays/>
            </section>
        </div>
    );
};

export default Home;
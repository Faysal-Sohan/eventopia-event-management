import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="container mx-auto">
                <div className="my-12">
                    <h3 className="text-3xl font-bold text-center">Our Services</h3>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mb-12 mx-4">
                    <Services></Services>
                    <Services></Services>
                    <Services></Services>
                    <Services></Services>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
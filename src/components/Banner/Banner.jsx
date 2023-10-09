import Navbar from "../Navbar/Navbar";

const Banner = () => {
    return (
        <div>
            <div className="bg-purple-950 opacity-90 w-full h-screen relative">
                <img src="https://i.ibb.co/6X7KVF3/social-events-banner.jpg" alt="" 
                className="w-full h-full mix-blend-overlay object-cover absolute"/>
                <div className="container mx-auto text-white">
                    <Navbar></Navbar>
                </div>
                <div className="flex flex-col justify-center items-center h-3/4 gap-2">
                    <h3 className="text-5xl font-bold text-center text-white">Welcome to Eventopia!</h3>
                    <h3 className="text-5xl font-bold text-center text-white">Your Gateway to Exceptional Social Gatherings</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;
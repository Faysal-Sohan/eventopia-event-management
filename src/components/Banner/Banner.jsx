import Navbar from "../Navbar/Navbar";

const Banner = () => {
    return (
        <div>
            <div className="bg-violet-800 opacity-80 w-full md:h-[800px] h-96 relative">
                <img src="https://i.ibb.co/6X7KVF3/social-events-banner.jpg" alt="" 
                className="w-full h-full mix-blend-overlay object-cover absolute"/>
                <div className="container mx-auto text-white">
                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default Banner;
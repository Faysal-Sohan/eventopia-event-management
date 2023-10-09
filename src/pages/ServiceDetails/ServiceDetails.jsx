import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const ServiceDetails = () => {

    const services = useLoaderData();
    const {id} = useParams();

    const searchService = services.find(data => data.id == id)
    console.log(searchService)

    return (
        <div className="bg-purple-950 text-white pb-12 min-h-screen">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="grid lg:grid-cols-2 grid-cols-1 mx-3 gap-12 place-items-center mt-16 md:mt-36">
                    <img src={searchService.image} alt="" className="w-full rounded"/>
                    <div className="space-y-4">
                        <h3 className="text-5xl font-semibold">{searchService.eventType}</h3>
                        <p className="text-3xl font-medium">Our services includes:</p>
                        <ul className="text-2xl font-medium space-y-2">
                            {
                                searchService.servicesOffered.map((service, idx) => <li key={idx}><span className="mx-2">{idx+1}.</span>{service}</li>)
                            }
                        </ul>
                        <button className="px-4 py-2 bg-pink-700 rounded-xl text-2xl font-medium">Create Event</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
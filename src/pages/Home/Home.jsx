import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import { useEffect, useState } from "react";
import OngoingEvent from "../../components/OngoingEvent/OngoingEvent";

const Home = () => {

    const services = useLoaderData();

    const [ongoingEvents, setOngoingEvents] = useState([])
    useEffect(() => {
        fetch('/events.json')
            .then(resp => resp.json())
            .then(data => setOngoingEvents(data))
    }, [])

    console.log(ongoingEvents)

    return (
        <div>
            <Banner></Banner>
            <div className="bg-purple-800 py-16">
                <div className="container mx-auto">
                    <h3 className="text-5xl text-white font-bold text-center mb-12">Our Services</h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-12 mx-4">
                        {
                            services.map(service => <Services key={service.id} service={service}></Services>)
                        }
                    </div>
                </div>
            </div>
                <div className="bg-purple-700 pb-12">
                    <h3 className="text-white text-center text-5xl font-bold py-16">Our Successfull Projects</h3>
                    <div className="container mx-auto">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-12 mx-4">
                            {
                                ongoingEvents.map(event => <OngoingEvent key={event.id} event={event}></OngoingEvent>)
                            }
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Home;
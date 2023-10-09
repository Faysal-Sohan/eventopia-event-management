import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import { useEffect, useState } from "react";
import OngoingEvent from "../../components/OngoingEvent/OngoingEvent";

const Home = () => {

    const services = useLoaderData();

    const [ongoingEvents, setOngoingEvents] = useState([])
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('/events.json')
            .then(resp => resp.json())
            .then(data => setOngoingEvents(data));

        fetch('/members.json')
            .then(resp => resp.json())
            .then(data => setMembers(data))
    }, [])

    console.log(ongoingEvents)

    return (
        <div>
            <Banner></Banner>
            <div className="bg-purple-800 py-16">
                <div className="container mx-auto">
                    <h3 className="text-5xl text-white font-bold text-center mb-12">Our Services</h3>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-12 mx-4"
                        data-aos="fade-up-right">
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
                            ongoingEvents.map(event => <OngoingEvent key={event.id} event={event} data-aos="slide-left"></OngoingEvent>)
                        }
                    </div>
                </div>
            </div>
            <div className="bg-purple-800 pb-12">
                <h3 className="text-white text-center text-5xl font-bold py-16">Meet Our Team</h3>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-12 mx-4 text-white">
                        {
                            members.map(member => <div key={member.id}>
                                <div className="flex flex-col justify-center items-center">
                                    <img src={member.image} alt="" className="w-72 h-72 rounded-full object-cover shadow-xl" />
                                    <div className="text-center mt-3">
                                        <h3 className="text-2xl font-semibold">{member.name}</h3>
                                        <p className="text-sm font-medium">{member.position}</p>
                                        <p className="text-sm font-medium">{member.email}</p>
                                        <p className="text-sm font-medium">{member.phone}</p>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getStoredItemFromLS } from "../../localStorage";
import { useLoaderData } from "react-router-dom";

const Booked = () => {

    const [bookedEvents, setbookedEvents] = useState([]);

    const allEvents = useLoaderData();

    useEffect(() => {
        const itemsFromLS = getStoredItemFromLS();
        const eventsBooked = allEvents.filter(event => itemsFromLS.includes(event.id));
        setbookedEvents(eventsBooked);
    }, [])

    return (
        <div className="bg-purple-800">
            <div className="container mx-auto min-h-screen text-white">
                <Navbar></Navbar>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-4 mt-12">
                    {
                        bookedEvents.map(event => <div key={event.id}>
                            <div className="card card-side shadow-xl bg-base-100 text-black">
                                <figure><img src={event.image} alt="" className="w-56 h-52" /></figure>
                                <div className="ml-4 p-4 space-y-3 flex flex-col justify-center items-start">
                                    <h2 className="text-2xl font-semibold">{event.eventType}</h2>
                                    <p className="text-xl font-semibold">Price: {event.bookingPrice}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Booked;
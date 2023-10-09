import { useLoaderData } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { isExistInLS, setItemToLS } from '../../localStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Create = () => {

    const services = useLoaderData();

    const handleBookNow = (id) => {
        if(isExistInLS(id)) {
            toast("This event is already booked")
            return
        }
        setItemToLS(id);
        toast("Your event is booked successfully!")
    }

    return (
        <div className="bg-purple-800">
            <div className="container mx-auto min-h-screen text-white">
                <Navbar></Navbar>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-4 mt-12 pb-24 text-black">
                    {
                        services.map(service => <div key={service.id}>
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={service.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title justify-center">{service.eventType}</h2>
                                    <div className="card-actions justify-center">
                                        <button onClick={() => handleBookNow(service.id)} className="btn btn-secondary">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Create;
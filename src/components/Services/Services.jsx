import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Services = ({service}) => {

    const { id, eventType, image, details} = service;

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center text-2xl font-bold">{eventType}</h2>
                    <div className="flex flex-col justify-center items-center space-y-3">
                        <p className="text-xl font-medium flex-grow">{details}</p>
                        <Link to={`/details/${id}`}><button className="btn btn-secondary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Services.propTypes = {
    service: PropTypes.object
}

export default Services;
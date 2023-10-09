import PropTypes from 'prop-types';

const OngoingEvent = ({ event }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={event.image} alt="Shoes" className="w-full h-80 object-cover" /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{event.title}</h2>
                    <p>{event.details}</p>
                </div>
            </div>
        </div>
    );
};

OngoingEvent.propTypes = {
    event: PropTypes.object
}

export default OngoingEvent;
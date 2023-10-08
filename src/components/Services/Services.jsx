import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/fYTbMLh/birthday-event.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Birthdays</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste molestias consectetur adipisci delectus ipsa sed, possimus, sunt illo, perspiciatis incidunt eius saepe.</p>
                    <div className="card-actions justify-end">
                        <Link to={'/service/details'}><button className="btn btn-primary">See Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
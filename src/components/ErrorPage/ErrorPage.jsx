import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <div className="text-center my-12 md:my-24 space-y-3 text-4xl font-bold">
            <h3>Sorry! The Page Not Found</h3>
            <Link to={-1}><button className="btn">Back</button></Link>
        </div>
    );
};

export default ErrorPage;
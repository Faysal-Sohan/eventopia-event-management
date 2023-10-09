import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
    return (
        <div className="bg-purple-700 text-white min-h-screen">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="my-12 space-y-12">
                    <h3 className="text-3xl font-bold text-center">Register Here!</h3>
                    <form className="card-body md:w-1/3 w-3/4 mx-auto bg-base-100 rounded-lg shadow-xl">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
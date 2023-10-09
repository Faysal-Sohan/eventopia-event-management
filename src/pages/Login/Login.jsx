import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";



const Login = () => {

    const { login, signInWithGoogle } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        login(email, password)
        .then(result => {
            console.log(result);
            toast("Logged in successfully!")
            location?.state ? navigate(location.state) : navigate('/')
        })
        .catch(error => console.log(error))
    }

    const handleGoogleSignIn = e => {
        e.preventDefault();
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            toast("Logged in successfully!")
            location?.state ? navigate(location.state) : navigate('/')
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="bg-purple-700 text-white min-h-screen">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="mt-12 pb-12 space-y-12">
                    <h3 className="text-3xl font-bold text-center">Login Here!</h3>
                    <form onSubmit={handleLogin} className="card-body md:w-1/3 w-3/4 mx-auto bg-base-100 rounded-lg shadow-xl text-black">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div className="text-black">
                            <p>New to Eventopia? <Link to={'/register'} className="text-pink-500">Register here.</Link></p>
                            <p className="text-center my-2 font-medium">Or</p>
                            <button onClick={handleGoogleSignIn} className="border border-red-400 w-full py-2 rounded-xl font-medium flex items-center justify-center  gap-2">
                                <FaGoogle></FaGoogle>Login with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
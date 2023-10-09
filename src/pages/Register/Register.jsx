import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify"

const Register = () => {

    const { createUser, setProfile } = useContext(AuthContext);
    const [passwordValid, setPasswordValid] = useState(true);
    const [invalidText, setInvalidText] = useState('');

    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photo, email, password)

        if (password.length < 6) {
            setPasswordValid(false)
            setInvalidText('Password must be at least 6 characters!');
            return
        }

        if (!/[A-Z]/.test(password)) {
            setPasswordValid(false)
            setInvalidText('Password must contain at least one Capital Letter')
            return
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setPasswordValid(false)
            setInvalidText('Password must contain at least one Special Character')
            return
        }
        setPasswordValid(true)
        setInvalidText('')

        createUser(name, photo, email, password)
            .then(result => {
                console.log(result)
                setProfile(name, photo)
                    .then(result => {
                        console.log(result)
                        toast("Registered Successfully!")
                        navigate('/')
                    })
                    .catch(error => console.log(error));
                
            })
            .catch(error => console.log(error));

    }

    return (
        <div className="bg-purple-700 text-white min-h-screen">
            <div className="container mx-auto">
                <Navbar></Navbar>
                <div className="mt-12 pb-12 space-y-12">
                    <h3 className="text-3xl font-bold text-center">Register Here!</h3>
                    <form onSubmit={handleRegister} className="card-body md:w-1/3 w-3/4 mx-auto bg-base-100 rounded-lg shadow-xl text-black">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="photo_url" className="input input-bordered" required />
                        </div>
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
                            {
                                !passwordValid && <p className="text-sm text-red-500">{invalidText}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-black">Already have an account? <Link to={'/login'} className="text-red-400">Login here.</Link></p>
                        <ToastContainer />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;
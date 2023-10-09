import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then()
        .catch()
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        {
            user && <li><NavLink to={'/create'}>Create</NavLink></li>
        }
        {
            user && <li><NavLink to={'/booked'}>Booked</NavLink></li>
        }
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <p className="text-2xl font-bold">Eventopia</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="menu menu-horizontal px-1">
                        {navLinks}
                    </div>
                </div>
                <div className="navbar-end">
                    {
                        !user ? <div className="flex gap-1">
                            <Link to={'/login'} className="btn btn-secondary relative">Sign In</Link> 
                            <Link to={'/register'} className="btn btn-primary relative">Register</Link> 
                        </div>:
                            <div className="flex gap-2">
                                <div className="flex flex-col justify-center items-center">
                                    <h3>{user.displayName}</h3>
                                    <p onClick={handleLogOut} className="hover:cursor-pointer relative">Sign Out</p>
                                </div>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-full rounded-full">
                                        {
                                            user?.photoURL ? <img src={user.photoURL} alt="" />:
                                            <FaUser className="w-full h-full bg-slate-100 p-1 text-black"></FaUser>
                                        }
                                    </div>
                                </label>
                            </div>

                    }

                </div>
            </div>
        </div >
    );
};

export default Navbar;
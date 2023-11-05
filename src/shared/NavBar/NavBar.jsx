import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);
    const auth = getAuth()
    console.log(auth.currentUser, user);

    const handleLogOut = () => {
        logOut()
            .then(result => console.log(result))
            .catch(error => console.error(error))
    }

    const navLinks = <>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "red" : "black",
            };
        }} to='/'>Home</NavLink></li>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "red"  : "black",
            };
        }} to='/profile'>Add Blog</NavLink></li>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "red"  : "black",
            };
        }} to='/blog'>All Blogs</NavLink></li>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "red"  : "black",
            };
        }} to='/blog'>Featured Blogs</NavLink></li>
        <li className="text-lg"><NavLink style={({ isActive }) => {
            return {
                textDecoration: isActive ? "underline" : "",
                color: isActive ? "red"  : "black",
            };
        }} to='/blog'>Wishlist</NavLink></li>

    </>

    return (
        <div className="mx-12 my-6">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {
                                user ?
                                    <div className="">
                                        <img className="btn btn-ghost btn-circle avatar mr-2" src={auth.currentUser.photoURL} />
                                        <h1 className="mr-2">{auth.currentUser.displayName}</h1>
                                        <button onClick={handleLogOut} className="btn bg-[#ae4e81cf] text-white">Sign Out</button></div>
                                    : <Link to='/login'>
                                        <button className="btn">Login</button>
                                    </Link>
                            }
                        </ul>
                    </div>
                    <div className="flex items-center gap-4 ">
                        <img className="w-[35px] h-[35px] rounded-lg" src="https://i.ibb.co/wNWNMrj/blog-icon.png" />
                        <h6 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-500 text-2xl font-bold">Chronicle </h6><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 text-2xl font-bold -ml-2">Whisper</span>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end hidden md:flex">
                    {
                        user ?
                            <div className="flex items-center">
                                <img className="btn btn-ghost btn-circle avatar mr-2" src={auth.currentUser.photoURL} />
                                <h1 className="mr-2 text-lg text-orange-500 capitalize">{auth.currentUser.displayName}</h1>
                                <button onClick={handleLogOut} className="btn bg-orange-500 text-white">Sign Out</button></div>
                            : <Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;

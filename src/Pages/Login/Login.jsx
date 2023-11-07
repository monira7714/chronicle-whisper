import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Swal from 'sweetalert2'
import NavBar from "../../shared/NavBar/NavBar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Footer from "../../shared/Footer/Footer";

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();


    const { logIn, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // console.log(e.currentTarget, form);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);


        logIn(email, password)
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have logged in successfully',
                })
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                const msg = error.message;
                console.log(msg);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops.......',
                    text: error.message
                })
            })

    }

    const handleGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have registered successfully',
                })
                navigate(location?.state ? location.state : '/')

            })
            .catch(error => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops.......',
                    text: error.message
                })
            })

    }

    return (
        <div>
            <NavBar></NavBar>
            <div className="flex flex-col items-center">
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <h2 className='text-3xl my-5 text-center'>Login to your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="py-2 rounded text-lg font-semibold bg-orange-500 text-white">Login</button>
                    </div>
                </form>

                <p className="text-center mb-4">New here? Please <Link to='/register'><button className="btn-link text-orange-500">Register</button></Link></p>
                <div className="border-2 border-orange-500 rounded-lg text-xl px-8 py-2 flex items-center font-medium mb-12">
                    <h3 className="text-orange-500">Login With</h3>
                    <button onClick={handleGoogle} className="btn-link ml-2"><img className="w-[50px] h-[50px]" src="https://i.ibb.co/GQnMLC9/google.png" alt="Google"/></button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
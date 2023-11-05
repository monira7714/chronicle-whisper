import { Link } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";

const Login = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="flex flex-col items-center">
                <form  className="card-body lg:w-1/2 md:w-3/4 mx-auto">
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
                    <button  className="btn-link ml-2"><img className="w-[50px] h-[50px]" src="https://i.ibb.co/GQnMLC9/google.png" alt="Google"/></button>
                </div>
            </div>
        </div>
    );
};

export default Login;
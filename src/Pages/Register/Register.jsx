import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
import Swal from 'sweetalert2'
import NavBar from "../../shared/NavBar/NavBar";


const Register = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const { registerUser, signInWithGoogle } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        // console.log(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // console.log(name, photo, email, password);


        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops.......',
                text: 'Your password should be at least 6 character or longer'
            })
            return
        }
        else if (!/[\d]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops.......',
                text: 'Your password should have at least one digit (0-9)'
            })
            return
        }
        else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops.......',
                text: 'Your password should have at least one uppercase character'
            })
            return
        }
        else if (!/[!@#$%^&*()_+]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops.......',
                text: 'Your password should have at least one special character'
            })
            return
        }


        registerUser(email, password)
            .then(result => {
                console.log(result.user);
                const auth = getAuth();
                updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                    .then(result => {
                        console.log(result.user, 'updated');
                    })
                    .catch(error => {
                        console.error(error);
                        console.log('not updated');
                        navigate(location?.state ? location.state : '/')
                    })

                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'You have registered successfully',
                })
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
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <h2 className='text-3xl my-5 text-center'>Register your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name='name' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Enter your photo URL" name='photo' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email address" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name='password' className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="py-2 rounded text-lg font-semibold bg-orange-500 text-white">Register</button>
                    </div>
                </form>
                
                <p className="text-center mb-4">Already have an account? Please <Link to='/login'><button className="btn-link text-orange-500">Login</button></Link></p>
                <div className="border-2 border-orange-500 rounded-lg text-xl px-8 py-2 flex items-center font-medium mb-12">
                    <h3 className="text-orange-500">Login With</h3>
                    <button onClick={handleGoogle} className="btn-link ml-2"><img className="w-[50px] h-[50px]" src="https://i.ibb.co/GQnMLC9/google.png" alt="Google" /></button>
                </div>
            </div>
        </div>
    );
};

export default Register;
import { FaPaperPlane } from 'react-icons/fa';
import Swal from 'sweetalert2'

const Newsletter = () => {

    const handleSubscribe = () => {
        // console.log('success');
        Swal.fire({
            icon: 'success',
            title: 'Congratulations',
            text: 'You have logged in successfully',
        })
    }

    return (
        <div className="w-full h-full mx-auto my-16">
            <div className="w-full flex gap-12 items-center flex-col justify-center bg-orange-300 py-28">
                <div className="flex flex-col gap-4 justify-center items-center text-white  md:w-1/3">
                    <img className='w-[50px] h-[50px]' src="https://i.ibb.co/cc0xJVf/newsletter-icon.webp" alt="" />
                    <h2 className="text-3xl lg:text-5xl tracking-widest font-medium mb-2">Newsletter</h2>
                    <p className="tracking-wide lg:text-lg text-sm">Subscribe to our new posts</p>
                </div>
                <div className="flex relative w-2/3 md:pl-20 pl-0">
                    <input className="md:px-6 px-4 md:py-5 py-3 md:w-2/3 w-full rounded-full md:text-lg text-sm" type="email" name='email' placeholder="Enter Your Email Address" />
                    <button onClick={handleSubscribe} className="flex items-center lg:px-12 md:px-6 px-3 md:py-5 py-3 md:text-xl font-semibold rounded-full bg-black text-white absolute lg:right-40 md:right-10 -right-2">
                        <span className='mr-4'>Sign Up</span><FaPaperPlane></FaPaperPlane>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
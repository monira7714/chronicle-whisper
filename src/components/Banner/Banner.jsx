import './Banner.css'

const Banner = () => {
    return (
        <div className=" my-8 ">
            <div className="hero min-h-screen background">
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="lg:text-6xl md:text-4xl text-2xl my-4 md:w-2/3">Let world know your thoughts through Chronicle Whisper </h1>
                        <p className="lg:text-xl my-8 lg:w-1/2 md:w-3/4 w-2/3">We publish blog on different topics and our user can publish their own blog. We encourage the writers to be creative and mindful.</p>
                        <button className="btn text-white bg-slate-500">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
// style={{ backgroundImage: 'url(https://i.ibb.co/HdGpL3w/design-space-decorated-with-leaves-website-banner-template.jpg)' }}
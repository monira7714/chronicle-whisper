
const Banner = () => {
    return (
        <div className=" my-8 ">
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HdGpL3w/design-space-decorated-with-leaves-website-banner-template.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center">
                    <div className="">
                        <h1 className="text-6xl my-4">Let world know your thoughts <br /> through Chronicle Whisper </h1>
                        <p className="text-xl my-8">We publish blog on different topics and our user can <br /> publish their own blog. We encourage the writers to be creative and mindful.</p>
                        <button className="btn text-white bg-slate-500">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
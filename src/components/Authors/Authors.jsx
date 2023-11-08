
const Authors = () => {

    return (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 md:mx-20 mx-12">
            <div className="flex p-6 space-y-8 flex-col items-center text-center bg-[#F7F3EF] rounded-lg">
                <div>
                    <img src="https://i.ibb.co/6Z8QNpw/tes-icon.png" alt="" />
                </div>
                <div>
                    <img className="avatar w-20 rounded-full mb-8" src="https://porto.gbjsolution.com/content/images/2023/08/Apurba.jpg" alt="" />
                    <h3 className="font-bold text-xl mb-4 ">Antony Tendon</h3>
                    <p className="text-[#646464] leading-9 text-lg">&#34;Antony Tendon is a professional blog writer who has expertise in technology, nature and food.&#34;.</p>
                    
                </div>
            </div>
            <div className="flex p-6 space-y-8 flex-col items-center text-center bg-[#F7F3EF] rounded-lg">
                <div>
                    <img src="https://i.ibb.co/6Z8QNpw/tes-icon.png" alt="" />
                </div>
                <div>
                    <img className="avatar w-20 rounded-full mb-8" src="https://porto.gbjsolution.com/content/images/2023/08/suravi.jpg" alt="" />
                    <h3 className="font-bold text-xl mb-4 ">Camalia Hesob</h3>
                    <p className="text-[#646464] leading-9 text-lg">&#34;Camalia Hesob is a professional blog writer who has expertise in fashion, food and lifestyle.&#34;.</p>
                    
                </div>
            </div>
            <div className="flex p-6 space-y-8 flex-col items-center text-center bg-[#F7F3EF] rounded-lg">
                <div>
                    <img src="https://i.ibb.co/6Z8QNpw/tes-icon.png" alt="" />
                </div>
                <div className="">
                    <img className="avatar w-20 rounded-full mb-8" src="https://porto.gbjsolution.com/content/images/2023/08/harini.jpg" alt="" />
                    <h3 className="font-bold text-xl mb-4 ">Priya Das</h3>
                    <p className="text-[#646464] leading-9 text-lg">&#34;Priya Das is a professional blog writer who has expertise in health, food and nature.&#34;.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Authors;
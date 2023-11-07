
const Tags = () => {

    return (
        <div className="my-20">
            <div className="flex my-8 gap-6 items-center justify-center">
                <h1 className="font-bold pb-4 text-orange-600">Popular Tags</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#e9590c">
                    <path d="M21.557,7.153L15.318,.964C14.547,.232,13.5-.105,12.447,.03L5.821,.905c-.821,.109-1.399,.862-1.291,1.684,.108,.822,.867,1.402,1.684,1.291l6.626-.875c.15-.02,.301,.028,.388,.112l6.201,6.152c.757,.773,.756,2.03,.007,2.793l-.512,.512c-.113-.145-.236-.285-.367-.419l-6.238-6.189c-.771-.732-1.819-1.07-2.871-.935l-6.626,.875c-.701,.093-1.242,.663-1.299,1.368l-.511,6.396c-.086,1.059,.307,2.086,1.054,2.795l6.086,6.035c.947,.967,2.214,1.5,3.567,1.501h.005c1.352,0,2.617-.53,3.564-1.494l3.278-3.333c.927-.944,1.401-2.178,1.421-3.421l1.579-1.579c1.896-1.929,1.898-5.072-.01-7.02Zm-5.13,9.917l-3.277,3.333c-.379,.386-.887,.598-1.428,.598-.542,0-1.049-.214-1.442-.616l-6.124-6.072c-.109-.104-.166-.25-.153-.402l.414-5.189,5.424-.716c.148-.024,.301,.028,.388,.112l6.201,6.152c.757,.773,.756,2.03-.002,2.802Zm-7.427-5.57c-.034,1.972-2.967,1.971-3,0,.034-1.972,2.967-1.971,3,0Z"></path>
                </svg>
            </div>
            <div className="bg-[#f6f6f6] space-y-6 py-16 px-20">
                <div className="flex md:flex-row flex-col justify-end gap-12 py-12">
                    <div className="p-6 flex items-center gap-4 bg-white rounded-xl">
                        <img className="w-[64px] h-[64px] rounded-full" src="https://images.unsplash.com/photo-1496571330383-9b977f4a021d?crop=entropy&cs=tinysrgb&fit=max&fm=webp&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDM3fHxuYXR1cmUlMjBmbG93ZXJ8ZW58MHx8fHwxNjkyNDQ2NDMxfDA&ixlib=rb-4.0.3&q=80&w=2000" alt="" />
                        <div>
                            <h4>Nature</h4>
                            <p>12 posts</p>
                        </div>
                        <a className="w-[60px] h-[60px] rounded-full bg-[#f6f6f6] p-5" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-6 flex items-center gap-4 bg-white rounded-xl">
                        <img className="w-[64px] h-[64px] rounded-full" src="https://i.ibb.co/jGgXPFC/marissa-grootes-D4j-Raha-Ua-Ic-unsplash.jpg" alt="" />
                        <div>
                            <h4>Fashion</h4>
                            <p>10 posts</p>
                        </div>
                        <a className="w-[60px] h-[60px] rounded-full bg-[#f6f6f6] p-5" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </a>
                    </div>

                    <div className="p-6 flex items-center gap-4 bg-white rounded-xl">
                        <img className="w-[64px] h-[64px] rounded-full" src="https://i.ibb.co/m6VR3Mh/adi-goldstein-EUs-Vw-EOsbl-E-unsplash.jpg" alt="" />
                        <div>
                            <h4>Technology</h4>
                            <p>8 posts</p>
                        </div>
                        <a className="w-[60px] h-[60px] rounded-full bg-[#f6f6f6] p-5" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-start gap-12 pb-12">
                    <div className="p-6 flex items-center gap-2 bg-white rounded-xl">
                        <img className="w-[40px] h-[40px] rounded-full" src="https://i.ibb.co/PznTWfc/brittney-weng-P-BPGW56-GFo-unsplash.jpg" alt="" />
                        <div>
                            <h4>Lifestyle</h4>
                            <p>9 posts</p>
                        </div>
                        <a className="w-[60px] h-[60px] rounded-full bg-[#f6f6f6] p-5" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-6 flex items-center gap-4 bg-white rounded-xl">
                        <img className="w-[64px] h-[64px] rounded-full" src="https://i.ibb.co/ZHxKtks/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg" alt="" />
                        <div>
                            <h4>Food</h4>
                            <p>11 posts</p>
                        </div>
                        <a className="w-[60px] h-[60px] rounded-full bg-[#f6f6f6] p-5" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="p-6 flex items-center gap-4 bg-white rounded-xl">
                        <img className="w-[64px] h-[64px] rounded-full" src="https://i.ibb.co/61dNsSD/hush-naidoo-jade-photography-yo01-Z-9-HQAw-unsplash-1.jpg" alt="" />
                        <div>
                            <h4>Health</h4>
                            <p>7 posts</p>
                        </div>
                        <a className="w-[60px] h-[60px] rounded-full bg-[#f6f6f6] p-5" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tags;
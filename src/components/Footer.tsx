const Footer = () => {
    return (
        <div className="bg-footer pt-24 pb-10">
            <div className="container">
                <div className="flex justify-between gap-10">
                    <div className="basis-1/2 space-y-5">
                        <h1 className="font-bold text-white text-[50px]">People are Saying About Do With</h1>
                        <p className="text-lg text-secondary">Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
                        <img src="../img/any.png" alt="" className="pt-10" />
                        <p className="text-secondary text-lg">I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
                        <p className="text-lg text-secondary">_ Aria Zinanrio</p>
                        <div className="flex gap-6">
                            <div>
                                <img src="../img/profile1.png" alt="" />
                            </div>
                            <div>
                                <img src="../img/profile2.png" alt="" />
                            </div>
                            <div>
                                <img src="../img/profile3.png" alt="" />
                            </div>
                            <div>
                                <img src="../img/profile4.png" alt="" />
                            </div>
                            <div>
                                <img src="../img/play-white.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 2xl:basis-1/3">
                        <div className="bg-[#222938] w-full h-full rounded-3xl py-10 px-24 2xl:px-14">
                            <div className="mx-auto w-fit">
                                <img src="../img/euro.png" alt="" className="mx-auto" />
                                <h1 className="text-3xl text-white mt-5 text-center">Get started</h1>
                            </div>
                            <div className="pt-4 space-y-4">
                                <div className="space-y-2 text-white">
                                    <h1>Email</h1>
                                    <input type="text" name="" id="" className="bg-white  w-full p-3 rounded-lg " placeholder="Enter your email" />
                                </div>
                                <div className="space-y-2 text-white">
                                    <h1>Message</h1>
                                    <textarea name="" id="" className="bg-white  w-full p-3 rounded-lg " rows={3} placeholder="What are you say?" />
                                </div>
                                <button className="p-4 bg-primary text-white w-full rounded-lg">Request Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-16">
                    <div className="flex gap-4 items-center">
                        <div className="basis-1/3 space-y-4">
                            <h1 className="text-[50px] text-primary">Biccas</h1>
                            <p className="text-lg text-secondary">Get started new try our product</p>
                            <div className="flex rounded-full p-2 border border-secondary">
                                <input type="text" className="bg-transparent w-full placeholder:sm placeholder:text-secondary px-2" placeholder="Enter yout email here" />
                                <button className="p-2 rounded-full bg-primary">
                                    <img src="../img/arrow-right.png" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className="basis-2/3 flex justify-between pl-20 text-secondary text-lg">
                            <ul className="space-y-3">
                                <li className="text-white">Support</li>
                                <li>Account information</li>
                                <li>Help centre</li>
                                <li>About</li>
                                <li>Contact us</li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="text-white">Help and Solution</li>
                                <li>Talk to support</li>
                                <li>Support docs</li>
                                <li>System status</li>
                                <li>Covid response</li>
                            </ul>
                            <ul className="space-y-3">
                                <li className="text-white">Product</li>
                                <li>Update</li>
                                <li>Security</li>
                                <li>Beta test</li>
                                <li>Pricing product</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between pt-14 items-center text-white">
                        <h1>© 2022 Biccas Inc. Copyright and rights reserved</h1>
                        <div className="flex gap-4">
                            <h1>Terms and Condtions</h1>
                            <h1>Privacy Policy</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
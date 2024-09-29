const Plans = () => {
    const path = window.location.href
    return (
        <div className="py-24">
            <div className="container">
                <div className="space-y-6">
                    <h1 className="text-center font-bold text-[50px]">Choose Plan That’s Right For You</h1>
                    <p className="text-secondary text-lg text-center">Choose plan that works best for you, feel free to contact us</p>
                    <div className="space-y-6">
                        <div className="mx-auto w-fit bg-white rounded-lg flex gap-2 shadow-md p-1">
                            <button className="px-5 p-2">Bil Monthly</button>
                            <button className="bg-primary px-4 p-2 rounded-lg text-white">Bill Yearly</button>
                        </div>
                        <div className="grid grid-cols-3 items-center gap-8 px-10 2xl:px-32">
                            <div className="col-span-1 shadow-md p-4 rounded-xl space-y-3 h-[500px]">
                                <h1 className="text-center text-3xl mt-5">Free</h1>
                                <p className="text-center text-secondary">Have a go  and test your  superpowers</p>
                                <div className="relative text-center w-fit mx-auto">
                                    <small className="absolute left-[-15px] text-secondary">$</small>
                                    <p className="text-4xl font-bold">0</p>
                                </div>
                                <ul className="p-5 bg-[#F9FAFB] rounded space-y-5">
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>2 Users</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>2 Files</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>Public Share & Comments</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>Chat Support</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>New income apps</h2>
                                    </li>
                                    <li>
                                        <button className="w-full p-3 bg-white rounded-xl font-semibold text-primary">Signup for free</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 shadow-md p-4 py-7 bg-primary h-[560px] rounded-xl space-y-3">
                                <h1 className="text-center text-white text-3xl mt-5">Pro</h1>
                                <p className="text-center text-white">Experiment the power of infinite possibilities</p>
                                <div className="relative text-center w-fit mx-auto text-white space-y-2">
                                    <small className="absolute left-[-15px]">$</small>
                                    <p className="text-4xl font-bold">8</p>
                                </div>
                                <div className="w-fit mx-auto">
                                    <button className="p-2 text-white bg-[#85DAB9] rounded-xl">Save $50 a year</button>
                                </div>
                                <ul className="p-5 bg-white rounded space-y-5">
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>4 Users</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>All apps</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>Unlimited editable exports</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>Folders and collaboration</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>All incoming apps</h2>
                                    </li>
                                    <li>
                                        <button className="w-full p-3 bg-primary rounded-xl font-semibold text-white">Signup for pro</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 shadow-md p-4 rounded-xl h-[500px] space-y-3">
                                <h1 className="text-center text-3xl mt-5">Business</h1>
                                <p className="text-center text-secondary">Have a go  and test your  superpowers</p>
                                <div className="relative text-center w-fit mx-auto">
                                    <small className="absolute left-[-15px] text-secondary">$</small>
                                    <p className="text-4xl font-bold">16</p>
                                </div>
                                <ul className="p-5 bg-[#F9FAFB] rounded space-y-5">
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>All the features of pro plan</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>Account success Manager</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>Single Sign-on (SSO)</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>Co-conception program</h2>
                                    </li>
                                    <li className="flex gap-2">
                                        <img src={`${path}../img/check-icon.png`} alt="" className="size-6 " />
                                        <h2>Collaboration-Soon</h2>
                                    </li>
                                    <li>
                                        <button className="w-full p-3 bg-white rounded-xl font-semibold text-primary">Signup for Business</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plans;

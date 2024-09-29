const Features = () => {
    const path = window.location.href
    return (
        <div className="pt-24">
            <div className="container">
                <div className="flex justify-between items-start">
                    <h1 className="text-5xl basis-1/4 font-bold">Our Features you cab get</h1>
                    <p className="basis-1/3 text-secondary">We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
                    <button className="p-4 rounded-full px-6 text-white bg-primary">Get started</button>
                </div>
                <div className="">
                    <div className="grid grid-cols-3 gap-20 justify-center pt-14">
                        <div className=" space-y-4">
                            <img src={`${path}../img/collboration.png`} alt="" className="" />
                            <h1 className="text-3xl font-semibold">Collboration Teams</h1>
                            <p className="text-lg text-secondary pr-5">Here you can handle projects together with team virtually</p>
                        </div>
                        <div className=" space-y-4">
                            <img src={`${path}../img/cloud.png`} alt="" className="" />
                            <h1 className="text-3xl font-semibold">Cloud Storage</h1>
                            <p className="text-lg text-secondary pr -5">No nedd to worry about storage because we provide storage up to 2 TB</p>
                        </div>
                        <div className=" space-y-4">
                            <img src={`${path}../img/daily.png`} alt="" className="" />
                            <h1 className="text-3xl font-semibold">Daily Analytics</h1>
                            <p className="text-lg text-secondary pr-5">We always provide useful informatin to make it easier for you every day</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-20 ">
                    <div className="basis-1/2 space-y-10">
                        <h1 className="text-[50px] font-bold">What Benifit Will You Get</h1>
                        <ul className="space-y-7">
                            <li className="flex gap-3 items-center">
                                <img src={`${path}../img/check-icon.png`} alt="" />
                                <h1>Free Consulting With Experet Saving Money</h1>
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={`${path}../img/check-icon.png`} alt="" />
                                <h1>Online Banking</h1>
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={`${path}../img/check-icon.png`} alt="" />
                                <h1>Investment Report Every Month</h1>
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={`${path}../img/check-icon.png`} alt="" />
                                <h1>SAving Money For The Future</h1>
                            </li>
                            <li className="flex gap-3 items-center">
                                <img src={`${path}../img/check-icon.png`} alt="" />
                                <h1>Online Transection</h1>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <img src={`${path}../img/gallery-icon.png`} alt="" className="absolute left-[-60px] top-60" />
                        <img src={`${path}../img/chat-icon.png`} alt="" className="absolute left-[-120px] top-10" />
                        <img src={`${path}../img/transfer-icon.png`} alt="" className="absolute bottom-0 left-[-120px]" />
                        <img src={`${path}../img/pc.png`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
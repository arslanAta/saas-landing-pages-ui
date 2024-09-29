import Navbar from "./Navbar"

const Hero = () => {
    const path = window.location.href
    return (
        <div className="-min-h-screen">
            <div className="container">
                <Navbar />
                <div className="mt-16 flex gap-8 justify-between">
                    <div className="basis-1/2 space-y-3">
                        <div>
                            <h1 className="text-[80px] leading-tight font-bold">We’re here to Increase your Productivity</h1>
                        </div>
                        <img src={`${path}./img/vector.png`} alt="" />
                        <p className="text-lg w-2/3 pt-5">Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.</p>
                        <div className="pt-6 flex gap-4 items-center ">
                            <button className="p-3 px-6 text-white bg-primary rounded-full">Try free trial</button>
                            <div className="flex gap-2 items-center cursor-pointer">
                                <img src={`${path}./img/play.png`} alt="" className="h-2/3" />
                                <h1>View Demo</h1>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2">
                        <img src={`${path}./img/hero.png`} alt="" />
                    </div>
                </div>
                <div className="pt-14 text-[40px] font-bold">
                    <h1 className="text-center">More than 25,000 teams use Collabs</h1>
                    <div className="w-full grid grid-cols-5 gap-5 py-20">
                        <div className="col-span-1">
                            <img src={`${path}./img/unsplash.png`} alt="" />
                        </div>
                        <div className="col-span-1">
                            <img src={`${path}./img/notion.png`} alt="" />
                        </div>
                        <div className="col-span-1">
                            <img src={`${path}./img/intercom.png`} alt="" />
                        </div>
                        <div className="col-span-1">
                            <img src={`${path}./img/descript.png`} alt="" />
                        </div>
                        <div className="col-span-1">
                            <img src={`${path}./img/grammarly.png`} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Hero
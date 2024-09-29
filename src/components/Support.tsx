const Support = () => {
    const path = window.location.href
    return (
        <div className="bg-[#f9f8fe] h-[540px]">
            <div className="container h-full">
                <div className="flex justify-between h-full items-center gap-5">
                    <div className="basis-1/2">
                        <h1 className="text-[50px] font-semibold">How we support our pratner all over the world</h1>
                        <p className="pt-4 text-secondary">
                            SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software
                        </p>
                        <div className="pt-16 flex gap-20">
                            <div className="space-y-3">
                                <img src={`${path}./img/rating5.png`} alt="" />
                                <p>4.9 / 5 rating </p>
                                <p className="text-secondary">databricks</p>
                            </div>
                            <div className="space-y-3">
                                <img src={`${path}./img/rating4.png`} alt="" />
                                <p>4.8 / 5 rating </p>
                                <p className="text-secondary">databricks</p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/2 space-y-10">
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-white">
                                <img src={`${path}./img/publishing-icon.png`} alt="" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold">Publishing</h1>
                                <p className="text-secondary text-lg">Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-white">
                                <img src={`${path}./img/analytics-icon.png`} alt="" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold">Analytics</h1>
                                <p className="text-secondary text-lg">Analyze your performance and create goegeous report</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-start">
                            <div className="p-3 bg-white">
                                <img src={`${path}./img/engagement-icon.png`} alt="" />
                            </div>
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold">Engagement</h1>
                                <p className="text-secondary text-lg">Quiuckly navigate you anda engage with your adience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
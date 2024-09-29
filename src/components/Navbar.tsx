const Navbar = () => {
    return (
        <div className="h-24 flex justify-between items-center">
            <div>
                <h1 className="text-5xl text-primary">Biccas</h1>
            </div>
            <div className="flex gap-20 justify-between items-center">
                <ul className="flex gap-6 text-secondary">
                    <li className="text-black">
                        Home
                    </li>
                    <li>
                        Product
                    </li>
                    <li>
                        FAQ
                    </li>
                    <li>
                        Blog
                    </li>
                    <li>
                        About us
                    </li>
                </ul>
                <div className="space-x-4">
                    <button className="text-secondary">
                        Login
                    </button>
                    <button className="py-2 rounded-xl px-3 bg-primary text-white">
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
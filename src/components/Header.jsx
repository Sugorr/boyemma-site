import Logo from "../assets/boyemma-logo.svg";

export default function Header () {
    return (
        <header className="w-full flex justify-center items-center py-6 px-12">
            <section className="w-full flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img src={Logo} alt="boyemma-logo" />
                </div>

                {/* Navigations */}
                <nav>
                    <ul className="flex items-center gap-6">
                        <li className="cursor-pointer select-none">Home</li>
                        <li className="cursor-pointer select-none">About Us</li>
                        <li className="cursor-pointer select-none">Philosophy</li>
                        <li className="cursor-pointer select-none">Teams</li>
                        <li className="px-6 py-3 cursor-pointer select-none hover:bg-default-accent transition-colors duration-200 rounded-full text-white bg-default-base ">Contact Us</li>
                    </ul>
                </nav>
            </section>
        </header>
    );
}
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constant";

function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

   

    return (
        <nav className="sticky top-0 z-50 py-3  backdrop-blur-lg border-b border-pink-300/20">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <div className="text-2xl px-2 bg-pink-400 rounded-md mr-2 text-white">Y</div>
                        <span className="text-xl tracking-tight text-pink-600">Yogurt Bliss</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="text-gray-700 hover:text-pink-500">{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <a href="#" className="py-2 px-4 rounded-md text-pink-500 hover:text-pink-700">
                            Sign In
                        </a>
                        <a href="#" className="bg-gradient-to-r from-pink-400 to-purple-500 text-white py-2 px-4 rounded-md">
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button onClick={toggleNavbar} className="text-pink-500">
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>

                    </div>
                </div>
                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="fixed right-0 mt-3   bg-pink-100 w-full  p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul className="space-y-6">
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href} className="text-pink-600   hover:text-purple-500">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border border-pink-400 rounded-md text-pink-600 hover:bg-pink-200">
                                Sign In
                            </a>
                            <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r i from-pink-400 to-purple-500 text-white">
                                Get Started
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
 
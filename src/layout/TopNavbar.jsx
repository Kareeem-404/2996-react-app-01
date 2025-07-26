import { Link } from "react-router";

export default function TopNavbar() {
    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Left side - Logo/Brand */}
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">MyApp</span>
                    </div>

                    {/* Center - Navigation Links */}
                    <div className="hidden md:flex items-center space-x-8 overflow-auto">
                        <Link to="/" className="text-gray-800 hover:text-blue-600 px-3 py-2 font-medium">Home</Link>
                        <Link to="/users" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Users</Link>
                        <Link to="/Products" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Products</Link>
                        <Link to="/Quotes" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Quotes</Link>
                        <Link to="/Todos" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Todos</Link>
                        <Link to="/Carts" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Carts</Link>
                        <Link to="/Posts" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Posts</Link>
                        <Link to="/Comments" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Comments</Link>
                        <Link to="/Recipes" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Recipes</Link>
                        <Link to="/services" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Services</Link>
                        <Link to="/about" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">About</Link>
                        <Link to="/contact" className="text-gray-500 hover:text-blue-600 px-3 py-2 font-medium">Contacts</Link>
                    </div>

                    {/* Right side - Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-500 hover:text-gray-800 px-3 py-2 font-medium">Sign In</button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium">Sign Up</button>
                    </div>

                    {/* Mobile menu button (hamburger) - simple version without icons */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-500 hover:text-gray-800">
                            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-600"></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
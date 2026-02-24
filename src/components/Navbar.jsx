import { Search, ShoppingBasket, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-lg">
            <ShoppingBasket className="text-white" size={24} />
          </div>
          <span className="text-xl font-bold text-gray-800 hidden md:block">
            Society<span className="text-primary">Mart</span>
          </span>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search 'milk' or 'biscuits'..."
            className="w-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-primary rounded-xl py-2 pl-10 pr-4 outline-none transition-all"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Link 
            to="/login" 
            className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-50 text-gray-600 font-medium transition"
          >
            <User size={20} />
            <span className="hidden sm:inline">Owner Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
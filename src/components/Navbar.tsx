import { ShoppingCart, Menu, X, Wheat } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Wheat className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">FarmMarket</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="hover:bg-green-700 px-3 py-2 rounded-md">Home</a>
              <a href="#products" className="hover:bg-green-700 px-3 py-2 rounded-md">Products</a>
              <a href="#about" className="hover:bg-green-700 px-3 py-2 rounded-md">About</a>
              <a href="#contact" className="hover:bg-green-700 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hover:bg-green-700 p-2 rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-green-700 p-2 rounded-full"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block hover:bg-green-700 px-3 py-2 rounded-md">Home</a>
            <a href="#products" className="block hover:bg-green-700 px-3 py-2 rounded-md">Products</a>
            <a href="#about" className="block hover:bg-green-700 px-3 py-2 rounded-md">About</a>
            <a href="#contact" className="block hover:bg-green-700 px-3 py-2 rounded-md">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
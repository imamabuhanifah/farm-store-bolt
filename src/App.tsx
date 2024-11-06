import React from 'react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const products = [
  {
    name: "Premium Wheat",
    price: 299.99,
    unit: "ton",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80",
    description: "High-quality wheat grain, perfect for milling and baking."
  },
  {
    name: "Organic Soybeans",
    price: 499.99,
    unit: "ton",
    image: "https://images.unsplash.com/photo-1601459427108-47e20d579a35?auto=format&fit=crop&q=80",
    description: "Non-GMO soybeans, ideal for food production and animal feed."
  },
  {
    name: "Yellow Corn",
    price: 245.99,
    unit: "ton",
    image: "https://images.unsplash.com/photo-1601472544834-b6433481f482?auto=format&fit=crop&q=80",
    description: "Premium quality corn suitable for various industrial applications."
  },
  {
    name: "Raw Cotton",
    price: 1599.99,
    unit: "ton",
    image: "https://images.unsplash.com/photo-1594897030264-ab7d87efc473?auto=format&fit=crop&q=80",
    description: "High-grade cotton for textile manufacturing."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Farm field"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative pt-32 px-4 h-full flex items-center">
          <div className="max-w-7xl mx-auto text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Farm Commodities
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Source high-quality agricultural products directly from verified producers
            </p>
            <a
              href="#products"
              className="inline-flex items-center bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              View Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Quality Assured</h3>
              <p>All our products undergo strict quality control measures</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Direct Sourcing</h3>
              <p>Work directly with verified producers and farmers</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Global Delivery</h3>
              <p>Efficient logistics and worldwide shipping solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-green-800" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-green-800" />
                <span>contact@farmmarket.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-green-800" />
                <span>123 Farm Road, Agricultural District, CA 90210</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-800 focus:border-transparent"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-800 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 FarmMarket. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
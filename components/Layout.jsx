import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiShoppingBag, FiUser, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Footer data to prevent duplication
  const footerData = {
    description: "Blending your style with premium quality clothing.",
    shopLinks: [
      { name: "Men", href: "/men" },
      { name: "Women", href: "/women" },
      { name: "New Arrivals", href: "/new-arrivals" },
      { name: "Best Sellers", href: "/best-sellers" }
    ],
    infoLinks: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Single Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Mobile menu button */}
            <button 
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(true)}
            >
              <FiMenu size={24} />
            </button>

            {/* Logo */}
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              ZEE<span className="text-gray-500">MPIX</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-gray-500 transition">Home</Link>
              <Link href="/shop" className="hover:text-gray-500 transition">Shop</Link>
              <Link href="/about" className="hover:text-gray-500 transition">About</Link>
              <Link href="/contact" className="hover:text-gray-500 transition">Contact</Link>
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="hover:text-gray-500 transition">
                <FiSearch size={20} />
              </button>
              <button className="hover:text-gray-500 transition">
                <FiUser size={20} />
              </button>
              <button className="hover:text-gray-500 transition relative">
                <FiShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white h-full w-4/5 max-w-sm p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-bold tracking-tighter" onClick={() => setIsMenuOpen(false)}>
                ZEE<span className="text-gray-500">MPIX</span>
              </Link>
              <button onClick={() => setIsMenuOpen(false)}>
                <FiX size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/shop" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link href="/about" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/contact" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Single Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">ZEE<span className="text-gray-400">MPIX</span></h3>
              <p className="text-gray-400">{footerData.description}</p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-gray-400">
                {footerData.shopLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Links */}
            <div>
              <h4 className="font-bold mb-4">Information</h4>
              <ul className="space-y-2 text-gray-400">
                {footerData.infoLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to get updates on new arrivals and special offers.
              </p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full text-black focus:outline-none"
                  required
                />
                <button 
                  type="submit"
                  className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zeempix.my. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
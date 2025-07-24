import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiShoppingBag, FiUser, FiSearch } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
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
              {/* Search Button and Input */}
              <div className="relative">
                <button 
                  className="hover:text-gray-500 transition"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                >
                  <FiSearch size={20} />
                </button>
                {isSearchOpen && (
                  <form 
                    onSubmit={handleSearch}
                    className="absolute right-0 top-full mt-2 w-64 bg-white p-2 shadow-lg rounded"
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search products..."
                      className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      autoFocus
                    />
                  </form>
                )}
              </div>
              
              {/* Profile Button */}
              <Link href="/account" className="hover:text-gray-500 transition">
                <FiUser size={20} />
              </Link>
              
              {/* Cart Button */}
              <Link href="/cart" className="hover:text-gray-500 transition relative">
                <FiShoppingBag size={20} />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
              </Link>
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
    </>
  );
}
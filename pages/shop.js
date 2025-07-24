import Layout from '../components/Layout';
import { FiFilter, FiChevronDown, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  // Same products array as in index.js plus more
  {
    id: 1,
    name: 'Premium T-Shirt',
    price: 'RM 129',
    image: '/placeholder-tshirt.jpg',
    category: 'men',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Designer Hoodie',
    price: 'RM 249',
    image: '/placeholder-hoodie.jpg',
    category: 'women',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Classic Jeans',
    price: 'RM 199',
    image: '/placeholder-jeans.jpg',
    category: 'men',
    rating: 4.2
  },
  {
    id: 4,
    name: 'Elegant Dress',
    price: 'RM 299',
    image: '/placeholder-dress.jpg',
    category: 'women',
    rating: 4.9
  },
  {
    id: 5,
    name: 'Casual Shirt',
    price: 'RM 179',
    image: '/placeholder-shirt.jpg',
    category: 'men',
    rating: 4.3
  },
  {
    id: 6,
    name: 'Summer Blouse',
    price: 'RM 159',
    image: '/placeholder-blouse.jpg',
    category: 'women',
    rating: 4.6
  },
  {
    id: 7,
    name: 'Slim Fit Chinos',
    price: 'RM 219',
    image: '/placeholder-chinos.jpg',
    category: 'men',
    rating: 4.4
  },
  {
    id: 8,
    name: 'Silk Scarf',
    price: 'RM 149',
    image: '/placeholder-scarf.jpg',
    category: 'women',
    rating: 4.7
  },
];

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortOption, setSortOption] = useState('featured');

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'price-low') return parseFloat(a.price.replace('RM ', '')) - parseFloat(b.price.replace('RM ', ''));
    if (sortOption === 'price-high') return parseFloat(b.price.replace('RM ', '')) - parseFloat(a.price.replace('RM ', ''));
    if (sortOption === 'rating') return b.rating - a.rating;
    return a.id - b.id; // default sort by featured (original order)
  });

  return (
    <Layout>
      <div className="pt-6 pb-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-black">Shop</span>
          </nav>

          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">Shop All</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded">
                  <FiFilter />
                  <span>Filter</span>
                </button>
              </div>
              
              <div className="relative">
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="appearance-none pl-4 pr-8 py-2 border border-gray-300 rounded bg-white"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            <button 
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'all' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveFilter('men')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'men' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              Men
            </button>
            <button 
              onClick={() => setActiveFilter('women')}
              className={`px-4 py-2 rounded-full ${activeFilter === 'women' ? 'bg-black text-white' : 'bg-gray-100 text-gray-800'}`}
            >
              Women
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link href={`/product/${product.id}`}>
                  <div className="bg-gray-100 aspect-square overflow-hidden relative rounded-lg">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
                      Quick View
                    </button>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-medium">{product.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-600">{product.price}</p>
                      <div className="flex items-center text-yellow-500">
                        <FiStar className="fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                3
              </button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                8
              </button>
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}
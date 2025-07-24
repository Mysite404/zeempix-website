import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Premium T-Shirt',
    price: 'RM 129',
    image: '/placeholder-tshirt.jpg',
    category: 'men'
  },
  {
    id: 2,
    name: 'Designer Hoodie',
    price: 'RM 249',
    image: '/placeholder-hoodie.jpg',
    category: 'women'
  },
  {
    id: 3,
    name: 'Classic Jeans',
    price: 'RM 199',
    image: '/placeholder-jeans.jpg',
    category: 'men'
  },
  {
    id: 4,
    name: 'Elegant Dress',
    price: 'RM 299',
    image: '/placeholder-dress.jpg',
    category: 'women'
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="bg-[url('/placeholder-hero.jpg')] bg-cover bg-center absolute inset-0"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Elevate Your Style
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto"
          >
            Discover our premium collection of clothing designed for the modern individual.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/shop" 
              className="inline-flex items-center px-8 py-3 bg-white text-black font-medium hover:bg-gray-100 transition"
            >
              Shop Now <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our carefully curated selection of premium clothing</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="bg-gray-100 aspect-square overflow-hidden relative">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    Quick View
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/shop" 
              className="inline-flex items-center px-6 py-2 border border-black text-black font-medium hover:bg-black hover:text-white transition"
            >
              View All Products <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-6">About Zeempix</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, Zeempix is a premium clothing brand dedicated to creating high-quality, stylish apparel for the modern individual.
              </p>
              <p className="text-gray-600 mb-6">
                Our mission is to provide clothing that not only looks good but feels good, using sustainable materials and ethical manufacturing processes.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center text-black font-medium hover:underline"
              >
                Learn More <FiArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-[url('/placeholder-about.jpg')] bg-cover bg-center aspect-video rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter to receive updates on new arrivals, exclusive offers, and style tips.
          </p>
          <div className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-3 w-full text-black focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-3 hover:bg-gray-200 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
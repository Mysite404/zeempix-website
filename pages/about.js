import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <Layout>
      <div className="pt-6 pb-20 bg-white">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 bg-gray-100 mb-12">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="bg-[url('/placeholder-about-hero.jpg')] bg-cover bg-center absolute inset-0"></div>
          <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Our Story
            </motion.h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg"
            >
              <h2 className="text-3xl font-bold mb-6">About Zeempix</h2>
              
              <p className="mb-6">
                Founded in 2023, Zeempix is a Malaysian premium clothing brand that embodies contemporary elegance and timeless style. 
                Our journey began with a simple vision: to create clothing that blends exceptional quality with modern design.
              </p>
              
              <p className="mb-6">
                At Zeempix, we believe that what you wear is an expression of who you are. That&apos;s why we meticulously craft each piece 
                to ensure it meets our high standards of quality, comfort, and style. From the selection of fabrics to the final stitch, 
                every detail matters.
              </p>
              
              <div className="my-12">
                <div className="bg-gray-100 aspect-video rounded-lg overflow-hidden mb-6">
                  <Image  
                    src="/placeholder-about-content.jpg" 
                    alt="Zeempix craftsmanship" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 text-center">Our design team working on the latest collection</p>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 mt-12">Our Philosophy</h3>
              
              <p className="mb-6">
                We&apos;re committed to sustainable fashion practices. Our materials are carefully sourced from ethical suppliers, 
                and we prioritize environmentally friendly production methods without compromising on quality.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-12">The Future</h3>
              
              <p className="mb-6">
                As we grow, we remain dedicated to our core values of quality, sustainability, and innovation. 
                We&apos;re excited to continue expanding our collections while maintaining the craftsmanship and attention 
                to detail that define the Zeempix brand.
              </p>
              
              <div className="mt-12">
                <Link 
                  href="/shop" 
                  className="inline-flex items-center px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition"
                >
                  Explore Our Collections
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
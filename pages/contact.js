import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import Image from 'next/image';

export default function Contact() {
  return (
    <Layout>
      <div className="pt-6 pb-20 bg-white">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 bg-gray-100 mb-12">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <div className="bg-[url('/placeholder-contact-hero.jpg')] bg-cover bg-center absolute inset-0"></div>
          <div className="container mx-auto px-4 h-full flex items-center z-20 relative">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Contact Us
            </motion.h1>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/3"
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-black mr-4 mt-1">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Our Location</h3>
                    <p className="text-gray-600">
                      123 Fashion Avenue<br />
                      Kuala Lumpur, 50450<br />
                      Malaysia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-black mr-4 mt-1">
                    <FiPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +60 3-1234 5678<br />
                      Mon-Fri, 9am-6pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-black mr-4 mt-1">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">
                      hello@zeempix.my<br />
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-black mr-4 mt-1">
                    <FiClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Store Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 10am - 8pm<br />
                      Saturday - Sunday: 11am - 6pm
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-2/3"
            >
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Subject of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="px-6 py-3 bg-black text-white font-medium hover:bg-gray-800 transition"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Map */}
          <div className="mt-16">
            <div className="bg-gray-100 aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.715425943313!2d101.6934157153319!3d3.157950953706054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0x9e3afdd17c8a9056!2sPetronas%20Twin%20Towers!5e0!3m2!1sen!2smy!4v1620000000000!5m2!1sen!2smy" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
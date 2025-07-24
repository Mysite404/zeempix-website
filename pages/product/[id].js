import Layout from '../../components/Layout';
import { FiChevronLeft, FiShoppingBag, FiHeart, FiShare2, FiStar } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState('m');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // In a real app, this data would come from an API based on the [id] parameter
  const product = {
    id: 1,
    name: 'Premium T-Shirt',
    price: 'RM 129',
    originalPrice: 'RM 159',
    description: 'Our premium t-shirt is made from 100% organic cotton, offering exceptional comfort and durability. The minimalist design makes it versatile for any occasion.',
    rating: 4.5,
    reviewCount: 42,
    images: [
      '/placeholder-tshirt.jpg',
      '/placeholder-tshirt-alt1.jpg',
      '/placeholder-tshirt-alt2.jpg',
      '/placeholder-tshirt-alt3.jpg',
    ],
    sizes: ['xs', 's', 'm', 'l', 'xl'],
    colors: ['Black', 'White', 'Navy'],
    details: [
      '100% Organic Cotton',
      'Pre-shrunk fabric',
      'Reinforced stitching',
      'Machine wash cold',
      'Made in Malaysia'
    ]
  };

  return (
    <Layout>
      <div className="pt-6 pb-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-black">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/shop" className="hover:text-black">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-black">{product.name}</span>
          </nav>

          {/* Back button for mobile */}
          <Link href="/shop" className="md:hidden flex items-center text-sm mb-6">
            <FiChevronLeft className="mr-1" /> Back to Shop
          </Link>

          {/* Product Content */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div className="lg:w-1/2">
              <div className="bg-gray-100 aspect-square rounded-lg overflow-hidden mb-4">
                <img 
                  src={product.images[activeImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`aspect-square bg-gray-100 rounded overflow-hidden ${activeImage === index ? 'ring-2 ring-black' : ''}`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:w-1/2">
              <div className="mb-6">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-500 mr-2">
                    <FiStar className="fill-current" />
                    <FiStar className="fill-current" />
                    <FiStar className="fill-current" />
                    <FiStar className="fill-current" />
                    <FiStar className="fill-current opacity-30" />
                  </div>
                  <span className="text-sm text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center mb-6">
                  <span className="text-2xl font-bold mr-3">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
                <p className="text-gray-700 mb-6">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="flex space-x-2">
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      className="px-4 py-2 border border-gray-300 rounded hover:border-black transition"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 flex items-center justify-center border rounded uppercase ${selectedSize === size ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex items-center border border-gray-300 w-fit rounded overflow-hidden">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 border-x border-gray-300">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="flex-1 flex items-center justify-center bg-black text-white py-3 px-6 hover:bg-gray-800 transition">
                  <FiShoppingBag className="mr-2" />
                  Add to Bag
                </button>
                <button className="flex-1 flex items-center justify-center border border-black text-black py-3 px-6 hover:bg-gray-100 transition">
                  <FiHeart className="mr-2" />
                  Wishlist
                </button>
              </div>

              {/* Share */}
              <div className="mb-12">
                <button className="flex items-center text-gray-600 hover:text-black">
                  <FiShare2 className="mr-2" />
                  Share
                </button>
              </div>

              {/* Product Details */}
              <div>
                <h3 className="text-sm font-medium mb-3">Details</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
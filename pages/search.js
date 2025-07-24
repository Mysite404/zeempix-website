// pages/search.js
import RootLayout from '../components/RootLayout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SearchPage() {
  const router = useRouter();
  const { q } = router.query;
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (q) {
      setIsLoading(true);
      // In a real app, you would fetch from your API
      // This is just a mock implementation
      const mockResults = [
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
        }
      ].filter(item => 
        item.name.toLowerCase().includes(q.toLowerCase()) ||
        item.category.toLowerCase().includes(q.toLowerCase())
      );
      
      setTimeout(() => {
        setSearchResults(mockResults);
        setIsLoading(false);
      }, 500);
    }
  }, [q]);

  return (
    <RootLayout>
      <div className="pt-24 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold mb-6">
            Search Results for: <span className="text-gray-600">"{q}"</span>
          </h1>
          
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {searchResults.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/product/${product.id}`}>
                    <div className="bg-gray-100 aspect-square overflow-hidden relative rounded-lg">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-gray-600">{product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No products found matching your search.</p>
              <Link 
                href="/shop" 
                className="inline-block mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </RootLayout>
  );
}
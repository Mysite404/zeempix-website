import Layout from '../components/Layout';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export default function NotFound() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition"
          >
            <FiArrowLeft className="mr-2" />
            Go back home
          </Link>
        </div>
      </div>
    </Layout>
  );
}
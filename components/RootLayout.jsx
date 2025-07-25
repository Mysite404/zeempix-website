// components/RootLayout.jsx
import Header from './Header';
import Footer from './Footer';

export default function RootLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
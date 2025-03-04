import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, Info, FileText, Newspaper, Phone, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">Desa Digital</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Beranda" />
            <NavLink to="/about" icon={<Info className="h-5 w-5" />} text="Tentang Desa" />
            <NavLink to="/services" icon={<FileText className="h-5 w-5" />} text="Layanan" />
            <NavLink to="/products" icon={<ShoppingBag className="h-5 w-5" />} text="Produk Desa" />
            <NavLink to="/news" icon={<Newspaper className="h-5 w-5" />} text="Berita" />
            <NavLink to="/contact" icon={<Phone className="h-5 w-5" />} text="Kontak" />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <MobileNavLink to="/" icon={<Home className="h-5 w-5" />} text="Beranda" onClick={toggleMenu} />
            <MobileNavLink to="/about" icon={<Info className="h-5 w-5" />} text="Tentang Desa" onClick={toggleMenu} />
            <MobileNavLink to="/services" icon={<FileText className="h-5 w-5" />} text="Layanan" onClick={toggleMenu} />
            <MobileNavLink to="/products" icon={<ShoppingBag className="h-5 w-5" />} text="Produk Desa" onClick={toggleMenu} />
            <MobileNavLink to="/news" icon={<Newspaper className="h-5 w-5" />} text="Berita" onClick={toggleMenu} />
            <MobileNavLink to="/contact" icon={<Phone className="h-5 w-5" />} text="Kontak" onClick={toggleMenu} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link to={to} className="flex items-center space-x-1 hover:text-green-200 transition duration-200">
    {icon}
    <span>{text}</span>
  </Link>
);

const MobileNavLink = ({ 
  to, 
  icon, 
  text, 
  onClick 
}: { 
  to: string; 
  icon: React.ReactNode; 
  text: string; 
  onClick: () => void 
}) => (
  <Link 
    to={to} 
    className="flex items-center space-x-2 p-2 rounded hover:bg-green-600 transition duration-200"
    onClick={onClick}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;
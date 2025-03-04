import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Desa Digital</h3>
            <p className="mb-4">
              Desa Digital adalah desa yang mengadopsi teknologi untuk meningkatkan pelayanan publik, 
              transparansi, dan partisipasi masyarakat dalam pembangunan desa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-300 transition duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-300 transition duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-300 transition duration-200">Beranda</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-300 transition duration-200">Tentang Desa</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-green-300 transition duration-200">Layanan</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-green-300 transition duration-200">Produk Desa</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-green-300 transition duration-200">Berita</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-300 transition duration-200">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Jl. Desa Digital No. 123, Kecamatan Maju, Kabupaten Sejahtera, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+62 123 4567 890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@desadigital.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} Desa Digital. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
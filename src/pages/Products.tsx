import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, ShoppingBag } from 'lucide-react';
import { products, ProductCategory } from '../data/products';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'makanan', name: 'Makanan' },
    { id: 'minuman', name: 'Minuman' },
    { id: 'kerajinan', name: 'Kerajinan' },
    { id: 'pertanian', name: 'Hasil Pertanian' },
    { id: 'lainnya', name: 'Lainnya' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Produk Desa</h1>
            <p className="text-xl">
              Temukan berbagai produk unggulan dari Desa Digital yang diproduksi oleh masyarakat lokal.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Cari produk..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products List Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-600">Tidak ada produk yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Produk Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Produk-produk terbaik dari Desa Digital yang telah mendapatkan pengakuan dan diminati oleh banyak konsumen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products
              .filter(product => product.featured)
              .slice(0, 3)
              .map(product => (
                <FeaturedProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Cara Pemesanan</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-xl">
                        1
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Pilih Produk</h3>
                      <p className="text-gray-600">Pilih produk yang ingin Anda beli dan klik untuk melihat detail.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-xl">
                        2
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Tambahkan ke Keranjang</h3>
                      <p className="text-gray-600">Tentukan jumlah yang ingin dibeli dan tambahkan ke keranjang.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-xl">
                        3
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Checkout via WhatsApp</h3>
                      <p className="text-gray-600">Klik tombol checkout dan lanjutkan pemesanan melalui WhatsApp.</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-600 text-white font-bold text-xl">
                        4
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">Konfirmasi dan Pembayaran</h3>
                      <p className="text-gray-600">Konfirmasi pesanan dan lakukan pembayaran sesuai instruksi.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div 
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({ product }: { product: typeof products[0] }) => (
  <Link to={`/products/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
    <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      {product.discount > 0 && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}% OFF
        </div>
      )}
    </div>
    <div className="p-4 flex-grow flex flex-col">
      <div className="flex-grow">
        <span className="text-xs text-green-600 font-medium">{getCategoryName(product.category)}</span>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
      </div>
      <div className="mt-2">
        {product.discount > 0 ? (
          <div className="flex items-center">
            <span className="text-gray-400 line-through text-sm mr-2">Rp {product.price.toLocaleString('id-ID')}</span>
            <span className="text-lg font-bold text-green-600">
              Rp {(product.price - (product.price * product.discount / 100)).toLocaleString('id-ID')}
            </span>
          </div>
        ) : (
          <span className="text-lg font-bold text-green-600">Rp {product.price.toLocaleString('id-ID')}</span>
        )}
      </div>
    </div>
  </Link>
);

const FeaturedProductCard = ({ product }: { product: typeof products[0] }) => (
  <Link to={`/products/${product.id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
    <div className="relative">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
        UNGGULAN
      </div>
      {product.discount > 0 && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount}% OFF
        </div>
      )}
    </div>
    <div className="p-6">
      <span className="text-sm text-green-600 font-medium">{getCategoryName(product.category)}</span>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex items-center justify-between">
        {product.discount > 0 ? (
          <div>
            <span className="text-gray-400 line-through text-sm block">Rp {product.price.toLocaleString('id-ID')}</span>
            <span className="text-xl font-bold text-green-600">
              Rp {(product.price - (product.price * product.discount / 100)).toLocaleString('id-ID')}
            </span>
          </div>
        ) : (
          <span className="text-xl font-bold text-green-600">Rp {product.price.toLocaleString('id-ID')}</span>
        )}
        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
          Terjual {product.sold}+
        </div>
      </div>
    </div>
  </Link>
);

function getCategoryName(categoryId: string) {
  const categories: Record<string, string> = {
    'makanan': 'Makanan',
    'minuman': 'Minuman',
    'kerajinan': 'Kerajinan',
    'pertanian': 'Hasil Pertanian',
    'lainnya': 'Lainnya'
  };
  return categories[categoryId] || categoryId;
}

export default Products;
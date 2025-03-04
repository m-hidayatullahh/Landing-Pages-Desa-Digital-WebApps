import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Minus, Plus, ShoppingCart, Share2, Heart, Truck, Shield, RefreshCw, MessageCircle } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const product = products.find(p => p.id === Number(id));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Produk tidak ditemukan</h2>
        <Link to="/products" className="text-green-600 hover:text-green-700 font-medium">
          Kembali ke halaman produk
        </Link>
      </div>
    );
  }

  const discountedPrice = product.discount > 0 
    ? product.price - (product.price * product.discount / 100) 
    : product.price;

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleCheckout = () => {
    const message = `Halo, saya ingin memesan produk berikut:\n\n*${product.name}*\nJumlah: ${quantity}\nHarga: Rp ${discountedPrice.toLocaleString('id-ID')} x ${quantity} = Rp ${(discountedPrice * quantity).toLocaleString('id-ID')}\n\nMohon informasi lebih lanjut untuk proses pembayaran dan pengiriman. Terima kasih.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6287715882995?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/products" className="flex items-center text-green-600 hover:text-green-700 font-medium">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Kembali ke Produk
          </Link>
        </div>

        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="p-6">
              <div className="relative mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-auto rounded-lg"
                />
                {product.discount > 0 && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, index) => (
                  <img 
                    key={index}
                    src={product.image} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    className="w-full h-20 object-cover rounded cursor-pointer border-2 border-transparent hover:border-green-500"
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6">
              <div className="mb-6">
                <span className="text-sm text-green-600 font-medium">{getCategoryName(product.category)}</span>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index}
                        className={`h-4 w-4 ${index < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviews} ulasan)</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    Terjual {product.sold}+
                  </div>
                </div>
                <div className="mb-4">
                  {product.discount > 0 ? (
                    <div>
                      <span className="text-gray-400 line-through text-lg">Rp {product.price.toLocaleString('id-ID')}</span>
                      <div className="text-3xl font-bold text-green-600">
                        Rp {discountedPrice.toLocaleString('id-ID')}
                      </div>
                    </div>
                  ) : (
                    <div className="text-3xl font-bold text-green-600">
                      Rp {product.price.toLocaleString('id-ID')}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700 font-medium">Jumlah</span>
                  <span className="text-gray-600 text-sm">Tersedia: {product.stock}</span>
                </div>
                <div className="flex items-center">
                  <button 
                    onClick={handleDecreaseQuantity}
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300 p-2 rounded-l-md"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => {
                      const value = parseInt(e.target.value);
                      if (!isNaN(value) && value >= 1 && value <= product.stock) {
                        setQuantity(value);
                      }
                    }}
                    className="w-16 text-center border-t border-b border-gray-200 py-2"
                  />
                  <button 
                    onClick={handleIncreaseQuantity}
                    className="bg-gray-200 text-gray-700 hover:bg-gray-300 p-2 rounded-r-md"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleCheckout}
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300 flex items-center justify-center"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Beli via WhatsApp
                  </button>
                  <div className="flex gap-2">
                    <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 p-3 rounded-lg">
                      <Heart className="h-5 w-5" />
                    </button>
                    <button className="bg-gray-200 text-gray-700 hover:bg-gray-300 p-3 rounded-lg">
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Pengiriman Cepat</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Produk Asli</span>
                </div>
                <div className="flex items-center">
                  <RefreshCw className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Garansi 7 Hari</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-600">Bantuan 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === 'description'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Deskripsi
              </button>
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === 'specifications'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Spesifikasi
              </button>
              <button
                className={`px-6 py-3 font-medium ${
                  activeTab === 'reviews'
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Ulasan ({product.reviews})
              </button>
            </div>
          </div>
          <div className="p-6">
            {activeTab === 'description' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Deskripsi Produk</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-gray-600 mb-4">
                  {product.longDescription || `${product.name} adalah produk unggulan dari Desa Digital yang diproduksi langsung oleh masyarakat desa. Produk ini dibuat dengan bahan-bahan berkualitas tinggi dan proses produksi yang higienis untuk memastikan kualitas terbaik.`}
                </p>
                <p className="text-gray-600">
                  Produk ini cocok untuk dikonsumsi oleh semua kalangan dan dapat menjadi pilihan oleh-oleh khas Desa Digital. Dengan membeli produk ini, Anda turut mendukung perekonomian masyarakat desa dan pemberdayaan UMKM lokal.
                </p>
              </div>
            )}
            {activeTab === 'specifications' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Spesifikasi Produk</h3>
                <div className="border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-3 border-b">
                    <div className="p-3 bg-gray-50 font-medium text-gray-700">Kategori</div>
                    <div className="p-3 col-span-2">{getCategoryName(product.category)}</div>
                  </div>
                  <div className="grid grid-cols-3 border-b">
                    <div className="p-3 bg-gray-50 font-medium text-gray-700">Berat</div>
                    <div className="p-3 col-span-2">{product.weight || '500'} gram</div>
                  </div>
                  <div className="grid grid-cols-3 border-b">
                    <div className="p-3 bg-gray-50 font-medium text-gray-700">Kondisi</div>
                    <div className="p-3 col-span-2">Baru</div>
                  </div>
                  <div className="grid grid-cols-3 border-b">
                    <div className="p-3 bg-gray-50 font-medium text-gray-700">Masa Simpan</div>
                    <div className="p-3 col-span-2">{product.expiry || '3 bulan'}</div>
                  </div>
                  <div className="grid grid-cols-3 border-b">
                    <div className="p-3 bg-gray-50 font-medium text-gray-700">Sertifikasi</div>
                    <div className="p-3 col-span-2">{product.certification || 'PIRT, Halal'}</div>
                  </div>
                  <div className="grid grid-cols-3">
                    <div className="p-3 bg-gray-50 font-medium text-gray-700">Produsen</div>
                    <div className="p-3 col-span-2">UMKM Desa Digital</div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Ulasan Pembeli</h3>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="flex mr-4">
                      {[...Array(5)].map((_, index) => (
                        <Star 
                          key={index}
                          className={`h-5 w-5 ${index < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xl font-semibold text-gray-800">{product.rating} dari 5</span>
                  </div>
                  <p className="text-gray-600">{product.reviews} ulasan</p>
                </div>
                <div className="space-y-6">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="border-b pb-6">
                      <div className="flex items-center mb-2">
                        <img 
                          src={`https://i.pravatar.cc/150?img=${index + 10}`} 
                          alt="User" 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                          <h4 className="font-medium text-gray-800">Pembeli {index + 1}</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, starIndex) => (
                              <Star 
                                key={starIndex}
                                className={`h-4 w-4 ${starIndex < 5 - index ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-2 text-sm text-gray-500">2 minggu yang lalu</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600">
                        {index === 0 
                          ? `Produk sangat bagus dan sesuai dengan deskripsi. Pengiriman cepat dan pelayanan ramah. Akan belanja lagi di sini.` 
                          : index === 1 
                            ? `Kualitas produk baik, harga terjangkau. Recommended seller!` 
                            : `Produk original dan berkualitas. Terima kasih Desa Digital!`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Produk Terkait</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products
              .filter(p => p.category === product.category && p.id !== product.id)
              .slice(0, 4)
              .map(relatedProduct => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
          </div>
        </div>
      </div>
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

export default ProductDetail;
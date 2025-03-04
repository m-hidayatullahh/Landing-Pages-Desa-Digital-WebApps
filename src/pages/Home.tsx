import React from 'react';
import { ArrowRight, FileText, Users, BarChart3, Calendar, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div 
          className="relative h-[70vh] bg-cover bg-center flex items-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Selamat Datang di Desa Digital</h1>
              <p className="text-xl mb-8">
                Desa yang mengadopsi teknologi untuk meningkatkan kualitas hidup masyarakat dan pelayanan publik.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/services" 
                  className="bg-white text-green-700 px-6 py-3 rounded-lg font-medium hover:bg-green-100 transition duration-300"
                >
                  Layanan Kami
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-green-700 transition duration-300"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Layanan Digital Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan digital untuk memudahkan masyarakat dalam mengakses informasi dan layanan publik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<FileText className="h-10 w-10 text-green-600" />}
              title="Administrasi Online"
              description="Urus surat-menyurat dan dokumen penting secara online tanpa perlu datang ke kantor desa."
            />
            <FeatureCard 
              icon={<Users className="h-10 w-10 text-green-600" />}
              title="Forum Warga"
              description="Wadah diskusi online untuk menyampaikan aspirasi dan bertukar informasi antar warga."
            />
            <FeatureCard 
              icon={<BarChart3 className="h-10 w-10 text-green-600" />}
              title="Transparansi Anggaran"
              description="Akses informasi penggunaan anggaran desa secara transparan dan akuntabel."
            />
            <FeatureCard 
              icon={<Calendar className="h-10 w-10 text-green-600" />}
              title="Agenda Desa"
              description="Informasi kegiatan dan acara desa yang dapat diakses kapan saja dan di mana saja."
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Produk Unggulan</h2>
            <Link to="/products" className="flex items-center text-green-600 hover:text-green-700 font-medium">
              Lihat Semua <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                description={product.description}
                price={product.price}
                discount={product.discount}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Berita Terbaru</h2>
            <Link to="/news" className="flex items-center text-green-600 hover:text-green-700 font-medium">
              Lihat Semua <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NewsCard 
              image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="15 Mei 2025"
              title="Program Pelatihan Digital untuk Petani Desa"
              excerpt="Program pelatihan digital untuk meningkatkan produktivitas dan pemasaran hasil pertanian bagi petani desa."
            />
            <NewsCard 
              image="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="10 Mei 2025"
              title="Pembangunan Pusat Internet Desa Selesai"
              excerpt="Pusat internet desa telah selesai dibangun dan siap digunakan oleh masyarakat untuk mengakses informasi dan layanan digital."
            />
            <NewsCard 
              image="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              date="5 Mei 2025"
              title="Kunjungan Menteri Desa ke Desa Digital"
              excerpt="Menteri Desa mengunjungi Desa Digital untuk melihat langsung implementasi program digitalisasi desa."
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <StatCard number="1250" label="Penduduk" />
            <StatCard number="85%" label="Pengguna Internet" />
            <StatCard number="24" label="Layanan Digital" />
            <StatCard number="95%" label="Kepuasan Masyarakat" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Bergabunglah dengan Komunitas Digital Kami</h2>
              <p className="text-gray-600 max-w-xl">
                Dapatkan informasi terbaru tentang program dan kegiatan desa digital. Mari bersama-sama membangun desa yang lebih maju dan sejahtera.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition duration-300 whitespace-nowrap"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProductCard = ({ 
  id, 
  image, 
  name, 
  description, 
  price, 
  discount, 
  category 
}: { 
  id: number;
  image: string; 
  name: string; 
  description: string; 
  price: number;
  discount: number;
  category: string;
}) => (
  <Link to={`/products/${id}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <div className="relative">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      {discount > 0 && (
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {discount}% OFF
        </div>
      )}
    </div>
    <div className="p-6">
      <span className="text-xs text-green-600 font-medium">{getCategoryName(category)}</span>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center justify-between">
        {discount > 0 ? (
          <div>
            <span className="text-gray-400 line-through text-sm block">Rp {price.toLocaleString('id-ID')}</span>
            <span className="text-xl font-bold text-green-600">
              Rp {(price - (price * discount / 100)).toLocaleString('id-ID')}
            </span>
          </div>
        ) : (
          <span className="text-xl font-bold text-green-600">Rp {price.toLocaleString('id-ID')}</span>
        )}
        <div className="bg-green-100 p-2 rounded-full">
          <ShoppingBag className="h-5 w-5 text-green-600" />
        </div>
      </div>
    </div>
  </Link>
);

const NewsCard = ({ image, date, title, excerpt }: { image: string; date: string; title: string; excerpt: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-green-600 text-sm mb-2">{date}</p>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to="/news" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
        Baca Selengkapnya <ArrowRight className="h-4 w-4 ml-1" />
      </Link>
    </div>
  </div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div>
    <div className="text-4xl font-bold mb-2">{number}</div>
    <div className="text-green-200">{label}</div>
  </div>
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

export default Home;
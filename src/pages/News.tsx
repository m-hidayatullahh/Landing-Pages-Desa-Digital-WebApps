import React, { useState } from 'react';
import { Search, Calendar, User, Tag } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'pembangunan', name: 'Pembangunan' },
    { id: 'kesehatan', name: 'Kesehatan' },
    { id: 'pendidikan', name: 'Pendidikan' },
    { id: 'teknologi', name: 'Teknologi' },
    { id: 'kegiatan', name: 'Kegiatan' }
  ];

  const newsItems = [
    {
      id: 1,
      title: 'Program Pelatihan Digital untuk Petani Desa',
      date: '15 Mei 2025',
      author: 'Admin Desa',
      category: 'teknologi',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Program pelatihan digital untuk meningkatkan produktivitas dan pemasaran hasil pertanian bagi petani desa.',
      content: 'Desa Digital telah meluncurkan program pelatihan digital untuk para petani di desa. Program ini bertujuan untuk meningkatkan produktivitas dan pemasaran hasil pertanian melalui pemanfaatan teknologi digital. Para petani akan dilatih untuk menggunakan aplikasi pertanian, platform pemasaran online, dan teknologi IoT untuk monitoring lahan pertanian. Program ini diharapkan dapat meningkatkan pendapatan petani dan mendorong pertumbuhan ekonomi desa.'
    },
    {
      id: 2,
      title: 'Pembangunan Pusat Internet Desa Selesai',
      date: '10 Mei 2025',
      author: 'Admin Desa',
      category: 'pembangunan',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Pusat internet desa telah selesai dibangun dan siap digunakan oleh masyarakat untuk mengakses informasi dan layanan digital.',
      content: 'Pembangunan Pusat Internet Desa telah selesai dan siap digunakan oleh masyarakat. Pusat internet ini dilengkapi dengan 10 unit komputer, koneksi internet berkecepatan tinggi, dan ruang pelatihan. Masyarakat dapat menggunakan fasilitas ini untuk mengakses informasi, mengikuti pelatihan digital, dan menggunakan layanan digital desa. Pusat internet ini diharapkan dapat menjadi katalisator untuk transformasi digital di desa.'
    },
    {
      id: 3,
      title: 'Kunjungan Menteri Desa ke Desa Digital',
      date: '5 Mei 2025',
      author: 'Admin Desa',
      category: 'kegiatan',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Menteri Desa mengunjungi Desa Digital untuk melihat langsung implementasi program digitalisasi desa.',
      content: 'Menteri Desa telah mengunjungi Desa Digital untuk melihat langsung implementasi program digitalisasi desa. Dalam kunjungannya, Menteri Desa mengapresiasi inovasi dan kemajuan yang telah dicapai oleh Desa Digital dalam mengimplementasikan teknologi digital untuk meningkatkan pelayanan publik dan kualitas hidup masyarakat. Menteri juga menyatakan bahwa Desa Digital akan dijadikan sebagai percontohan bagi desa-desa lain dalam program digitalisasi desa nasional.'
    },
    {
      id: 4,
      title: 'Posyandu Digital Mulai Beroperasi',
      date: '1 Mei 2025',
      author: 'Admin Desa',
      category: 'kesehatan',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Posyandu Digital mulai beroperasi untuk meningkatkan layanan kesehatan ibu dan anak di desa.',
      content: 'Posyandu Digital telah mulai beroperasi di Desa Digital. Posyandu ini dilengkapi dengan sistem informasi kesehatan digital yang memungkinkan pencatatan dan monitoring kesehatan ibu dan anak secara real-time. Data kesehatan dapat diakses oleh tenaga kesehatan dan orang tua melalui aplikasi mobile. Posyandu Digital ini diharapkan dapat meningkatkan kualitas layanan kesehatan ibu dan anak di desa.'
    },
    {
      id: 5,
      title: 'Sekolah Desa Terapkan Pembelajaran Digital',
      date: '25 April 2025',
      author: 'Admin Desa',
      category: 'pendidikan',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Sekolah di desa mulai menerapkan pembelajaran digital untuk meningkatkan kualitas pendidikan.',
      content: 'Sekolah di Desa Digital telah mulai menerapkan pembelajaran digital untuk meningkatkan kualitas pendidikan. Sekolah ini dilengkapi dengan komputer, proyektor, dan koneksi internet yang memadai. Para guru telah dilatih untuk menggunakan teknologi digital dalam proses pembelajaran. Pembelajaran digital ini diharapkan dapat meningkatkan minat belajar siswa dan mempersiapkan mereka untuk menghadapi era digital.'
    },
    {
      id: 6,
      title: 'Desa Digital Raih Penghargaan Desa Inovatif',
      date: '20 April 2025',
      author: 'Admin Desa',
      category: 'kegiatan',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      excerpt: 'Desa Digital meraih penghargaan sebagai Desa Inovatif dalam ajang penghargaan desa tingkat nasional.',
      content: 'Desa Digital telah meraih penghargaan sebagai Desa Inovatif dalam ajang penghargaan desa tingkat nasional. Penghargaan ini diberikan atas inovasi dan keberhasilan Desa Digital dalam mengimplementasikan teknologi digital untuk meningkatkan pelayanan publik dan kualitas hidup masyarakat. Penghargaan ini menjadi motivasi bagi Desa Digital untuk terus berinovasi dan menjadi percontohan bagi desa-desa lain.'
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Berita & Informasi</h1>
            <p className="text-xl">
              Dapatkan informasi terbaru tentang kegiatan dan perkembangan di Desa Digital.
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
                placeholder="Cari berita..."
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

      {/* News List Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map(news => (
                <NewsCard key={news.id} news={news} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Tidak ada berita yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Berlangganan Berita Terbaru</h2>
            <p className="text-gray-600 mb-8">
              Dapatkan informasi terbaru tentang kegiatan dan perkembangan di Desa Digital langsung ke email Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300">
                Berlangganan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const NewsCard = ({ news }: { news: any }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 h-full flex flex-col">
    <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow flex flex-col">
      <div className="flex items-center text-sm text-gray-500 mb-2">
        <div className="flex items-center mr-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{news.date}</span>
        </div>
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          <span>{news.author}</span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{news.title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{news.excerpt}</p>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex items-center text-sm">
          <Tag className="h-4 w-4 mr-1 text-green-600" />
          <span className="text-green-600">{getCategoryName(news.category)}</span>
        </div>
        <button className="text-green-600 hover:text-green-700 font-medium">
          Baca Selengkapnya
        </button>
      </div>
    </div>
  </div>
);

function getCategoryName(categoryId: string) {
  const categories: Record<string, string> = {
    'pembangunan': 'Pembangunan',
    'kesehatan': 'Kesehatan',
    'pendidikan': 'Pendidikan',
    'teknologi': 'Teknologi',
    'kegiatan': 'Kegiatan'
  };
  return categories[categoryId] || categoryId;
}

export default News;
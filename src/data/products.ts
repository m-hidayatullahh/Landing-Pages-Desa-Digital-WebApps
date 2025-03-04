export type ProductCategory = 'makanan' | 'minuman' | 'kerajinan' | 'pertanian' | 'lainnya';

export const products = [
  {
    id: 1,
    name: 'Keripik Singkong Balado',
    description: 'Keripik singkong renyah dengan bumbu balado pedas khas Desa Digital.',
    longDescription: 'Keripik singkong balado adalah makanan ringan yang terbuat dari singkong pilihan yang diiris tipis dan digoreng hingga renyah, kemudian diberi bumbu balado pedas khas Desa Digital. Keripik ini dibuat dengan bahan-bahan alami tanpa pengawet dan MSG, sehingga aman dikonsumsi oleh semua kalangan. Cocok untuk camilan saat santai atau sebagai oleh-oleh khas Desa Digital.',
    price: 25000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'makanan',
    stock: 50,
    sold: 120,
    rating: 4.8,
    reviews: 45,
    featured: true,
    weight: '250',
    expiry: '6 bulan',
    certification: 'PIRT, Halal'
  },
  {
    id: 2,
    name: 'Kopi Robusta Desa',
    description: 'Kopi robusta premium hasil panen petani Desa Digital dengan cita rasa khas.',
    price: 45000,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1559525839-d9ac0e78b3af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'minuman',
    stock: 30,
    sold: 85,
    rating: 4.9,
    reviews: 37,
    featured: true,
    weight: '250',
    expiry: '12 bulan',
    certification: 'PIRT'
  },
  {
     id: 3,
  name: 'Anyaman Bambu Tradisional',
  description: 'Kerajinan anyaman bambu tradisional buatan tangan pengrajin Desa Digital.',
  price: 150000,
  discount: 15,
  image: 'https://images.unsplash.com/photo-1606922648249-c3a5a67f1f1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  category: 'kerajinan',
  stock: 15,
  sold: 42,
  rating: 4.7, // Diperbaiki
  reviews: 28,
  featured: false,
  weight: '500',
  expiry: 'Tidak ada',
  certification: 'UMKM'
  },
  {
    id: 4,
    name: 'Beras Organik Premium',
    description: 'Beras organik premium hasil panen petani Desa Digital tanpa pestisida.',
    price: 75000,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'pertanian',
    stock: 100,
    sold: 210,
    rating: 4.6,
    reviews: 52,
    featured: true,
    weight: '5000',
    expiry: '12 bulan',
    certification: 'Organik'
  },
  {
    id: 5,
    name: 'Dodol Durian',
    description: 'Dodol durian lezat dengan rasa manis dan aroma durian yang khas.',
    price: 35000,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'makanan',
    stock: 40,
    sold: 95,
    rating: 4.5,
    reviews: 33,
    featured: false,
    weight: '350',
    expiry: '3 bulan',
    certification: 'PIRT, Halal'
  },
  {
    id: 6,
    name: 'Teh Herbal Jahe',
    description: 'Teh herbal jahe alami yang menyegarkan dan menyehatkan tubuh.',
    price: 30000,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'minuman',
    stock: 60,
    sold: 78,
    rating: 4.7,
    reviews: 25,
    featured: false,
    weight: '200',
    expiry: '12 bulan',
    certification: 'PIRT'
  },
  {
    id: 7,
    name: 'Tas Anyaman Pandan',
    description: 'Tas anyaman pandan buatan tangan dengan motif tradisional.',
    price: 120000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'kerajinan',
    stock: 25,
    sold: 63,
    rating: 4.8,
    reviews: 30,
    featured: false,
    weight: '300',
    expiry: 'Tidak ada',
    certification: 'UMKM'
  },
  {
    id: 8,
    name: 'Madu Hutan Liar',
    description: 'Madu hutan liar murni hasil panen lebah di hutan Desa Digital.',
    price: 85000,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'makanan',
    stock: 35,
    sold: 110,
    rating: 4.9,
    reviews: 48,
    featured: false,
    weight: '500',
    expiry: '24 bulan',
    certification: 'PIRT'
  },
  {
    id: 9,
    name: 'Gula Aren Tradisional',
    description: 'Gula aren tradisional hasil olahan petani Desa Digital.',
    price: 40000,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1581000197348-5a65510f1b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'makanan',
    stock: 70,
    sold: 130,
    rating: 4.6,
    reviews: 40,
    featured: false,
    weight: '500',
    expiry: '12 bulan',
    certification: 'PIRT'
  },
  {
    id: 10,
    name: 'Patung Kayu Jati',
    description: 'Patung kayu jati hasil ukiran tangan seniman Desa Digital.',
    price: 250000,
    discount: 5,
    image: 'https://images.unsplash.com/photo-1580746738099-515a3e458ed1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'kerajinan',
    stock: 10,
    sold: 25,
    rating: 4.8,
    reviews: 15,
    featured: false,
    weight: '1000',
    expiry: 'Tidak ada',
    certification: 'UMKM'
  },
  {
    id: 11,
    name: 'Sirup Rosella',
    description: 'Sirup rosella alami tanpa pengawet dengan rasa asam manis yang menyegarkan.',
    price: 35000,
    discount: 0,
    image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'minuman',
    stock: 45,
    sold: 68,
    rating: 4.5,
    reviews: 22,
    featured: false,
    weight: '500',
    expiry: '6 bulan',
    certification: 'PIRT'
  },
  {
    id: 12,
    name: 'Sayuran Organik Mix',
    description: 'Paket sayuran organik segar hasil panen petani Desa Digital.',
    price: 50000,
    discount: 10,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    category: 'pertanian',
    stock: 20,
    sold: 45,
    rating: 4.7,
    reviews: 18,
    featured: false,
    weight: '2000',
    expiry: '7 hari',
    certification: 'Organik'
  }
];
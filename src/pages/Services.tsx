import React from 'react';
import { FileText, Users, BarChart3, Calendar, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Layanan Desa Digital</h1>
            <p className="text-xl">
              Berbagai layanan digital yang kami sediakan untuk memudahkan masyarakat dalam mengakses informasi dan layanan publik.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<FileText className="h-10 w-10 text-green-600" />}
              title="Administrasi Online"
              description="Urus surat-menyurat dan dokumen penting secara online tanpa perlu datang ke kantor desa."
              features={[
                "Surat Keterangan Domisili",
                "Surat Keterangan Tidak Mampu",
                "Surat Pengantar KTP",
                "Surat Pengantar KK",
                "Surat Keterangan Usaha"
              ]}
            />
            <ServiceCard 
              icon={<Users className="h-10 w-10 text-green-600" />}
              title="Forum Warga"
              description="Wadah diskusi online untuk menyampaikan aspirasi dan bertukar informasi antar warga."
              features={[
                "Diskusi Pembangunan Desa",
                "Laporan Masalah Infrastruktur",
                "Sharing Informasi Penting",
                "Koordinasi Kegiatan Warga",
                "Tanya Jawab dengan Perangkat Desa"
              ]}
            />
            <ServiceCard 
              icon={<BarChart3 className="h-10 w-10 text-green-600" />}
              title="Transparansi Anggaran"
              description="Akses informasi penggunaan anggaran desa secara transparan dan akuntabel."
              features={[
                "Laporan APBDes",
                "Realisasi Penggunaan Dana Desa",
                "Rencana Pembangunan Desa",
                "Laporan Keuangan Bulanan",
                "Monitoring Proyek Pembangunan"
              ]}
            />
            <ServiceCard 
              icon={<Calendar className="h-10 w-10 text-green-600" />}
              title="Agenda Desa"
              description="Informasi kegiatan dan acara desa yang dapat diakses kapan saja dan di mana saja."
              features={[
                "Jadwal Kegiatan Desa",
                "Pengumuman Penting",
                "Undangan Musyawarah Desa",
                "Jadwal Posyandu",
                "Kegiatan Pemberdayaan Masyarakat"
              ]}
            />
            <ServiceCard 
              icon={<Mail className="h-10 w-10 text-green-600" />}
              title="Pengaduan Masyarakat"
              description="Layanan pengaduan masyarakat untuk menyampaikan keluhan dan saran secara online."
              features={[
                "Pengaduan Infrastruktur",
                "Pengaduan Pelayanan Publik",
                "Pengaduan Keamanan",
                "Saran Pembangunan Desa",
                "Tracking Status Pengaduan"
              ]}
            />
            <ServiceCard 
              icon={<Phone className="h-10 w-10 text-green-600" />}
              title="Layanan Darurat"
              description="Akses cepat ke layanan darurat seperti kesehatan, keamanan, dan bencana alam."
              features={[
                "Panggilan Darurat Kesehatan",
                "Laporan Keamanan",
                "Informasi Bencana Alam",
                "Kontak Penting Desa",
                "Panduan Evakuasi"
              ]}
            />
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Cara Menggunakan Layanan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Panduan langkah demi langkah untuk mengakses dan menggunakan layanan digital desa.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <Step 
                number="1"
                title="Registrasi Akun"
                description="Daftar akun di website desa digital atau datang langsung ke kantor desa untuk mendapatkan akun."
              />
              <Step 
                number="2"
                title="Login ke Sistem"
                description="Masuk ke sistem menggunakan username dan password yang telah diberikan."
              />
              <Step 
                number="3"
                title="Pilih Layanan"
                description="Pilih layanan yang ingin digunakan dari menu yang tersedia."
              />
              <Step 
                number="4"
                title="Isi Formulir"
                description="Isi formulir yang diperlukan dengan data yang benar dan lengkap."
              />
              <Step 
                number="5"
                title="Kirim Permintaan"
                description="Kirim permintaan layanan dan tunggu konfirmasi dari petugas desa."
              />
              <Step 
                number="6"
                title="Terima Layanan"
                description="Terima layanan sesuai dengan permintaan yang telah diajukan."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Jam Operasional Kantor Desa</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Senin - Jumat</p>
                      <p className="text-gray-600">08.00 - 16.00 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Sabtu</p>
                      <p className="text-gray-600">08.00 - 12.00 WIB</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-green-600 mr-3" />
                    <div>
                      <p className="font-semibold text-gray-800">Minggu & Hari Libur</p>
                      <p className="text-gray-600">Tutup</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mt-8 mb-4">Kontak Kami</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-green-600 mr-3" />
                    <p className="text-gray-600">+62 123 4567 890</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-green-600 mr-3" />
                    <p className="text-gray-600">info@desadigital.id</p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-green-600 mr-3 mt-1" />
                    <p className="text-gray-600">Jl. Desa Digital No. 123, Kecamatan Maju, Kabupaten Sejahtera, Indonesia</p>
                  </div>
                </div>
              </div>
              <div 
                className="h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  features: string[] 
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="mt-auto">
      <h4 className="font-semibold text-gray-800 mb-2">Fitur:</h4>
      <ul className="text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-600 mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Step = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl">
        {number}
      </div>
    </div>
    <div className="ml-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default Services;
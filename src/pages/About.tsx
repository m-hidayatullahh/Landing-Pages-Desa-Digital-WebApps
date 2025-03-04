import React from 'react';
import { Award, Target, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Desa Digital</h1>
            <p className="text-xl">
              Mengenal lebih dekat desa kami yang telah bertransformasi menjadi desa digital untuk meningkatkan kualitas hidup masyarakat.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Sejarah Desa</h2>
              <p className="text-gray-600 mb-4">
                Desa Digital didirikan pada tahun 1945 dan awalnya merupakan desa agraris yang mengandalkan pertanian sebagai sumber mata pencaharian utama. Dengan luas wilayah sekitar 500 hektar, desa ini dihuni oleh sekitar 1.250 jiwa yang terbagi dalam 350 kepala keluarga.
              </p>
              <p className="text-gray-600 mb-4">
                Pada tahun 2020, desa ini mulai bertransformasi menjadi desa digital melalui program pemerintah untuk digitalisasi desa. Program ini bertujuan untuk meningkatkan pelayanan publik, transparansi, dan partisipasi masyarakat dalam pembangunan desa.
              </p>
              <p className="text-gray-600">
                Saat ini, Desa Digital telah menjadi percontohan bagi desa-desa lain dalam implementasi teknologi digital untuk pembangunan desa yang berkelanjutan.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Sejarah Desa" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk membangun desa yang maju, sejahtera, dan berkelanjutan melalui pemanfaatan teknologi digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
              </div>
              <p className="text-gray-600">
                Menjadi desa digital percontohan yang maju, mandiri, dan sejahtera melalui pemanfaatan teknologi digital untuk pembangunan desa yang berkelanjutan.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Meningkatkan kualitas pelayanan publik melalui digitalisasi layanan administrasi desa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Mengembangkan infrastruktur digital yang memadai untuk mendukung aktivitas masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Meningkatkan kapasitas dan keterampilan digital masyarakat desa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Mendorong partisipasi aktif masyarakat dalam pembangunan desa melalui platform digital</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span>Mewujudkan tata kelola desa yang transparan dan akuntabel</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Struktur Pemerintahan Desa</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kenali para pemimpin dan penggerak di balik transformasi digital desa kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamCard 
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Budi Santoso"
              position="Kepala Desa"
            />
            <TeamCard 
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Siti Rahayu"
              position="Sekretaris Desa"
            />
            <TeamCard 
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Ahmad Hidayat"
              position="Kepala Urusan Keuangan"
            />
            <TeamCard 
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              name="Dewi Lestari"
              position="Kepala Urusan Digital"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai yang menjadi pedoman kami dalam membangun desa digital yang maju dan sejahtera.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Users className="h-10 w-10 text-green-600" />}
              title="Gotong Royong"
              description="Kami menjunjung tinggi semangat gotong royong dan kerja sama dalam membangun desa."
            />
            <ValueCard 
              icon={<Zap className="h-10 w-10 text-green-600" />}
              title="Inovasi"
              description="Kami terus berinovasi untuk menemukan solusi terbaik bagi permasalahan di desa."
            />
            <ValueCard 
              icon={<Award className="h-10 w-10 text-green-600" />}
              title="Integritas"
              description="Kami berkomitmen untuk menjalankan pemerintahan desa dengan jujur dan transparan."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const TeamCard = ({ image, name, position }: { image: string; name: string; position: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 text-center">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{name}</h3>
      <p className="text-green-600">{position}</p>
    </div>
  </div>
);

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
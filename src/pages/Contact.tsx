import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.'
    });

    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-xl">
              Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Informasi Kontak</h2>
              <p className="text-gray-600 mb-8">
                Kami siap membantu Anda. Silakan hubungi kami melalui informasi kontak di bawah ini atau isi formulir kontak.
              </p>

              <div className="space-y-6">
                <ContactItem 
                  icon={<MapPin className="h-6 w-6 text-green-600" />}
                  title="Alamat"
                  content="Jl. Desa Digital No. 123, Kecamatan Maju, Kabupaten Sejahtera, Indonesia"
                />
                <ContactItem 
                  icon={<Phone className="h-6 w-6 text-green-600" />}
                  title="Telepon"
                  content="+62 123 4567 890"
                />
                <ContactItem 
                  icon={<Mail className="h-6 w-6 text-green-600" />}
                  title="Email"
                  content="info@desadigital.id"
                />
                <ContactItem 
                  icon={<Clock className="h-6 w-6 text-green-600" />}
                  title="Jam Operasional"
                  content="Senin - Jumat: 08.00 - 16.00 WIB, Sabtu: 08.00 - 12.00 WIB"
                />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Lokasi Kami</h3>
                <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                  {/* Placeholder for map */}
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <p className="text-gray-500">Peta Lokasi Desa Digital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
              <p className="text-gray-600 mb-8">
                Silakan isi formulir di bawah ini untuk mengirim pesan kepada kami. Kami akan segera menghubungi Anda.
              </p>

              {formStatus && (
                <div className={`p-4 mb-6 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subjek
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Pilih Subjek</option>
                    <option value="Layanan Administrasi">Layanan Administrasi</option>
                    <option value="Pengaduan">Pengaduan</option>
                    <option value="Saran">Saran</option>
                    <option value="Informasi">Informasi</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition duration-300 flex items-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berikut adalah beberapa pertanyaan yang sering diajukan oleh masyarakat. Jika Anda tidak menemukan jawaban atas pertanyaan Anda, silakan hubungi kami.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <FAQItem 
                question="Bagaimana cara mendaftar untuk layanan administrasi online?"
                answer="Untuk mendaftar layanan administrasi online, Anda perlu datang ke kantor desa dengan membawa KTP untuk verifikasi identitas. Setelah itu, Anda akan diberikan akun untuk mengakses layanan administrasi online."
              />
              <FAQItem 
                question="Berapa lama proses pengurusan surat melalui layanan online?"
                answer="Proses pengurusan surat melalui layanan online biasanya membutuhkan waktu 1-3 hari kerja, tergantung jenis surat yang diajukan. Anda akan mendapatkan notifikasi melalui email atau SMS ketika surat Anda siap diambil."
              />
              <FAQItem 
                question="Apakah layanan digital desa dapat diakses 24 jam?"
                answer="Ya, layanan digital desa dapat diakses 24 jam melalui website atau aplikasi mobile. Namun, untuk verifikasi dan pengesahan dokumen tetap mengikuti jam operasional kantor desa."
              />
              <FAQItem 
                question="Bagaimana cara melaporkan masalah infrastruktur di desa?"
                answer="Anda dapat melaporkan masalah infrastruktur melalui fitur Pengaduan Masyarakat di website atau aplikasi desa digital. Lampirkan foto dan lokasi untuk mempermudah penanganan."
              />
              <FAQItem 
                question="Apakah ada biaya untuk menggunakan layanan digital desa?"
                answer="Tidak, semua layanan digital desa dapat diakses secara gratis oleh masyarakat desa. Namun, untuk pengurusan dokumen tertentu mungkin dikenakan biaya administrasi sesuai dengan peraturan yang berlaku."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div className="ml-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-gray-800">{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`px-6 py-4 bg-gray-50 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        {answer}
      </div>
    </div>
  );
};

export default Contact;
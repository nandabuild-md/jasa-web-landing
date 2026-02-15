'use client';

import { motion } from 'framer-motion';
import { MessageCircle, MapPin, Star, Clock, Shield, Award } from 'lucide-react';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';
import { JASA_SERVIS_IMAGES } from '@/constants/imageUrls';

const JasaServisTemplate = () => {
  const services = [
    { name: 'Service AC', price: 'Rp 150rb - 500rb', icon: '❄️', image: JASA_SERVIS_IMAGES.acService },
    { name: 'Instalasi Listrik', price: 'Rp 200rb - 1jt', icon: '⚡', image: JASA_SERVIS_IMAGES.electricService },
    { name: 'Perbaikan Kulkas', price: 'Rp 100rb - 400rb', icon: '🧊', image: JASA_SERVIS_IMAGES.acService },
    { name: 'Service Mesin Cuci', price: 'Rp 150rb - 600rb', icon: '🌊', image: JASA_SERVIS_IMAGES.toolBox },
  ];

  const portfolios = [
    { name: 'Hotel Mewah - AC Central', image: JASA_SERVIS_IMAGES.officeService, desc: 'Perawatan sistem AC terpusat' },
    { name: 'Kantor Corporate - Full Service', image: JASA_SERVIS_IMAGES.workshop, desc: 'Maintenance rutin seluruh unit' },
    { name: 'Rumah Sakit - Elektrik Medis', image: JASA_SERVIS_IMAGES.buildingWork, desc: 'Instalasi standar kesehatan' },
  ];

  const reviews = [
    { name: 'Budi Santoso', rating: 5, text: 'Sangat cepat dan profesional. Teknisinya ramah dan terpercaya.' },
    { name: 'Ibu Retno', rating: 5, text: 'Harga transparan, tidak ada biaya tersembunyi. Puas!' },
    { name: 'Pak Joko', rating: 5, text: 'Service berkala AC rumah saya jadi lebih awet. Recommend!' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-blue-600">🔧 Jasa Servis</h1>
            <div className="flex gap-4">
              <Link href="/template" className="text-sm text-gray-600 hover:text-blue-600">
                ← Kembali
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero with Background */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 mt-8 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyImage
            src={JASA_SERVIS_IMAGES.acTechnician}
            alt="Teknisi Profesional"
            className="w-full h-96 opacity-10"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-600 mb-6">
            🔧 Ahli Jasa Servis Terpercaya
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Servis AC, Listrik & Elektronik
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Cepat & Profesional
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Layanan servis panggilan untuk rumah dan bisnis Anda. Teknisi berpengalaman, harga transparan, garansi kepuasan.
          </p>
          <motion.a
            href="https://wa.me/62812345678?text=Halo%2C%20saya%20butuh%20jasa%20servis%20%3F"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle size={20} />
            Hubungi Sekarang
          </motion.a>
        </motion.div>
      </section>

      {/* Hero Image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <LazyImage
              src={JASA_SERVIS_IMAGES.acTechnician}
              alt="Teknisi Profesional Bekerja"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Layanan Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden border-2 border-blue-200 hover:border-purple-300 transition-colors shadow-lg hover:shadow-xl"
              >
                {/* Image */}
                <div className="h-48 relative">
                  <LazyImage
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full"
                  />
                </div>
                {/* Content */}
                <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-lg font-semibold text-blue-600">{service.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Mengapa Pilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: 'Cepat Tanggap', desc: 'Respons dalam 1-2 jam' },
              { icon: Shield, title: 'Terpercaya', desc: 'Garansi hasil kerja' },
              { icon: Award, title: 'Profesional', desc: 'Teknisi bersertifikat' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 text-center bg-white rounded-2xl border border-blue-200"
                >
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Proyek Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolios.map((portfolio, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden border border-blue-200 bg-white shadow-lg hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="h-48 relative">
                  <LazyImage
                    src={portfolio.image}
                    alt={portfolio.name}
                    className="w-full h-full"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{portfolio.name}</h3>
                  <p className="text-gray-600">{portfolio.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Testimoni Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl border border-blue-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-gray-900">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Butuh Servis Sekarang?</h2>
          <p className="text-xl mb-8 text-white/90">Chat kami melalui WhatsApp untuk konsultasi gratis dan penawaran khusus.</p>
          <motion.a
            href="https://wa.me/62812345678?text=Halo%2C%20saya%20butuh%20jasa%20servis%20%3F"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transition-shadow"
          >
            <MessageCircle size={20} />
            Chat WhatsApp
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default JasaServisTemplate;

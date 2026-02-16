'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Star, MapPin, Users, Award } from 'lucide-react';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';
import { TRAVEL_UMROH_IMAGES } from '@/constants/imageUrls';

const TravelUmrohTemplate = () => {
  const packages = [
    {
      name: '10 Hari Plus Ziarah',
      price: '45 Juta',
      highlight: true,
      features: [
        'Hotel bintang 3 Madinah & Mekah',
        'Umroh + Ziarah Badr & Uhud',
        'Makan 2x sehari',
        'Guide berpengalaman',
        'Asuransi perjalanan',
      ],
    },
    {
      name: '7 Hari Standard',
      price: '32 Juta',
      features: [
        'Hotel bintang 2-3',
        'Umroh saja (non-ziarah)',
        'Makan 2x sehari',
        'Guide profesional',
        'Asuransi dasar',
      ],
    },
    {
      name: '14 Hari Eksklusif',
      price: '65 Juta',
      features: [
        'Hotel bintang 4',
        'Umroh + Ziarah lengkap',
        'Makan full day 3x',
        'Tour ke Madinah',
        'Asuransi premium',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Ibu Fatimah',
      city: 'Surabaya',
      text: 'Perjalanan umroh pertama saya sangat berkesan. Guide sangat sabar dan profesional!',
      image: TRAVEL_UMROH_IMAGES.womenGroup,
    },
    {
      name: 'Pak Muhammad',
      city: 'Jakarta',
      text: 'Pelayanan travel ini excellent. Dari awal konsultasi sampai pulang sangat terhandle dengan baik.',
      image: TRAVEL_UMROH_IMAGES.pilgrimGroup,
    },
    {
      name: 'Mbak Aisha',
      city: 'Bandung',
      text: 'Harga terjangkau tapi pelayanannya premium. Semua kebutuhan sudah terpenuhi dengan sempurna.',
      image: TRAVEL_UMROH_IMAGES.familyGroup,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-emerald-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-emerald-600">✨ Travel Umroh Barokah</h1>
            <Link href="/template" className="text-sm text-gray-600 hover:text-emerald-600">
              ← Kembali
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero with Background Image */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 mt-8 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <LazyImage
            src={TRAVEL_UMROH_IMAGES.kaabah}
            alt="Kaabah Mekah"
            className="w-full h-96 opacity-20"
            priority
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-sm font-semibold text-emerald-600 mb-6">
            🌙 Wujudkan Impian Spiritual Anda
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Umroh Berkualitas
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">
              Harga Terjangkau
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Paket umroh terlengkap dengan hotel nyaman, guide profesional, dan harga kompetitif. Ribuan jemaah telah merasakan pengalaman spiritual bersama kami.
          </p>
          <motion.a
            href="https://wa.me/62812345678?text=Halo%2C%20saya%20tertarik%20paket%20umroh%20%3F"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle size={20} />
            Konsultasi Gratis
          </motion.a>
        </motion.div>
      </section>

      {/* Hero Image Banner */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <LazyImage
              src={TRAVEL_UMROH_IMAGES.medina}
              alt="Masjid Nabawi Madinah"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Paket Umroh Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -20 }}
                className={`relative rounded-3xl p-8 border-2 transition-all ${
                  pkg.highlight
                    ? 'bg-gradient-to-br from-emerald-500 to-cyan-600 text-white border-transparent shadow-2xl'
                    : 'bg-white border-emerald-200 hover:border-emerald-400'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-4 right-6 px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                    ⭐ PALING POPULER
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${
                  pkg.highlight ? 'text-white' : 'text-gray-900'
                }`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-bold mb-8 ${
                  pkg.highlight ? 'text-white' : 'text-emerald-600'
                }`}>
                  {pkg.price}
                </div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className={`flex gap-3 items-start ${
                      pkg.highlight ? 'text-white/90' : 'text-gray-700'
                    }`}>
                      <span className={`text-xl ${
                        pkg.highlight ? 'text-yellow-300' : 'text-emerald-500'
                      }`}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    pkg.highlight
                      ? 'bg-white text-emerald-600 hover:shadow-lg'
                      : 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white hover:shadow-lg'
                  }`}
                >
                  Pilih Paket
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Hotel & Akomodasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Hotel Mekah Bintang 3', img: TRAVEL_UMROH_IMAGES.hotelMekah1 },
              { name: 'Hotel Madinah Bintang 3', img: TRAVEL_UMROH_IMAGES.hotelMedina },
              { name: 'Hotel Eksklusif Bintang 4', img: TRAVEL_UMROH_IMAGES.hotelMekah2 },
            ].map((hotel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-emerald-200"
              >
                <div className="h-48 relative">
                  <LazyImage
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-full"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-gray-900">{hotel.name}</h3>
                  <p className="text-emerald-600 font-semibold">Nyaman & Terjangkau</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Itinerary Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Itinerary Singkat</h2>
          <div className="space-y-4">
            {[
              { day: 'Hari 1-2', title: 'Pemberangkatan & Tiba di Madinah', desc: 'Perjalanan dari Indonesia dan beristirahat di hotel' },
              { day: 'Hari 3-5', title: 'Madinah: Ziarah Bersejarah', desc: 'Masjid Nabawi, makam Baqi, dan tempat bersejarah lainnya' },
              { day: 'Hari 6-9', title: 'Mekah: Umroh Penuh', desc: 'Tawaf, Sa\'i, dan ibadah di Masjidilharam' },
              { day: 'Hari 10', title: 'Pulang ke Tanah Air', desc: 'Penerbangan pulang membawa berkah dan kenangan indah' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 bg-white rounded-2xl border border-emerald-200 hover:border-emerald-400 transition-colors"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-sm text-center">
                  {item.day}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Mengapa Pilih Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: 'Berpengalaman 15+ Tahun', desc: 'Telah membimbing ribuan jemaah dengan aman' },
              { icon: Users, title: 'Guide Bersertifikat', desc: 'Tim guide profesional dan berpengalaman' },
              { icon: MapPin, title: 'Hotel Pilihan', desc: 'Kerjasama dengan hotel terbaik di Mekah & Madinah' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 text-center bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl border border-emerald-200"
                >
                  <Icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials with Images */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Testimoni Jemaah</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden shadow-lg border border-emerald-200 bg-white"
              >
                {/* Image */}
                <div className="h-48 relative">
                  <LazyImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full"
                  />
                </div>
                {/* Content */}
                <div className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-cyan-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Siap Menunaikan Umroh?</h2>
          <p className="text-xl mb-8 text-white/90">Hubungi kami untuk konsultasi gratis dan dapatkan bonus eksklusif untuk pendaftaran bulan ini.</p>
          <motion.a
            href="https://wa.me/62812345678?text=Halo%2C%20saya%20tertarik%20paket%20umroh%20%3F"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:shadow-xl transition-shadow"
          >
            <MessageCircle size={20} />
            Hubungi Sekarang
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default TravelUmrohTemplate;

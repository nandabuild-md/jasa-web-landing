'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Star, Shield, Users, Award, Clock, ThumbsUp, CheckCircle, MapPin, Phone, Mail, Send } from 'lucide-react';
import Link from 'next/link';
import LazyImage from '@/components/LazyImage';
import { TRAVEL_UMROH_IMAGES } from '@/constants/imageUrls';
import { useState } from 'react';

const HajiKhususTemplate = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Halo, saya ${formData.name} dari ${formData.city}. ${formData.message}. HP: ${formData.phone}`;
    window.open(`https://wa.me/62812345678?text=${encodeURIComponent(waMessage)}`, '_blank');
  };

  const trustBadges = [
    {
      icon: Shield,
      title: 'Resmi & Terakreditasi Kemenag',
      desc: 'Terdaftar resmi dengan izin penyelenggara haji khusus'
    },
    {
      icon: Award,
      title: 'Jaminan 100% Pasti Berangkat',
      desc: 'Kami menjamin keberangkatan sesuai jadwal yang ditentukan'
    },
    {
      icon: Users,
      title: 'Berpengalaman Sejak Tahun 1995',
      desc: 'Lebih dari 28 tahun melayani ribuan jemaah dengan profesional'
    },
    {
      icon: ThumbsUp,
      title: 'Pembimbing Sesuai Sunnah & Bermushabah',
      desc: 'Bimbingan lengkap sesuai syariat dan sunnah Rasulullah SAW'
    },
    {
      icon: CheckCircle,
      title: 'Didukung oleh Saudi Tourism Authority',
      desc: 'Bekerjasama dengan pihak resmi Arab Saudi untuk kenyamanan jemaah'
    },
    {
      icon: Clock,
      title: 'Telah Dipercaya Lebih dari 25 Ribu Jamaah',
      desc: 'Ribuan jemaah telah merasakan pelayanan terbaik kami'
    }
  ];

  const packages = [
    {
      title: 'HAJI KHUSUS DP MULAI',
      price: '2,5 JT',
      badge: 'PROMO 2026',
      features: [
        'Resmi Pemerintah Khusus untuk 100 orang',
        'Pendaftar pertama dapatkan diskon ekstra',
        'DP ringan cicilan tersedia',
        'Hotel bintang 4 dekat Masjidil Haram'
      ],
      color: 'from-red-600 to-red-700',
      highlighted: true
    },
    {
      title: 'HAJI KHUSUS RESMI PEMERINTAH',
      price: '$12.500',
      badge: 'BEST SELLER',
      features: [
        'Kuota terbatas hanya 24 jamaah',
        'Keberangkatan 6-8 Syawal',
        'Hotel premium 100m dari Masjidil Haram',
        'Bimbingan eksklusif & private'
      ],
      color: 'from-emerald-600 to-emerald-700',
      highlighted: true
    }
  ];

  const promoCards = [
    { image: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&h=800&fit=crop', title: 'Promo DP 2.5 JT' },
    { image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop', title: 'Paket $12.500' },
    { image: 'https://images.unsplash.com/photo-1564769610856-92f95073e822?w=600&h=800&fit=crop', title: 'Syarat & Ketentuan' },
    { image: 'https://images.unsplash.com/photo-1591604129542-180f8f3267c3?w=600&h=800&fit=crop', title: 'Itinerary Detail' },
    { image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?w=600&h=800&fit=crop', title: 'Yuk Buruan Daftar!' }
  ];

  const offices = [
    {
      city: 'Jakarta',
      address: 'Jl. Gatot Subroto No.6A, RT.6/RW.2, Jatibaru, Kec. Tanah Abang, Jakarta Pusat',
      phone: '021-23567888'
    },
    {
      city: 'Bandung',
      address: 'Jl. Kepatihan No.37A, Braga, Kec. Sumur Bandung, Kota Bandung, Jawa Barat',
      phone: '022-4206623'
    },
    {
      city: 'Lampung',
      address: 'Jl. Cut Mutia no 30 Kelurahan Gusti Golik Ratu, Banjarsari, Labuhan Ratu, Kota Bandar Lampung',
      phone: '+62 821-6665-3833'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🕌</span>
              </div>
              <h1 className="text-2xl font-bold text-emerald-700">Rabbanitour</h1>
            </div>
            <div className="flex gap-6 items-center">
              <Link href="/template" className="text-sm text-gray-600 hover:text-emerald-600">
                ← Kembali
              </Link>
              <motion.a
                href="#konsultasi"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg font-semibold text-sm shadow-lg"
              >
                Konsultasi Gratis
              </motion.a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full mb-6">
                <span className="text-yellow-600 font-bold text-sm">⭐ Program Haji Khusus</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Promo Terbatas Yuk Buruan Daftar
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
                  Haji Khusus, Resmi Pemerintah
                </span>
                <br />
                <span className="text-emerald-700">bersama Rabbanitour</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Ratusan kemudahan dan keleluasaan beribahadh dengan layanan Haji Khusus terbaik Kami.
              </p>
              <motion.a
                href="#konsultasi"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <MessageCircle size={24} />
                Konsultasi Gratis
              </motion.a>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Badge Terpercaya */}
              <div className="absolute -top-4 -right-4 z-10 bg-white rounded-2xl shadow-2xl p-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm font-bold text-gray-900 mt-1">Terpercaya</p>
                <p className="text-xs text-gray-600">25,000+ Jemaah</p>
              </div>

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <LazyImage
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
                  alt="Masjidil Haram"
                  className="w-full h-[500px]"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl shadow-2xl p-6">
                <p className="text-sm font-semibold">Resmi Kemenag</p>
                <p className="text-3xl font-bold">28+ Tahun</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Alasan kenapa harus memilih Rabbanitour
            </h2>
            <p className="text-lg text-gray-600">
              Yaaahhhh pengalaman adalah senjata yang akan kami layanan terbaik Rabbanitour
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 border-2 border-emerald-100 hover:border-emerald-300 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{badge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{badge.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section - Dark Green */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-800 to-emerald-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Haji Khusus DP Mulai 2,5 JT, Resmi Pemerintah khusus untuk 100 orang pendaftar pertama.
            </h2>
            <p className="text-xl text-emerald-100">
              Ratusan kemudahan dan keleluasaan beribahadh dengan layanan Haji Khusus terbaik Kami.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {packages.map((pkg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${pkg.color} rounded-3xl p-8 shadow-2xl border-4 border-white/20 h-full`}>
                  {/* Badge */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-yellow-400 rounded-full shadow-lg">
                    <p className="text-sm font-bold text-gray-900">{pkg.badge}</p>
                  </div>

                  <div className="text-center mt-8 mb-6">
                    <p className="text-white/90 text-lg mb-2">{pkg.title}</p>
                    <p className="text-6xl font-extrabold text-white mb-2">{pkg.price}</p>
                    <p className="text-white/80 text-sm">MULAI DARI / ORANG</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-white">
                        <CheckCircle className="w-6 h-6 flex-shrink-0 text-yellow-300" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-4 bg-white text-emerald-700 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Daftar Sekarang
                  </motion.button>

                  {/* Rating */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                      ))}
                    </div>
                    <span className="text-white/90 text-sm">4.9/5 dari 2,500+ review</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="#konsultasi"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-700 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all"
            >
              <MessageCircle size={28} />
              Konsultasi Sekarang
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Detail Paket Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Detail Paket Haji Khusus Rabbanitour
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {promoCards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200 hover:border-emerald-400 transition-all cursor-pointer bg-white"
              >
                <div className="aspect-[3/4] relative">
                  <LazyImage
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-bold text-sm">{card.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="konsultasi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <LazyImage
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
                alt="Jamaah Haji"
                className="w-full h-[500px]"
              />
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Rencanakan perjalanan ibadah haji Anda bersama Rabbanitour.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Isi data diri Anda pada form dibawah dan Tim dari Kami akan segera menghubungi Anda secepatnya untuk konsultasi lebih lanjut.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor HP/Whatsapp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="08xxx"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <select
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Pilih Kota</option>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Surabaya">Surabaya</option>
                    <option value="Medan">Medan</option>
                    <option value="Lampung">Lampung</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Whatsapp *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                >
                  <Send size={20} />
                  Konsultasi Sekarang
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer - Multi Office */}
      <footer className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🕌</span>
                </div>
                <h3 className="text-2xl font-bold">Rabbanitour</h3>
              </div>
              <p className="text-emerald-200 mb-6">
                Jangan lewatkan informasi layanan dari Rabbanitour tentang haji & umroh terkini.
              </p>
              <div className="flex gap-3">
                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-emerald-800 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors"
                  >
                    <span className="text-xl">📱</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Info Layanan */}
            <div>
              <h4 className="text-xl font-bold mb-4">Info Layanan</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Haji Khusus</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Syarat Umroh & Haji</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Wakaf Quran</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Online and Offline</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Syarat & Ketentuan</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Visa & Paspor</a></li>
                <li><a href="#" className="text-emerald-200 hover:text-white transition-colors">Wisata Halal</a></li>
              </ul>
            </div>

            {/* Kantor Jakarta */}
            <div>
              <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                <MapPin size={20} />
                Kantor Jakarta
              </h4>
              <p className="text-emerald-200 mb-4 leading-relaxed">
                {offices[0].address}
              </p>
              <p className="text-emerald-200 flex items-center gap-2">
                <Phone size={16} />
                {offices[0].phone}
              </p>
            </div>

            {/* Mitra Cabang */}
            <div>
              <h4 className="text-xl font-bold mb-4">Mitra Cabang</h4>
              <div className="space-y-6">
                {offices.slice(1).map((office, idx) => (
                  <div key={idx}>
                    <p className="font-bold text-yellow-400 mb-2">Kantor {office.city}</p>
                    <p className="text-emerald-200 text-sm mb-2">{office.address}</p>
                    <p className="text-emerald-200 text-sm flex items-center gap-2">
                      <Phone size={14} />
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-emerald-800 pt-8 text-center">
            <p className="text-emerald-300">
              Copyright © 2026 - Rabbanitour Travel
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HajiKhususTemplate;

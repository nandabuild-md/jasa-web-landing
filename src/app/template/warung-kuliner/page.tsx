'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Star, Clock, TrendingUp, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';

const WarungKulinerTemplate = () => {
  const menu = [
    { name: 'Nasi Kuning Khas', price: '15rb', icon: '🍛', bestseller: true },
    { name: 'Ayam Bakar Madu', price: '25rb', icon: '🍗' },
    { name: 'Soto Ayam', price: '12rb', icon: '🍲', bestseller: true },
    { name: 'Perkedel Goreng', price: '8rb', icon: '🥔' },
    { name: 'Es Cendol', price: '7rb', icon: '🍵' },
    { name: 'Teh Hangat', price: '5rb', icon: '🫖' },
  ];

  const reviews = [
    { name: 'Tika', rating: 5, text: 'Nasi kuningnya enak! Porsi besar, harga terjangkau.' },
    { name: 'Riza', rating: 5, text: 'Ayam bakarnya juicy dan empuk. Paling enak di sini!' },
    { name: 'Adi', rating: 5, text: 'Pelayanan cepat, makanannya selalu fresh. Favorit saya!' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-orange-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-orange-600">🍜 Warung Mak Ijah</h1>
            <Link href="/template" className="text-sm text-gray-600 hover:text-orange-600">
              ← Kembali
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 rounded-full text-sm font-semibold text-orange-600 mb-6">
            🍲 Masakan Rumahan Nikmat
          </span>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Warung Makan Sejak 2015
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Cita Rasa Otentik
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Menyajikan masakan rumahan lezat dengan bahan pilihan berkualitas. Buka setiap hari jam 10 pagi sampai 9 malam.
          </p>
          <motion.a
            href="https://wa.me/62812345678?text=Halo%2C%20saya%20mau%20pesan%21"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle size={20} />
            Pesan Sekarang
          </motion.a>
        </motion.div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Menu Favorit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-2xl border-2 border-orange-200 hover:border-orange-400 transition-colors relative"
              >
                {item.bestseller && (
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    ⭐ Bestseller
                  </div>
                )}
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-2xl font-bold text-orange-600">{item.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Mengapa Kami?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: UtensilsCrossed, title: 'Masakan Segar', desc: 'Dibuat fresh setiap hari' },
              { icon: TrendingUp, title: 'Harga Terjangkau', desc: 'Porsi besar, hemat kantong' },
              { icon: Clock, title: 'Buka Setiap Hari', desc: '10 pagi - 9 malam' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 text-center bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl border border-orange-200"
                >
                  <Icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Galeri Makanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['🍛', '🍗', '🍲', '🥔', '🍵', '🫖'].map((emoji, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="h-48 rounded-2xl bg-gradient-to-br from-orange-300 to-red-400 flex items-center justify-center text-7xl cursor-pointer"
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Review Pelanggan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl border border-orange-200"
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

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">Jangan Lewatkan!</h2>
          <p className="text-xl mb-8 text-white/90">Pesan makanan favorit Anda sekarang juga melalui WhatsApp.</p>
          <motion.a
            href="https://wa.me/62812345678?text=Halo%2C%20saya%20mau%20pesan%21"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold hover:shadow-xl transition-shadow"
          >
            <MessageCircle size={20} />
            Pesan di WhatsApp
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default WarungKulinerTemplate;

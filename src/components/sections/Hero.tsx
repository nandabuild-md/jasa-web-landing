'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Eye } from 'lucide-react';

const Hero = () => {
  const whatsappURL = 'https://wa.me/62812345678?text=Halo%2C%20saya%20mau%20tanya%20jasa%20web%20UMKM';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pastel-pink rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pastel-purple rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
      <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pastel-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-block px-4 py-2 bg-soft-purple rounded-full text-sm font-semibold text-gray-700 mb-6">
            ✨ Dari Surabaya, Untuk Usaha Anda
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Jasa Pembuatan Website<br />
          <span className="bg-gradient-to-r from-pastel-purple via-pastel-pink to-pastel-blue bg-clip-text text-transparent">
            Sederhana untuk UMKM
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Website berkualitas untuk warung, jasa servis, dan kursus rumahan yang butuh web cepat dan gampang dipakai.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-pastel-pink mb-8"
        >
          Mulai dari Rp 100.000
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-pastel-pink to-pastel-purple text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle size={20} />
            Chat WhatsApp Sekarang
          </motion.a>
          <motion.a
            href="#templates"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-pastel-purple text-pastel-purple rounded-xl font-semibold hover:bg-soft-purple transition-colors"
          >
            <Eye size={20} />
            Lihat Template
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

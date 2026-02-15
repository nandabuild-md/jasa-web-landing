'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Wrench, BookOpen } from 'lucide-react';

const TargetAudience = () => {
  const audiences = [
    {
      icon: ShoppingCart,
      title: 'Warung/Kuliner Rumahan',
      description: 'Tampilkan menu dan kontak Anda dengan profesional',
    },
    {
      icon: Wrench,
      title: 'Jasa Servis',
      description: 'AC, listrik, bengkel panggilan, dan layanan lainnya',
    },
    {
      icon: BookOpen,
      title: 'Kelas & Kursus',
      description: 'Mengaji, privat, bimbel, dan program pembelajaran',
    },
  ];

  return (
    <section id="target" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Untuk Siapa Layanan Ini?
          </h2>
          <p className="text-lg text-gray-600">Solusi website untuk berbagai jenis usaha lokal</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 bg-white rounded-2xl shadow-lg border border-pastel-purple/20 hover:shadow-2xl transition-shadow"
              >
                <motion.div
                  className="w-16 h-16 bg-soft-purple rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-pastel-purple" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;

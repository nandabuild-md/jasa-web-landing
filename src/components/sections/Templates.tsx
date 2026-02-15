'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Templates = () => {
  const templates = [
    {
      name: 'Template Warung/Kuliner',
      description: 'Tampilkan menu makanan dengan foto dan harga',
      features: ['Menu list', 'Galeri foto', 'Kontak WA'],
      color: 'from-pastel-pink to-pastel-peach',
    },
    {
      name: 'Template Jasa Servis',
      description: 'Showcase layanan dengan detil dan portfolio',
      features: ['Daftar layanan', 'Portfolio', 'Review klien'],
      color: 'from-pastel-purple to-pastel-blue',
    },
    {
      name: 'Template Kelas/Kursus',
      description: 'Informasi kelas, jadwal, dan pendaftaran siswa',
      features: ['Jadwal kelas', 'Paket kursus', 'Daftar online'],
      color: 'from-pastel-blue to-pastel-green',
    },
  ];

  return (
    <section id="templates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Pilih Template Anda</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pilih template yang paling dekat dengan jenis usaha Anda. Setiap template dapat disesuaikan dengan brand dan kebutuhan spesifik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -15, boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-pastel-purple/10"
            >
              {/* Placeholder Image Area */}
              <div className={`h-64 bg-gradient-to-br ${template.color} flex items-center justify-center`}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white text-center"
                >
                  <div className="text-6xl mb-2">📱</div>
                  <p className="text-white/80">Preview Template</p>
                </motion.div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-6">{template.description}</p>

                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-500 mb-3">Fitur Utama:</p>
                  <ul className="space-y-2">
                    {template.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-pastel-purple">•</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 bg-gradient-to-r from-pastel-purple to-pastel-pink text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
                >
                  <ExternalLink size={18} />
                  Lihat Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;

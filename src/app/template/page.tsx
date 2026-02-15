'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TemplatesHub = () => {
  const templates = [
    {
      id: 'jasa-servis',
      name: 'Jasa Servis',
      description: 'Showcase layanan dengan portfolio dan review klien. Cocok untuk AC, listrik, bengkel panggilan.',
      icon: '🔧',
      color: 'from-blue-400 to-purple-500',
      features: ['Daftar Layanan', 'Portfolio', 'Review Klien', 'Area Jangkauan', 'Chat WhatsApp'],
    },
    {
      id: 'warung-kuliner',
      name: 'Warung/Kuliner',
      description: 'Tampilkan menu dengan foto dan harga. Sempurna untuk warung rumahan dan bisnis F&B.',
      icon: '🍜',
      color: 'from-orange-400 to-pink-500',
      features: ['Menu Digital', 'Galeri Foto', 'Harga Jelas', 'Review Makanan', 'Pesan Online'],
    },
    {
      id: 'travel-umroh',
      name: 'Travel Umroh ✨ BARU',
      description: 'Paket umroh terlengkap dengan itinerary, foto keberangkatan, testimonial jemaah. Niche marketing powerhouse!',
      icon: '✈️',
      color: 'from-emerald-400 to-cyan-500',
      features: ['Paket Umroh', 'Itinerary Lengkap', 'Gallery Keberangkatan', 'Testimoni Jemaah', 'Booking Form'],
      badge: 'Niche Terbaru',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-cream via-white to-soft-pink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-pastel-purple/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">
              Jasa Web
            </Link>
            <Link href="/" className="text-sm font-semibold text-pastel-purple hover:text-pastel-pink transition-colors">
              ← Kembali ke Landing
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Pilih Template <span className="bg-gradient-to-r from-pastel-purple to-pastel-pink bg-clip-text text-transparent">Anda</span>
          </h1>
          <p className="text-xl text-gray-600">Setiap template dirancang khusus untuk jenis bisnis Anda dengan fitur-fitur yang relevan.</p>
        </motion.div>
      </section>

      {/* Templates Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template, idx) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative group"
              >
                {template.badge && (
                  <div className="absolute -top-4 right-4 z-10">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-400 to-cyan-500 text-white text-xs font-bold rounded-full">
                      {template.badge}
                    </span>
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -20, boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}
                  className="h-full bg-white rounded-3xl overflow-hidden border-2 border-pastel-purple/10 hover:border-pastel-purple/50 transition-all"
                >
                  {/* Header */}
                  <div className={`h-32 bg-gradient-to-br ${template.color} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-6xl"
                    >
                      {template.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{template.description}</p>

                    {/* Features */}
                    <div className="mb-8">
                      <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Fitur Unggulan</p>
                      <div className="space-y-2">
                        {template.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                            <span className="w-2 h-2 rounded-full bg-pastel-purple" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/template/${template.id}`}
                      className="block"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-gradient-to-r from-pastel-purple to-pastel-pink text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow group"
                      >
                        Lihat Demo
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesHub;

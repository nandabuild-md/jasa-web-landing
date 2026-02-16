'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const TemplatesHub = () => {
  const templates = [
    {
      name: 'Jasa Servis',
      route: '/template/jasa-servis',
      description: 'Template untuk jasa servis AC, listrik, dan elektronik',
      color: 'from-blue-500 to-purple-500',
      icon: '🔧',
      features: ['Service AC', 'Listrik', 'Portfolio', 'Reviews'],
      new: false
    },
    {
      name: 'Warung Kuliner',
      route: '/template/warung-kuliner',
      description: 'Template untuk warung makan dan kuliner',
      color: 'from-orange-500 to-red-500',
      icon: '🍜',
      features: ['Menu Digital', 'Gallery', 'Reviews', 'WhatsApp Order'],
      new: false
    },
    {
      name: 'Travel Umroh',
      route: '/template/travel-umroh',
      description: 'Template untuk travel umroh dan haji',
      color: 'from-emerald-500 to-cyan-500',
      icon: '🕌',
      features: ['Paket Tour', 'Itinerary', 'Testimonial', 'Hotel Gallery'],
      new: false
    },
    {
      name: 'Haji Khusus Premium',
      route: '/template/haji-khusus',
      description: 'Template premium untuk travel haji khusus dengan pricing & lead form',
      color: 'from-yellow-500 to-emerald-600',
      icon: '⭐',
      features: ['Trust Badges', 'Pricing Cards', 'Lead Form', 'Multi-Office Footer'],
      new: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">✨ Templates Hub</h1>
            <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">
              ← Home
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Pilih Template
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Website Anda
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Template siap pakai dengan desain modern, responsive, dan high-converting
          </p>
        </motion.div>
      </section>

      {/* Templates Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {templates.map((template, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <Link href={template.route}>
                  <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-gray-400 transition-all shadow-lg hover:shadow-2xl">
                    {/* New Badge */}
                    {template.new && (
                      <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg flex items-center gap-2 z-10">
                        <Sparkles size={16} className="text-white" />
                        <span className="text-sm font-bold text-white">BARU!</span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-br ${template.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                      {template.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {template.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {template.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {template.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-gray-900 font-semibold group-hover:gap-4 transition-all">
                      Lihat Demo
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TemplatesHub;

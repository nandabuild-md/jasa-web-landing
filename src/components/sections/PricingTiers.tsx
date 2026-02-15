'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const PricingTiers = () => {
  const tiers = [
    {
      name: 'Starter',
      price: '100rb',
      color: 'from-pastel-pink to-pastel-purple',
      description: 'Cocok untuk warung kecil atau profil usaha',
      features: [
        '1 halaman website',
        'Kontak + integrasi WhatsApp',
        'Menu/item hingga 10-20',
        'Mobile responsive',
        'Tidak termasuk domain',
      ],
      target: 'Warung Kecil, Profil Usaha',
    },
    {
      name: 'Katalog Simple',
      price: '250-300rb',
      color: 'from-pastel-blue to-pastel-purple',
      description: 'Untuk usaha dengan banyak produk/layanan',
      features: [
        'Halaman katalog lengkap',
        'Detail produk/layanan',
        'Data via Firebase/Static',
        'Galeri foto profesional',
        'Tidak termasuk domain',
      ],
      target: 'Toko Kecil, Jasa Variasi',
      popular: true,
    },
    {
      name: 'Katalog + CMS',
      price: '400-600rb',
      color: 'from-pastel-green to-pastel-blue',
      description: 'Untuk usaha yang sering update konten',
      features: [
        'Semua fitur Katalog Simple',
        'Halaman berita/artikel',
        'CMS sederhana',
        'Admin panel intuitif',
        'Tidak termasuk domain',
      ],
      target: 'Usaha Aktif, Konten Rutin',
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-soft-pink via-white to-soft-blue">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Paket & Harga</h2>
          <p className="text-lg text-gray-600">Pilih paket yang sesuai dengan kebutuhan usaha Anda</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -20 }}
              className={`relative rounded-3xl p-8 border-2 transition-all ${
                tier.popular
                  ? `bg-gradient-to-br ${tier.color} text-white shadow-2xl border-transparent`
                  : 'bg-white border-pastel-purple/20 hover:border-pastel-purple/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-pastel-peach rounded-full text-sm font-bold text-gray-900">
                  Paling Populer ⭐
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-gray-900'}`}>
                {tier.name}
              </h3>
              <p className={`mb-4 ${tier.popular ? 'text-white/90' : 'text-gray-600'}`}>
                {tier.target}
              </p>
              <div className={`text-4xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-pastel-purple'}`}>
                Rp {tier.price}
              </div>
              <p className={`text-sm mb-8 ${tier.popular ? 'text-white/80' : 'text-gray-600'}`}>
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className={`flex gap-3 items-start ${tier.popular ? 'text-white' : 'text-gray-700'}`}>
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  tier.popular
                    ? 'bg-white text-pastel-purple hover:shadow-lg'
                    : 'bg-gradient-to-r from-pastel-pink to-pastel-purple text-white hover:shadow-lg'
                }`}
              >
                Chat via WhatsApp
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;

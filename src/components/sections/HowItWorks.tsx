'use client';

import { motion } from 'framer-motion';
import { MessageCircle, FileText, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Chat di WhatsApp',
      description: 'Hubungi saya untuk konsultasi gratis dan tanyakan detail project Anda',
    },
    {
      icon: FileText,
      title: 'Kirim Data & Pilih Template',
      description: 'Berikan data usaha Anda dan pilih template yang paling sesuai',
    },
    {
      icon: CheckCircle,
      title: 'Website Jadi, Bayar Setelah Disetujui',
      description: 'Website selesai dalam beberapa hari. Bayar hanya jika Anda puas',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-soft-purple via-white to-soft-pink">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Cara Kerja</h2>
          <p className="text-lg text-gray-600">Proses yang sederhana dan transparan</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue opacity-30" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number badge */}
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {idx + 1}
                </motion.div>

                <div className="pt-12 px-6 bg-white rounded-2xl border-2 border-pastel-purple/20 hover:border-pastel-purple/50 transition-colors">
                  <motion.div
                    className="w-16 h-16 bg-soft-purple rounded-xl flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <Icon className="w-8 h-8 text-pastel-purple" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Rata-rata website selesai dalam</p>
          <div className="inline-block bg-gradient-to-r from-pastel-pink to-pastel-purple rounded-2xl px-8 py-4">
            <p className="text-4xl font-bold text-white">3-7 Hari</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

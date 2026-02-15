'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Apakah harga sudah termasuk domain?',
      answer: 'Belum. Harga di atas adalah untuk website saja. Untuk domain, saya bisa membantu merekomendasikan tempat yang terpercaya dan murah. Biasanya domain .com hanya sekitar 100rb-150rb per tahun.',
    },
    {
      question: 'Kalau saya nggak punya foto bagus, bagaimana?',
      answer: 'Tidak apa-apa! Kita bisa mulai dengan foto sederhana dulu. Website sudah jadi dan berfungsi. Foto-foto bisa diganti kapan saja nantinya ketika Anda sudah punya foto yang lebih baik.',
    },
    {
      question: 'Kalau mau upgrade paket, bagaimana prosesnya?',
      answer: 'Sangat mudah! Cukup chat saya dan jelaskan apa yang ingin ditambahkan. Saya akan memberikan quotation update dan mengupgrade website Anda dari template dasar. Biasanya tidak perlu rebuild dari awal.',
    },
    {
      question: 'Berapa lama website bisa online setelah dibayar?',
      answer: 'Website selesai dalam 3-7 hari kerja tergantung kompleksitas. Setelah Anda bayar dan menyetujui final design, saya langsung bisa push ke production server.',
    },
    {
      question: 'Apakah ada garansi atau support setelah website jadi?',
      answer: 'Ya! Selama 1 bulan pertama saya memberikan support gratis untuk bug fixes dan perubahan minor. Setelah itu, untuk maintenance bisa kami discuss lebih lanjut.',
    },
  ];

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-soft-blue via-white to-soft-green">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Pertanyaan Umum</h2>
          <p className="text-lg text-gray-600">Jawaban untuk pertanyaan yang sering ditanyakan</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="border-2 border-pastel-purple/20 rounded-xl overflow-hidden hover:border-pastel-purple/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between bg-white hover:bg-soft-purple/30 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-pastel-purple flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-soft-purple/20 border-t-2 border-pastel-purple/20"
                  >
                    <p className="p-6 text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

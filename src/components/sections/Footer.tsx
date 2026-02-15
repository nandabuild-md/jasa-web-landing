'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent">
              Jasa Web UMKM
            </h3>
            <p className="text-gray-300">Website berkualitas, harga terjangkau untuk usaha lokal Anda</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Link Cepat</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#target" className="hover:text-pastel-pink transition-colors">Untuk Siapa</a></li>
              <li><a href="#pricing" className="hover:text-pastel-pink transition-colors">Harga</a></li>
              <li><a href="#templates" className="hover:text-pastel-pink transition-colors">Template</a></li>
              <li><a href="#faq" className="hover:text-pastel-pink transition-colors">FAQ</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/62812345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-pastel-pink transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-2 text-gray-300 hover:text-pastel-pink transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={18} />
                Surabaya, Indonesia
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400"
        >
          <p>&copy; 2026 Jasa Pembuatan Website. Semua hak cipta dilindungi.</p>
          <p className="text-sm mt-2">Dibuat dengan ❤️ di Surabaya</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

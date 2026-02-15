'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ibu Siti',
      business: 'Warung Mie Rumahan',
      text: 'Website saya jadi cepat dan mudah dipakai. Banyak pelanggan baru yang lihat dari Google!',
      rating: 5,
      image: '👩‍🍳',
    },
    {
      name: 'Pak Ahmad',
      business: 'Jasa AC Panggilan',
      text: 'Sangat profesional. Dari order hingga selesai cepat. Harganya juga terjangkau.',
      rating: 5,
      image: '🔧',
    },
    {
      name: 'Mbak Rina',
      business: 'Kursus Privat Matematika',
      text: 'Siswa bisa langsung daftar dari website. Sangat membantu administrasi saya.',
      rating: 5,
      image: '📚',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Testimoni Klien</h2>
          <p className="text-lg text-gray-600">Kepuasan klien adalah prioritas kami</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-2xl border border-pastel-purple/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.business}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

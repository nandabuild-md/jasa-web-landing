import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jasa Pembuatan Website - Surabaya',
  description: 'Jasa pembuatan website sederhana untuk UMKM & usaha lokal. Mulai dari 100rb. Dibuat oleh developer dari Surabaya.',
  openGraph: {
    title: 'Jasa Pembuatan Website - Surabaya',
    description: 'Website berkualitas untuk warung, jasa servis, dan kursus rumahan',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gradient-to-br from-pastel-cream via-white to-soft-pink">
        {children}
      </body>
    </html>
  );
}

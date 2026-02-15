# Jasa Pembuatan Website Landing Page

**Modern pastel landing page untuk layanan web development UMKM built with React, Framer Motion & Tailwind CSS**

## 🎨 Features

- ✨ Modern pastel color theme
- 🎬 Smooth animations with Framer Motion
- 📱 Fully responsive design
- ⚡ Built with Next.js for optimal performance
- 🎯 SEO-friendly structure
- 📦 Production-ready code

## 🎯 Sections

- **Hero** - Eye-catching hero section dengan CTA utama
- **Target Audience** - Showcase untuk siapa layanan ini
- **Pricing Tiers** - 3 paket harga yang jelas
- **Templates** - Showcase 3 template untuk berbagai usaha
- **How It Works** - Proses 3 langkah yang sederhana
- **Testimonials** - Testimoni dari klien
- **FAQ** - Pertanyaan umum dan jawaban
- **Footer** - Kontak dan link cepat

## 📦 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **Animation**: Framer Motion 10
- **Icons**: Lucide React
- **Language**: TypeScript

## 🛠️ Installation

```bash
# Clone repository
git clone https://github.com/nandabuild-md/jasa-web-landing.git

# Install dependencies
cd jasa-web-landing
npm install

# Run development server
npm run dev

# Open browser and navigate to http://localhost:3000
```

## 🎨 Customize

### Change Colors
Edit pastel colors in `tailwind.config.ts`

### Update WhatsApp Contact
Replace `62812345678` with your WhatsApp number (with country code, without +)

### Add Your Information
- Update contact info di `src/components/sections/Footer.tsx`
- Update nama di Hero section
- Customize testimonials

## 🚀 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start
```

### Deploy Options
- **Vercel** (recommended): `vercel deploy`
- **Netlify**: Connect GitHub repo directly
- **Self-hosted**: Use `npm run build` then deploy

## 📝 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Main page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   └── sections/
│       ├── Hero.tsx
│       ├── TargetAudience.tsx
│       ├── PricingTiers.tsx
│       ├── Templates.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
```

## 💡 Quick Tips

- Update WhatsApp number di semua komponen yang ada
- Customize brand/nama usaha Anda
- Ganti foto template showcase dengan screenshot real
- Test responsiveness di mobile devices

## 🎉 Getting Started

1. Clone this repo
2. Run `npm install`
3. Update WhatsApp number dan informasi kontak
4. Customize colors dan content
5. Run `npm run dev`
6. Deploy ke Vercel atau hosting pilihan Anda

---

**Made with ❤️ in Surabaya**

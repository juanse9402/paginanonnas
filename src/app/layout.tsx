import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuidados Nonnas | Enfermeras a Domicilio en Bogotá",
  description: "Cuidado de adultos mayores y enfermería a domicilio 24/7 en Bogotá. Perfiles verificados, reporte diario y atención premium para tu tranquilidad.",
  keywords: [
    "enfermeras a domicilio bogota", 
    "cuidado de adultos mayores bogota", 
    "enfermeria 24 horas bogota", 
    "cuidados nonnas", 
    "auxiliar de enfermeria bogota", 
    "cuidado postoperatorio en casa",
    "agencia de enfermeras bogota",
    "cuidadoras de ancianos",
    "enfermeras geriátricas a domicilio",
    "cuidado de enfermos en casa",
    "acompañamiento hospitalario bogota",
    "inyectologia a domicilio bogota",
    "cuidados paliativos en casa",
    "enfermeras por turnos bogota",
    "cuidado de pacientes postrados"
  ],
  authors: [{ name: "Cuidados Nonnas" }],
  openGraph: {
    title: "Cuidados Nonnas | Enfermeras a Domicilio en Bogotá",
    description: "Cuidado de adultos mayores y enfermería a domicilio 24/7 en Bogotá. Perfiles verificados y atención premium.",
    url: 'https://www.cuidadononnas.com',
    siteName: 'Cuidados Nonnas',
    images: [
      {
        url: '/premium_hero.png',
        width: 1200,
        height: 630,
        alt: 'Enfermera de Cuidados Nonnas cuidando a un adulto mayor',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Cuidados Nonnas",
              "image": "https://www.cuidadononnas.com/premium_hero.png",
              "url": "https://www.cuidadononnas.com",
              "telephone": "+573174373251",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bogotá",
                "addressRegion": "Bogotá D.C.",
                "addressCountry": "CO"
              },
              "description": "Cuidado de adultos mayores y enfermería a domicilio 24/7 en Bogotá. Perfiles verificados y atención premium.",
              "sameAs": [
                "https://www.instagram.com/cuidadosnonnas/",
                "https://www.facebook.com/profile.php?id=61583523158510"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Topbar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

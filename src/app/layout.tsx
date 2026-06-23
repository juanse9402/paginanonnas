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
  title: "Cuidado Nonnas | Enfermeras a Domicilio en Bogotá",
  description: "Cuidado de adultos mayores y enfermería a domicilio 24/7 en Bogotá. Perfiles verificados, reporte diario y atención premium para tu tranquilidad.",
  keywords: ["enfermeras a domicilio bogota", "cuidado de adultos mayores", "enfermeria 24 horas", "cuidado nonnas", "auxiliar de enfermeria bogota", "cuidado postoperatorio"],
  authors: [{ name: "Cuidado Nonnas" }],
  openGraph: {
    title: "Cuidado Nonnas | Enfermeras a Domicilio en Bogotá",
    description: "Cuidado de adultos mayores y enfermería a domicilio 24/7 en Bogotá. Perfiles verificados y atención premium.",
    url: 'https://cuidadosnonnas.com',
    siteName: 'Cuidado Nonnas',
    images: [
      {
        url: '/premium_hero.png',
        width: 1200,
        height: 630,
        alt: 'Enfermera de Cuidado Nonnas cuidando a un adulto mayor',
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

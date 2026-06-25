import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Marquee from '@/components/Marquee';
import TrustBlock from '@/components/TrustBlock';
import History from '@/components/History';
import Services from '@/components/Services';
import Method from '@/components/Method';
import Guarantee from '@/components/Guarantee';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Hero />
      <SocialProof />
      <Marquee />
      <History />
      <Services />
      <Method />
      <TrustBlock />
      <Guarantee />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
}

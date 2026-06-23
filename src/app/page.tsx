import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Differentiators from '@/components/Differentiators';
import Method from '@/components/Method';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Hero />
      <Services />
      <Differentiators />
      <Method />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
}

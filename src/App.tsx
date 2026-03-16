import FaqSection from "./components/pricing-faq-section/FaqSection";
import Navbar from "./components/navigation/Navbar";
import { PricingTiers } from "./components/pricing-tiers-section/PricingTiers";
import FeaturesSection from "./components/features-section/FeaturesSection";
import TestimonialsSection from "./components/testimonials-section/TestimonialsSection";
import ContactSection from "./components/contact-section/ContactSection";
import FooterSection from "./components/footer-section/FooterSection";

function App() {
  return (
    <div className='mx-auto flex min-h-screen w-full min-w-dvw flex-col items-center bg-linear-to-r from-[#F9FAFB] to-[#D2D6DB] p-4'>
      <Navbar />
      <div className='flex w-full flex-col rounded-md bg-white'>
        <main className='flex flex-col'>
          <PricingTiers />
          <FaqSection />
          <FeaturesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;

import { Navbar } from "./components/navigation/Navbar";

import { PricingTiers } from "./blocks/pricing-tiers-section/PricingTiers";
import { FaqSection } from "./blocks/pricing-faq-section/FaqSection";
import { FeaturesSection } from "./blocks/features-section/FeaturesSection";
import { TestimonialsSection } from "./blocks/testimonials-section/TestimonialsSection";
import { ContactSection } from "./blocks/contact-section/ContactSection";

import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div
      id='page-body'
      className='mx-auto flex min-h-dvh w-full min-w-dvw flex-col items-center bg-linear-to-r from-[#F9FAFB] to-[#D2D6DB] p-4'
    >
      <Navbar />
      <div className='mt-4 flex w-full flex-col rounded-md bg-white'>
        <main className='flex flex-col'>
          <PricingTiers />
          <FaqSection />
          <FeaturesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export { App };

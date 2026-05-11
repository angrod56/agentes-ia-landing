import Hero from "@/components/sections/Hero";
import BulletsPromesa from "@/components/sections/BulletsPromesa";
import ParaQuienEs from "@/components/sections/ParaQuienEs";
import ProblemaReal from "@/components/sections/ProblemaReal";
import MetodoAgenteEn15 from "@/components/sections/MetodoAgenteEn15";
import Curriculum from "@/components/sections/Curriculum";
import DemoEnVivo from "@/components/sections/DemoEnVivo";
import ValueStack from "@/components/sections/ValueStack";
import Pricing from "@/components/sections/Pricing";
import BonusWhatsApp from "@/components/sections/BonusWhatsApp";
import Garantia from "@/components/sections/Garantia";
import Testimonios from "@/components/sections/Testimonios";
import FAQs from "@/components/sections/FAQs";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import SaleNotification from "@/components/ui/SaleNotification";

export default function HomePage() {
  return (
    <main className="bg-[#0D0D0D] text-white">
      <Hero />
      <BulletsPromesa />
      <ParaQuienEs />
      <ProblemaReal />
      <MetodoAgenteEn15 />
      <Curriculum />
      <DemoEnVivo />
      <ValueStack />
      <Pricing />
      <BonusWhatsApp />
      <Garantia />
      <Testimonios />
      <FAQs />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
      <SaleNotification />
    </main>
  );
}

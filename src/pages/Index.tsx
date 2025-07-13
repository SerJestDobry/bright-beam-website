import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WorkingHoursNotification } from "@/components/WorkingHoursNotification";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <section id="products">
        <ProductShowcase />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <WorkingHoursNotification />
    </div>
  );
};

export default Index;

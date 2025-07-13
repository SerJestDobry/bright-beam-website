import { Navigation } from "@/components/Navigation";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ProductShowcase />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
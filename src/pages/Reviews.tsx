import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ReviewsComponent } from "@/components/Reviews";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ReviewsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
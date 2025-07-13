import { Navigation } from "@/components/Navigation";
import { Contact as ContactComponent } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WorkingHoursNotification } from "@/components/WorkingHoursNotification";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <ContactComponent />
      </div>
      <Footer />
      <WorkingHoursNotification />
    </div>
  );
};

export default Contact;
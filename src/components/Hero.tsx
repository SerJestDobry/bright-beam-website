import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-led-strips.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="LED Strip Installation" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Animated LED Effect */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-led opacity-60 animate-led-flow"></div>
        <div className="absolute top-2/3 right-0 w-full h-1 bg-gradient-led opacity-40 animate-led-flow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <div className="animate-float">
          <Zap className="w-16 h-16 text-primary mx-auto mb-6 drop-shadow-lg" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
          Illuminate Your
          <span className="block bg-gradient-led bg-clip-text text-transparent animate-glow-pulse">
            Smart Space
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Premium LED strips that transform any environment with intelligent lighting, 
          vibrant colors, and seamless smart home integration.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="glow" size="lg" className="group">
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="hero" size="lg">
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-led-blue animate-glow-pulse"></div>
      <div className="absolute top-40 right-32 w-3 h-3 rounded-full bg-led-purple animate-glow-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 rounded-full bg-led-green animate-glow-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-led-pink animate-glow-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};
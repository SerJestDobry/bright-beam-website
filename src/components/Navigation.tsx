import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">LuminaStrip</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Produkty
            </Link>
            <Link to="/reviews" className="text-foreground hover:text-primary transition-colors">
              Opinie
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Kontakt
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="glow">
              Zamów teraz
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 space-y-4">
              <Link 
                to="/products" 
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Produkty
              </Link>
              <Link 
                to="/reviews" 
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Opinie
              </Link>
              <Link 
                to="/contact" 
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
              <div className="pt-4 space-y-2">
                <Button variant="glow" className="w-full">
                  Zamów teraz
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wifi, Smartphone, Palette, Timer } from "lucide-react";
const products = [{
  name: "ProStrip RGB+",
  description: "Professional-grade RGB LED strips with smart controls",
  features: ["5050 SMD LEDs", "60 LEDs/meter", "IP65 Waterproof", "WiFi Control"],
  price: "$49.99",
  badge: "Best Seller",
  icon: Palette,
  color: "led-blue"
}, {
  name: "SmartStrip Pro",
  description: "Intelligent LED strips with advanced automation",
  features: ["Voice Control", "App Control", "Music Sync", "16M Colors"],
  price: "$79.99",
  badge: "Smart",
  icon: Smartphone,
  color: "led-purple"
}, {
  name: "StudioStrip 4K",
  description: "Cinema-quality LED strips for content creators",
  features: ["4K HDR", "98% CRI", "Studio Grade", "USB-C Power"],
  price: "$129.99",
  badge: "Pro",
  icon: Timer,
  color: "led-green"
}];
export const ProductShowcase = () => {
  return <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Poznaj naszą kolekcje ledów!</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Discover our range of premium LED strips designed for every space and need</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => <Card key={product.name} className="p-6 bg-card border-border hover:shadow-card transition-all duration-300 group relative overflow-hidden">
              {/* Animated background effect */}
              <div className={`absolute inset-0 bg-${product.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <product.icon className={`w-8 h-8 text-${product.color}`} />
                  <Badge variant="secondary" className="bg-secondary/50">
                    {product.badge}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map(feature => <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-2 h-2 rounded-full bg-${product.color} mr-3 animate-glow-pulse`}></div>
                      {feature}
                    </li>)}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-foreground">
                    {product.price}
                  </span>
                  <Button variant="outline" className="group">
                    View Details
                    <Wifi className="w-4 h-4 group-hover:text-primary transition-colors" />
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
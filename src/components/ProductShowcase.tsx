import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Wifi, Smartphone, Palette, Timer, Mic, Music } from "lucide-react";

const products = [{
  name: "Taśma LED 10m z 24-przyciskowym panelem",
  id: "tasma-led-10m",
  description: "10-metrowa taśma LED z zaawansowanym sterowaniem",
  features: ["IP20", "Kontrola z aplikacji", "Multicolor", "Bluetooth", "Music sync", "Microphone", "Timer", "Zużycie: 6W", "30 LED/metr"],
  price: "249 zł",
  badge: "10m",
  icon: Palette,
  color: "led-blue"
}, {
  name: "Taśma LED 15m z 24-przyciskowym panelem", 
  id: "tasma-led-15m",
  description: "15-metrowa taśma LED z 24-przyciskowym sterowaniem",
  features: ["IP20", "Kontrola z aplikacji", "Multicolor", "Bluetooth", "Music sync", "Microphone", "Timer", "Zużycie: 6W", "30 LED/metr"],
  price: "329 zł",
  badge: "15m",
  icon: Smartphone,
  color: "led-purple"
}, {
  name: "Taśma LED 15m z 44-przyciskowym panelem",
  id: "tasma-led-15m-premium",
  description: "15-metrowa taśma LED z zaawansowanym 44-przyciskowym sterowaniem",
  features: ["IP20", "Kontrola z aplikacji", "Multicolor", "Bluetooth", "Music sync", "Microphone", "Timer", "Zużycie: 6W", "30 LED/metr"],
  price: "379 zł", 
  badge: "Premium",
  icon: Music,
  color: "led-green"
}];
export const ProductShowcase = () => {
  return <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nasze Produkty</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Profesjonalne taśmy LED z inteligentnym sterowaniem i najwyższą jakością</p>
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
                  <Link to={`/products/${product.id}`}>
                    <Button variant="outline" className="group">
                      View Details
                      <Wifi className="w-4 h-4 group-hover:text-primary transition-colors" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
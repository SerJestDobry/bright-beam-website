import { Card } from "@/components/ui/card";
import { Smartphone, Mic, Palette, Zap, Shield, Settings, Home, Music } from "lucide-react";
const features = [{
  icon: Smartphone,
  title: "Smart App Control",
  description: "Control your LED strips from anywhere with our intuitive mobile app. Set schedules, create scenes, and manage multiple zones.",
  color: "led-blue"
}, {
  icon: Mic,
  title: "Voice Commands",
  description: "Works with Alexa, Google Assistant, and Siri. Simply speak to control your lighting without lifting a finger.",
  color: "led-purple"
}, {
  icon: Music,
  title: "Music Sync",
  description: "Watch your lights dance to the beat. Advanced audio analysis creates stunning visual experiences in real-time.",
  color: "led-green"
}, {
  icon: Palette,
  title: "16 Million Colors",
  description: "Express yourself with endless color possibilities. Create the perfect ambiance for any mood or occasion.",
  color: "led-orange"
}, {
  icon: Home,
  title: "Smart Home Ready",
  description: "Seamlessly integrate with your existing smart home ecosystem. Compatible with major platforms and protocols.",
  color: "led-pink"
}, {
  icon: Zap,
  title: "Energy Efficient",
  description: "Advanced LED technology delivers brilliant lighting while consuming minimal power. Up to 80% more efficient than traditional lighting.",
  color: "led-blue"
}, {
  icon: Shield,
  title: "Weatherproof Design",
  description: "IP65 rated protection means your LED strips can handle any environment, indoor or outdoor.",
  color: "led-purple"
}, {
  icon: Settings,
  title: "Easy Installation",
  description: "3M adhesive backing and flexible design make installation simple. No tools required for most applications.",
  color: "led-green"
}];
export const Features = () => {
  return <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Funkcje naszych Taśm Led</h2>
          
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <Card key={feature.title} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:shadow-glow transition-all duration-300 group" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className={`w-12 h-12 rounded-lg bg-${feature.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 text-${feature.color}`} />
              </div>
              
              <h3 className="font-semibold text-foreground mb-3 text-lg">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>)}
        </div>
      </div>
    </section>;
};
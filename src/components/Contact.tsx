import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się z nami, aby uzyskać więcej informacji o naszych produktach
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card border-border shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Wyślij nam wiadomość
            </h3>
            
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Imię
                  </label>
                  <Input 
                    placeholder="Jan" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nazwisko
                  </label>
                  <Input 
                    placeholder="Kowalski" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input 
                  type="email" 
                  placeholder="jan@przykład.com" 
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Temat
                </label>
                <Input 
                  placeholder="Pytanie o produkty, instalacja, itp." 
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Wiadomość
                </label>
                <Textarea 
                  placeholder="Opisz swoje potrzeby..." 
                  rows={4}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="glow" className="w-full group">
                Wyślij wiadomość
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          {/* Call to Action */}
          <div className="bg-gradient-glow rounded-lg p-8 text-center border border-primary/20">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Potrzebujesz pomocy?
            </h4>
            <p className="text-muted-foreground mb-6">
              Nasz zespół pomoże Ci wybrać idealne rozwiązanie LED dla Twojego projektu.
            </p>
            <Button variant="hero" className="w-full">
              Skontaktuj się z nami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
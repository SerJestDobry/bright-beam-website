import { useParams, Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Wifi, Smartphone, Palette, Timer, Mic, Music, Shield, Zap } from "lucide-react";

const productData = {
  "tasma-led-10m": {
    name: "Taśma LED 10m z 24-przyciskowym panelem",
    description: "10-metrowa taśma LED z zaawansowanym sterowaniem",
    price: "249 zł",
    badge: "10m",
    icon: Palette,
    color: "led-blue",
    images: [
      "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1036944/pexels-photo-1036944.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      { icon: Shield, title: "IP20", description: "Ochrona przed kurzem i małymi przedmiotami" },
      { icon: Smartphone, title: "Kontrola z aplikacji", description: "Pełne sterowanie przez smartfon" },
      { icon: Palette, title: "Multicolor", description: "16 milionów kolorów do wyboru" },
      { icon: Wifi, title: "Bluetooth", description: "Bezprzewodowe połączenie" },
      { icon: Music, title: "Music sync", description: "Synchronizacja z muzyką" },
      { icon: Mic, title: "Microphone", description: "Wbudowany mikrofon" },
      { icon: Timer, title: "Timer", description: "Programowanie czasowe" },
      { icon: Zap, title: "Zużycie: 6W", description: "Energooszczędne LED" }
    ],
    specifications: {
      "Długość": "10 metrów",
      "Gęstość LED": "30 LED/metr",
      "Moc": "6W",
      "Napięcie": "12V DC",
      "Kolor": "RGB + Biały",
      "Sterowanie": "24-przyciskowy pilot + aplikacja",
      "Łączność": "Bluetooth 4.0",
      "Klasa ochrony": "IP20",
      "Temperatura pracy": "-20°C do +60°C",
      "Żywotność": "50 000 godzin"
    },
    detailedDescription: `
      Nasza 10-metrowa taśma LED to idealne rozwiązanie dla osób szukających profesjonalnego oświetlenia dekoracyjnego. 
      Dzięki zaawansowanemu 24-przyciskowemu pilotowi oraz dedykowanej aplikacji mobilnej, masz pełną kontrolę nad 
      oświetleniem w swoim domu.

      Taśma oferuje 16 milionów kolorów oraz różne tryby świecenia, w tym synchronizację z muzyką dzięki wbudowanemu 
      mikrofonowi. Wysokiej jakości diody LED zapewniają równomierne oświetlenie przez całą długość taśmy.

      Montaż jest niezwykle prosty dzięki samoprzylepnej taśmie 3M na spodzie. Taśma jest idealna do oświetlenia 
      mebli, półek, schodów czy jako oświetlenie nastrojowe w salonie czy sypialni.
    `
  },
  "tasma-led-15m": {
    name: "Taśma LED 15m z 24-przyciskowym panelem",
    description: "15-metrowa taśma LED z 24-przyciskowym sterowaniem",
    price: "329 zł",
    badge: "15m",
    icon: Smartphone,
    color: "led-purple",
    images: [
      "https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1036944/pexels-photo-1036944.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      { icon: Shield, title: "IP20", description: "Ochrona przed kurzem i małymi przedmiotami" },
      { icon: Smartphone, title: "Kontrola z aplikacji", description: "Pełne sterowanie przez smartfon" },
      { icon: Palette, title: "Multicolor", description: "16 milionów kolorów do wyboru" },
      { icon: Wifi, title: "Bluetooth", description: "Bezprzewodowe połączenie" },
      { icon: Music, title: "Music sync", description: "Synchronizacja z muzyką" },
      { icon: Mic, title: "Microphone", description: "Wbudowany mikrofon" },
      { icon: Timer, title: "Timer", description: "Programowanie czasowe" },
      { icon: Zap, title: "Zużycie: 6W", description: "Energooszczędne LED" }
    ],
    specifications: {
      "Długość": "15 metrów",
      "Gęstość LED": "30 LED/metr",
      "Moc": "9W",
      "Napięcie": "12V DC",
      "Kolor": "RGB + Biały",
      "Sterowanie": "24-przyciskowy pilot + aplikacja",
      "Łączność": "Bluetooth 4.0",
      "Klasa ochrony": "IP20",
      "Temperatura pracy": "-20°C do +60°C",
      "Żywotność": "50 000 godzin"
    },
    detailedDescription: `
      15-metrowa taśma LED to rozszerzona wersja naszego popularnego modelu 10m. Dodatkowe 5 metrów pozwala na 
      oświetlenie większych przestrzeni lub bardziej skomplikowanych instalacji.

      Wszystkie funkcje znane z modelu 10m zostały zachowane - 24-przyciskowy pilot, aplikacja mobilna, 
      synchronizacja z muzyką oraz 16 milionów kolorów. Taśma jest idealna do oświetlenia większych pomieszczeń, 
      długich korytarzy czy zewnętrznych tarasów.

      Dzięki wysokiej jakości diod LED i profesjonalnemu kontrolerowi, taśma zapewnia równomierne oświetlenie 
      na całej długości bez utraty jasności.
    `
  },
  "tasma-led-15m-premium": {
    name: "Taśma LED 15m z 44-przyciskowym panelem",
    description: "15-metrowa taśma LED z zaawansowanym 44-przyciskowym sterowaniem",
    price: "379 zł",
    badge: "Premium",
    icon: Music,
    color: "led-green",
    images: [
      "https://images.pexels.com/photos/1036944/pexels-photo-1036944.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1444424/pexels-photo-1444424.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    features: [
      { icon: Shield, title: "IP20", description: "Ochrona przed kurzem i małymi przedmiotami" },
      { icon: Smartphone, title: "Kontrola z aplikacji", description: "Pełne sterowanie przez smartfon" },
      { icon: Palette, title: "Multicolor", description: "16 milionów kolorów do wyboru" },
      { icon: Wifi, title: "Bluetooth", description: "Bezprzewodowe połączenie" },
      { icon: Music, title: "Music sync", description: "Zaawansowana synchronizacja z muzyką" },
      { icon: Mic, title: "Microphone", description: "Wbudowany mikrofon wysokiej jakości" },
      { icon: Timer, title: "Timer", description: "Zaawansowane programowanie czasowe" },
      { icon: Zap, title: "Zużycie: 6W", description: "Energooszczędne LED" }
    ],
    specifications: {
      "Długość": "15 metrów",
      "Gęstość LED": "30 LED/metr",
      "Moc": "9W",
      "Napięcie": "12V DC",
      "Kolor": "RGB + Biały",
      "Sterowanie": "44-przyciskowy pilot + aplikacja",
      "Łączność": "Bluetooth 5.0",
      "Klasa ochrony": "IP20",
      "Temperatura pracy": "-20°C do +60°C",
      "Żywotność": "50 000 godzin",
      "Dodatkowe funkcje": "Zaawansowane efekty, więcej trybów"
    },
    detailedDescription: `
      Nasza flagowa taśma LED 15m z 44-przyciskowym pilotem to najzaawansowany model w naszej ofercie. 
      Dodatkowe przyciski na pilocie umożliwiają dostęp do ekskluzywnych efektów świetlnych i bardziej 
      precyzyjne sterowanie.

      Model Premium oferuje zaawansowane funkcje jak gradient kolorów, efekt tęczy, stroboskop, oraz 
      ulepszoną synchronizację z muzyką. Bluetooth 5.0 zapewnia stabilniejsze połączenie i większy zasięg.

      To idealne rozwiązanie dla wymagających użytkowników, którzy chcą stworzyć profesjonalne instalacje 
      oświetleniowe w swoich domach, lokalach czy na eventach.
    `
  }
};

const ProductDetails = () => {
  const { productId } = useParams();
  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Produkt nie znaleziony</h1>
            <Link to="/products">
              <Button variant="glow">Powrót do produktów</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do produktów
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Galeria zdjęć */}
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden bg-card border border-border">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden bg-card border border-border">
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Informacje o produkcie */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <product.icon className={`w-8 h-8 text-${product.color}`} />
                  <Badge variant="secondary" className="bg-secondary/50">
                    {product.badge}
                  </Badge>
                </div>
                <h1 className="text-4xl font-bold text-foreground mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {product.description}
                </p>
                <div className="text-4xl font-bold text-primary mb-8">
                  {product.price}
                </div>
              </div>

              {/* Funkcje */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Główne funkcje</h3>
                <div className="grid grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                      <feature.icon className={`w-5 h-5 text-${product.color}`} />
                      <div>
                        <div className="font-medium text-foreground text-sm">{feature.title}</div>
                        <div className="text-xs text-muted-foreground">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Przyciski akcji */}
              <div className="space-y-4">
                <Button variant="glow" size="lg" className="w-full">
                  Zamów teraz
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Dodaj do koszyka
                </Button>
              </div>
            </div>
          </div>

          {/* Szczegółowy opis */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Szczegółowy opis</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {product.detailedDescription}
                  </p>
                </div>
              </Card>
            </div>

            {/* Specyfikacja */}
            <div>
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">Specyfikacja</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-start">
                      <span className="text-sm text-muted-foreground">{key}:</span>
                      <span className="text-sm text-foreground font-medium text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Instalacja i gwarancja */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Łatwa instalacja</h3>
              <p className="text-muted-foreground mb-4">
                Taśma LED jest wyposażona w samoprzylepną taśmę 3M, która umożliwia szybki i łatwy montaż 
                na większości powierzchni. Nie potrzebujesz żadnych dodatkowych narzędzi.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Oczyść powierzchnię przed montażem</li>
                <li>• Zdejmij folię ochronną</li>
                <li>• Przyklej taśmę w wybranym miejscu</li>
                <li>• Podłącz kontroler i ciesz się oświetleniem</li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Gwarancja i wsparcie</h3>
              <p className="text-muted-foreground mb-4">
                Oferujemy 24-miesięczną gwarancję na wszystkie nasze produkty oraz bezpłatne wsparcie 
                techniczne przez telefon i email.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 24 miesiące gwarancji</li>
                <li>• Bezpłatne wsparcie techniczne</li>
                <li>• Instrukcja w języku polskim</li>
                <li>• Szybka wymiana w przypadku awarii</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
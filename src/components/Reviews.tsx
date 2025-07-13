import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, User } from "lucide-react";

const products = [
  "Taśma LED 10m z 24-przyciskowym panelem",
  "Taśma LED 15m z 24-przyciskowym panelem", 
  "Taśma LED 15m z 44-przyciskowym panelem"
];

// Przykładowe opinie (w rzeczywistej aplikacji będą z bazy danych)
const sampleReviews = [
  {
    id: 1,
    name: "Anna Kowalska",
    product: "Taśma LED 10m z 24-przyciskowym panelem",
    rating: 5,
    comment: "Świetny produkt! Łatwa instalacja i piękne kolory.",
    date: "2024-01-15"
  },
  {
    id: 2,
    name: "Piotr Nowak",
    product: "Taśma LED 15m z 44-przyciskowym panelem",
    rating: 4,
    comment: "Bardzo zadowolony z zakupu. Polecam!",
    date: "2024-01-10"
  }
];

export const ReviewsComponent = () => {
  const [reviews, setReviews] = useState(sampleReviews);
  const [formData, setFormData] = useState({
    name: "",
    product: "",
    rating: 5,
    comment: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Tutaj będzie integracja z bazą danych przez Supabase
    const newReview = {
      id: reviews.length + 1,
      ...formData,
      date: new Date().toISOString().split('T')[0]
    };
    
    setReviews([newReview, ...reviews]);
    setFormData({ name: "", product: "", rating: 5, comment: "" });
    
    // Pokazanie powiadomienia
    alert("Dziękujemy za opinię!");
  };

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onRate?.(star)}
            className={`${interactive ? 'hover:text-yellow-400 cursor-pointer' : ''}`}
          >
            <Star 
              className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Opinie klientów
          </h1>
          <p className="text-xl text-muted-foreground">
            Zobacz co mówią nasi klienci o naszych produktach
          </p>
        </div>

        {/* Formularz dodawania opinii */}
        <Card className="p-8 mb-12 bg-card border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Dodaj swoją opinię
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Imię i nazwisko
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Jan Kowalski"
                  required
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Produkt
                </label>
                <Select
                  value={formData.product}
                  onValueChange={(value) => setFormData({...formData, product: value})}
                  required
                >
                  <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
                    <SelectValue placeholder="Wybierz produkt" />
                  </SelectTrigger>
                  <SelectContent>
                    {products.map((product) => (
                      <SelectItem key={product} value={product}>
                        {product}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Ocena
              </label>
              {renderStars(formData.rating, true, (rating) => setFormData({...formData, rating}))}
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Komentarz
              </label>
              <Textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                placeholder="Podziel się swoimi wrażeniami..."
                rows={4}
                required
                className="bg-secondary/50 border-border focus:border-primary resize-none"
              />
            </div>

            <Button type="submit" variant="glow" className="w-full">
              Dodaj opinię
            </Button>
          </form>
        </Card>

        {/* Lista opinii */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Wszystkie opinie ({reviews.length})
          </h2>
          
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    {renderStars(review.rating)}
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">
                    Produkt: {review.product}
                  </p>
                  
                  <p className="text-foreground">
                    {review.comment}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
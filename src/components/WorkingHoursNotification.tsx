import { useState, useEffect } from "react";
import { X, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const WorkingHoursNotification = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show notification after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Card className="p-4 bg-card border-border shadow-card max-w-sm">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Clock className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground text-sm mb-1">
              Godziny pracy
            </h4>
            <p className="text-xs text-muted-foreground">
              Jesteśmy dostępni od poniedziałku do piątku w godzinach 8:00 - 22:00
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6 flex-shrink-0"
            onClick={() => setIsVisible(false)}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </Card>
    </div>
  );
};
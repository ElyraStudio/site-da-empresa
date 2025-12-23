import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5551996747657?text=Olá! Gostaria de saber mais sobre os serviços da Elyra.";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-wine rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-wine rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="animate-fade-up opacity-0">
            <span className="inline-block px-4 py-2 mb-8 text-xs font-body font-medium tracking-wider uppercase bg-wine/10 text-wine-light rounded-full border border-wine/20">
              Estúdio Digital
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="animate-fade-up opacity-0 delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6">
            Sites profissionais que{" "}
            <span className="text-gradient">transformam</span>{" "}
            seu negócio
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up opacity-0 delay-200 font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A Elyra cria e aluga sites profissionais para pequenos negócios. 
            Tenha presença online de qualidade sem complicação.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="wine" size="xl" asChild className="group">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="wineOutline" size="lg" asChild>
              <a href="#servicos">
                Conhecer serviços
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up opacity-0 delay-400 grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/10">
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-2">100%</p>
              <p className="font-body text-sm text-muted-foreground">Sites responsivos</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-2">SSL</p>
              <p className="font-body text-sm text-muted-foreground">Segurança inclusa</p>
            </div>
            <div className="text-center">
              <p className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground mb-2">24h</p>
              <p className="font-body text-sm text-muted-foreground">Suporte rápido</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre" className="text-muted-foreground hover:text-wine transition-colors">
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

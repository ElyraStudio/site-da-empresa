import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappLink = "https://wa.me/5551996747657?text=Olá! Gostaria de saber mais sobre os serviços da Elyra.";

  return (
    <section id="contato" className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-wine rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight mb-6">
            Vamos conversar sobre o seu projeto?
          </h2>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            Os valores variam de acordo com cada projeto e suas necessidades específicas.
          </p>
          
          <p className="font-body text-lg text-muted-foreground mb-10">
            Para saber valores e opções,{" "}
            <span className="text-wine-light font-medium">entre em contato pelo WhatsApp</span>.
          </p>
          
          <Button variant="wine" size="xl" asChild className="group animate-pulse-soft">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Falar com Leonardo
            </a>
          </Button>

          <p className="font-body text-sm text-muted-foreground mt-6">
            Leonardo – Responsável pela Elyra
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

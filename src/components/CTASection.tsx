import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const whatsappLink =
    "https://wa.me/5551996747657?text=Olá! Quero um site profissional para o meu negócio.";

  return (
    <section className="py-20 md:py-32 bg-wine text-primary-foreground">
      <div className="container text-center max-w-3xl mx-auto">
        <span className="inline-block px-4 py-2 mb-6 text-xs font-body font-medium tracking-wider uppercase bg-white/10 rounded-full">
          Próximo passo
        </span>

        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Pronto para ter um site profissional?
        </h2>

        <p className="font-body text-lg opacity-90 mb-10">
          Fale com a Elyra no WhatsApp e descubra a melhor solução para o seu
          negócio, sem compromisso e sem complicação.
        </p>

        <Button
          variant="secondary"
          size="xl"
          asChild
          className="group inline-flex items-center gap-3"
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Quero um site profissional
          </a>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;

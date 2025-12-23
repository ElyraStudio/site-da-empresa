import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const whatsappLink = "https://wa.me/5551996747657?text=Olá! Gostaria de saber mais sobre os serviços da Elyra.";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
          Elyra
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Serviços
          </a>
          <a href="#beneficios" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#contato" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </a>
        </nav>

        <Button variant="wine" size="sm" asChild className="hidden sm:flex">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            Falar no WhatsApp
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;

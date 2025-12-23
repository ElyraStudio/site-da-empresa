import { X, Check } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-body font-medium tracking-wider uppercase bg-wine/10 text-wine rounded-full">
            Comparação
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            A diferença entre ter um site e não ter
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Veja como um site profissional muda a forma como os clientes
            encontram e confiam no seu negócio.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sem site */}
          <div className="p-8 rounded-2xl border border-border/20 bg-secondary">
            <h3 className="font-display text-2xl font-semibold mb-6">
              Sem site
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-500 mt-1" />
                <span>Clientes não encontram sua empresa no Google</span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-500 mt-1" />
                <span>Menos credibilidade e confiança</span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-500 mt-1" />
                <span>Dependência total de redes sociais</span>
              </li>

              <li className="flex items-start gap-3 text-muted-foreground">
                <X className="w-5 h-5 text-red-500 mt-1" />
                <span>Perda de clientes por falta de informação clara</span>
              </li>
            </ul>
          </div>

          {/* Com site */}
          <div className="p-8 rounded-2xl border border-wine/30 bg-wine/5">
            <h3 className="font-display text-2xl font-semibold mb-6 text-wine">
              Com site profissional
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-wine mt-1" />
                <span>Seu negócio aparece no Google</span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-wine mt-1" />
                <span>Mais confiança e autoridade para o cliente</span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-wine mt-1" />
                <span>Contato fácil via WhatsApp e formulário</span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-wine mt-1" />
                <span>Hoje, a maioria dos clientes pesquisa no Google antes de entrar em contato.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

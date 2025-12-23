import { Search, Shield, Users, TrendingUp } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Search,
      title: "Visibilidade no Google",
      description: "Sites profissionais são indexados pelo Google, fazendo seu negócio aparecer para clientes que estão buscando seus serviços.",
    },
    {
      icon: Shield,
      title: "Credibilidade",
      description: "Um site bem feito transmite profissionalismo e confiança. Clientes confiam mais em empresas com presença online sólida.",
    },
    {
      icon: Users,
      title: "Facilidade de Contato",
      description: "Com um site, clientes encontram facilmente seu telefone, WhatsApp, endereço e podem entrar em contato a qualquer hora.",
    },
    {
      icon: TrendingUp,
      title: "Mais que Redes Sociais",
      description: "Diferente das redes sociais, seu site é 100% seu. Não depende de algoritmos e está sempre disponível para seus clientes.",
    },
  ];

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-body font-medium tracking-wider uppercase bg-wine/10 text-wine rounded-full">
            Benefícios
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight mb-6">
            Por que ter um site profissional?
          </h2>
          
          <p className="font-body text-lg text-muted-foreground">
            Entenda como um site pode transformar a forma como seus clientes encontram e confiam no seu negócio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group flex gap-6 p-6 md:p-8 bg-secondary rounded-2xl hover:shadow-soft transition-all duration-300"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-wine/10 flex items-center justify-center group-hover:bg-wine group-hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-7 h-7 text-wine group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                
                <p className="font-body text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

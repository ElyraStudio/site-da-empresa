import { Globe, RefreshCw, Users, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Criação de site profissional",
      description:
        "Ideal para quem quer um site próprio, moderno e feito sob medida para o seu negócio, transmitindo confiança desde o primeiro acesso.",
    },
    {
      icon: RefreshCw,
      title: "Aluguel de site profissional",
      description:
        "A forma mais prática de ter um site no ar sem investimento inicial alto. Inclui hospedagem, manutenção e suporte contínuo.",
    },
    {
      icon: Users,
      title: "Sites pensados para clientes",
      description:
        "Estrutura clara, informações objetivas e foco em conversão para transformar visitantes em contatos reais.",
    },
    {
      icon: MessageCircle,
      title: "Integrações essenciais",
      description:
        "WhatsApp, Google Maps e formulários para facilitar o contato e fazer o cliente falar com você no momento certo.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-dark">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-body font-medium tracking-wider uppercase bg-wine/10 text-wine-light rounded-full border border-wine/20">
            Soluções
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight mb-6">
            Tudo para colocar seu negócio no digital
          </h2>

          <p className="font-body text-lg text-muted-foreground">
            Escolha a forma mais simples e eficiente de ter um site profissional
            e começar a atrair clientes pela internet.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-dark-soft rounded-2xl border border-border/10 hover:border-wine/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-wine/10 flex items-center justify-center group-hover:bg-wine/20 transition-colors">
                <service.icon className="w-7 h-7 text-wine-light" />
              </div>

              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                {service.title}
              </h3>

              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

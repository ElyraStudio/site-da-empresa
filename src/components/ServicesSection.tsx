import { Globe, RefreshCw, Zap, MapPin } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Criação de Sites",
      description: "Sites profissionais desenvolvidos do zero, com design personalizado para o seu negócio. Moderno, responsivo e otimizado.",
    },
    {
      icon: RefreshCw,
      title: "Aluguel de Sites",
      description: "Tenha um site profissional sem investimento inicial alto. Inclui manutenção, hospedagem e suporte contínuo.",
    },
    {
      icon: Zap,
      title: "Performance Otimizada",
      description: "Sites rápidos e otimizados para o Google. Seu negócio aparece para quem realmente está buscando seus serviços.",
    },
    {
      icon: MapPin,
      title: "Integrações",
      description: "WhatsApp, Google Maps, formulários de contato e tudo que seu negócio precisa para facilitar a comunicação com clientes.",
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-dark">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 mb-6 text-xs font-body font-medium tracking-wider uppercase bg-wine/10 text-wine-light rounded-full border border-wine/20">
            Nossos Serviços
          </span>
          
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground leading-tight mb-6">
            Tudo que seu negócio precisa na internet
          </h2>
          
          <p className="font-body text-lg text-muted-foreground">
            Soluções completas para você ter uma presença digital profissional e eficiente.
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

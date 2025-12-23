import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "O site fica registrado no nome do cliente",
    "Sem surpresas, sem letras miúdas",
    "Atendimento direto e humanizado",
    "Soluções sob medida para seu negócio",
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="inline-block px-4 py-2 text-xs font-body font-medium tracking-wider uppercase bg-wine/10 text-wine rounded-full">
              Sobre a Elyra
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Soluções digitais{" "}
              <span className="text-wine">simples e profissionais</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              A Elyra é um estúdio digital focado em entregar sites de qualidade para pequenos negócios 
              e empresas locais. Acreditamos que toda empresa merece uma presença online profissional, 
              sem complicações técnicas ou contratos confusos.
            </p>
            
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Trabalhamos com transparência total: você sabe exatamente o que está contratando, 
              e o site sempre fica no seu nome.
            </p>
          </div>

          {/* Right Content - Highlights */}
          <div className="bg-secondary rounded-2xl p-8 md:p-10 space-y-6">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8">
              Por que escolher a Elyra?
            </h3>
            
            <div className="space-y-5">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-0.5">
                    <CheckCircle className="w-6 h-6 text-wine group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="font-body text-foreground text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

const TechSection = () => {
  const technologies = [
    { name: "HTML", description: "Estrutura" },
    { name: "CSS", description: "Design" },
    { name: "JavaScript", description: "Interação" },
    { name: "WordPress", description: "Quando necessário" },
    { name: "SSL", description: "Segurança" },
    { name: "Hospedagem", description: "Profissional" },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Tecnologias que utilizamos
          </h2>
          <p className="font-body text-muted-foreground">
            Trabalhamos com as melhores ferramentas para entregar sites de qualidade.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group px-6 py-4 bg-background rounded-xl border border-border hover:border-wine/30 hover:shadow-soft transition-all duration-300"
            >
              <p className="font-display text-lg font-semibold text-foreground group-hover:text-wine transition-colors">
                {tech.name}
              </p>
              <p className="font-body text-sm text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;

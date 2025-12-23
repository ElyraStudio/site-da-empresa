const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold text-foreground">
              Elyra
            </span>
            <span className="text-muted-foreground">•</span>
            <span className="font-body text-sm text-muted-foreground">
              Estúdio Digital
            </span>
          </div>
          
          <p className="font-body text-sm text-muted-foreground">
            © {currentYear} Elyra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

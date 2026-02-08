import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Play className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-bold text-lg">TWKPRODUCTION</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/portfolio" className="hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <a href="#" className="hover:text-foreground transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Politique de confidentialité
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TWKPRODUCTION. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

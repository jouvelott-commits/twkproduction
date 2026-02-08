import { Play } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Play className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="font-bold text-lg">TWKPRODUCTION</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === "/portfolio" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Portfolio
            </Link>
            <button
              onClick={scrollToContact}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

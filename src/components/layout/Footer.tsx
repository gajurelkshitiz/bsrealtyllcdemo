import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Properties", path: "/properties" },
  { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Real Estate Services",
  "Mortgage Solutions",
  "Tax & Accounting",
  "Home Improvement",
  "Utility Setup",
  "Consulting Services",
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="font-display text-foreground font-bold text-lg">BSR</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold">BS Realty</span>
                <span className="block text-xs text-primary-foreground/70">LLC</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner in real estate, mortgage solutions, tax services, and more. 
              We provide comprehensive one-stop solutions for all your property and financial needs.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="https://maps.google.com"
                className="flex items-start gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm">2338 Bundoran Drive, Grovetown, GA 30813</span>
              </a>
              <a
                href="tel:+17062618948"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span className="text-sm">+1 (706) 261-8948</span>
              </a>
              <a
                href="mailto:bsrealtyllc@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="text-sm">bsrealtyllc@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} BS Realty LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-primary-foreground/60 hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Home, 
  DollarSign, 
  Calculator, 
  Wrench, 
  Truck, 
  Users 
} from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Real Estate Services",
    description: "We provide comprehensive real estate services for buying, selling and renting residential and commercial properties.",
  },
  {
    icon: DollarSign,
    title: "Mortgage Solutions",
    description: "Tailored mortgage solutions to fit your financial needs, from first-time homebuyer programs to refinancing.",
  },
  {
    icon: Calculator,
    title: "Tax & Accounting",
    description: "Comprehensive tax & accounting services designed to help individuals and businesses stay financially organized.",
  },
  {
    icon: Wrench,
    title: "Home Improvement",
    description: "From plumbing and electrical to renovations and repairs, we ensure your home meets comfort and safety standards.",
  },
  {
    icon: Truck,
    title: "Utility Setup & Moving",
    description: "We help set up essential utilities and provide relocation services so you can settle in without any hassle.",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert consulting for real estate, mortgage, tax, investments, market trends, and financing options.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            What We Offer
          </span>
          <h2 className="heading-section text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-body">
            We specialize in providing a one-stop solution for all your needs, whether you are buying, 
            selling, renting, or improving your property.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to="/services">
                <Card className="p-8 h-full bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-0">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

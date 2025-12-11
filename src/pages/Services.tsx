import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Home, 
  DollarSign, 
  Calculator, 
  Wrench, 
  Truck, 
  Users,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: Home,
    title: "Real Estate Services",
    description: "We provide comprehensive real estate services for buying, selling and renting residential and commercial properties. Our expert team helps you find the perfect property and ensures a smooth transaction from start to finish.",
    features: ["Property Search", "Market Analysis", "Negotiation Support", "Closing Assistance"],
  },
  {
    icon: DollarSign,
    title: "Mortgage Solutions",
    description: "We offer tailored mortgage solutions to fit your financial needs. Whether you're a first-time homebuyer or refinancing, we provide access to a variety of loan products and guide you through the loan approval process.",
    features: ["First-Time Buyer Programs", "Refinancing", "Investment Loans", "Pre-Approval"],
  },
  {
    icon: Calculator,
    title: "Tax & Accounting",
    description: "Our comprehensive tax & accounting services are designed to help individuals and businesses stay financially organized, compliant, and positioned for growth. If you need assistance with tax planning, bookkeeping, payroll, or financial reporting, our expert team provides solutions.",
    features: ["Tax Preparation", "Bookkeeping", "Payroll Services", "Financial Reporting"],
  },
  {
    icon: Wrench,
    title: "Home Improvement",
    description: "Our home improvement services cover everything from plumbing, electrical, and HVAC maintenance to renovations and repairs. We ensure your home is well-maintained and meets your comfort and safety standards.",
    features: ["Plumbing & Electrical", "HVAC Maintenance", "Renovations", "Repairs"],
  },
  {
    icon: Truck,
    title: "Utility Setup & Moving",
    description: "To make your move as seamless as possible, we help you set up essential utilities such as electricity, water, gas, and internet in your new property including relocation services, so you can settle in without any hassle.",
    features: ["Utility Setup", "Internet & Cable", "Moving Coordination", "New Home Setup"],
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "We offer expert consulting services for real estate, mortgage, tax, accounting, investments, market trends, and financing options. Our team provides personalized advice to help you make informed decisions.",
    features: ["Investment Strategy", "Market Analysis", "Financial Planning", "Property Consulting"],
  },
];

const Services = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Services | BS Realty LLC - Real Estate, Mortgage & More</title>
        <meta name="description" content="Explore BS Realty LLC's comprehensive services: real estate, mortgage solutions, tax & accounting, home improvement, moving assistance, and expert consulting." />
      </Helmet>

      {/* Hero */}
      <section className="py-32 bg-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              What We Offer
            </span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              We specialize in providing a one-stop solution for all your needs, whether you are buying, 
              selling, renting, or improving your property. We also offer services in tax and accounting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-primary hover:underline">Home</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-muted-foreground">Services</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-section text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact us today to discuss how we can help you achieve your real estate and financial goals.
            </p>
            <Button asChild variant="heroOutline" size="lg">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

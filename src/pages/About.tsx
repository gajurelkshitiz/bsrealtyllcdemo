import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import { Helmet } from "react-helmet-async";

const values = [
  {
    icon: CheckCircle,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in every transaction.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive to exceed expectations and deliver outstanding results.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your goals and satisfaction are at the center of everything we do.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on achieving measurable outcomes for our clients.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      <Helmet>
        <title>About BS Realty LLC | Your Trusted Real Estate Partner</title>
        <meta name="description" content="Learn about BS Realty LLC, your trusted partner for real estate, mortgage, and financial services in Georgia. Meet our expert team and discover our commitment to excellence." />
      </Helmet>

      {/* Hero */}
      <section className="relative py-32 bg-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="About BS Realty" className="w-full h-full object-cover" />
        </div>
        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Us
            </span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Your Trusted Real Estate Partner
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              At BS Realty LLC, we're dedicated to helping you achieve your real estate dreams with 
              comprehensive services and personalized attention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section ref={ref} className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src={heroImage}
                  alt="BS Realty Team"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-display font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="heading-section text-foreground">
                Building Dreams, One Property at a Time
              </h2>
              <p className="text-muted-foreground text-body">
                BS Realty LLC was founded with a vision to provide comprehensive real estate and 
                financial services under one roof. Our team brings together expertise in real estate, 
                mortgage lending, tax & accounting, and home improvement to serve all your property needs.
              </p>
              <p className="text-muted-foreground text-body">
                We believe in building lasting relationships with our clients through trust, 
                transparency, and exceptional service. Whether you're buying your first home, 
                investing in property, or seeking financial guidance, we're here to help you 
                every step of the way.
              </p>
              <Button asChild size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="heading-section text-foreground">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

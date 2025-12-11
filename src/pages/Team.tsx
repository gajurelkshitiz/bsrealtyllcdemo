import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const teamMembers = [
  {
    id: 1,
    name: "Bal Khadka",
    role: "Founder & CEO",
    title: "Licensed Realtor & Mortgage Loan Officer",
    bio: "With over 10 years of experience in real estate and mortgage lending, Bal leads BS Realty with a commitment to exceptional client service and comprehensive solutions.",
    specialties: ["Real Estate", "Mortgage", "Tax Planning", "Investment Strategy"],
    phone: "+1 (706) 261-8948",
    email: "bsrealtyllc@gmail.com",
  },
];

const Team = () => {
  return (
    <Layout>
      <Helmet>
        <title>Our Team | BS Realty LLC - Meet Our Experts</title>
        <meta name="description" content="Meet the dedicated team at BS Realty LLC. Our experienced professionals are committed to helping you achieve your real estate and financial goals." />
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
              Our People
            </span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Our team of dedicated professionals is committed to providing you with the best 
              service and expertise in real estate, mortgage, and financial services.
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
            <span className="text-muted-foreground">Team</span>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card border-0 shadow-xl">
                  <div className="grid md:grid-cols-5 gap-0">
                    <div className="md:col-span-2 bg-gradient-to-br from-primary to-green-dark p-12 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-6">
                          <span className="text-5xl font-display font-bold text-primary-foreground">
                            {member.name.charAt(0)}
                          </span>
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-2">
                          {member.name}
                        </h3>
                        <p className="text-primary-foreground/80 text-sm">{member.role}</p>
                      </div>
                    </div>
                    <div className="md:col-span-3 p-8 md:p-12">
                      <div className="flex items-center gap-2 mb-4">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold text-sm">{member.title}</span>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {member.bio}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Specialties</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.specialties.map((specialty) => (
                            <span
                              key={specialty}
                              className="bg-primary/10 text-primary text-xs font-medium px-3 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href={`tel:${member.phone}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          {member.phone}
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {member.email}
                        </a>
                      </div>

                      <div className="mt-8">
                        <Button asChild>
                          <Link to="/contact">Schedule a Meeting</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-secondary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-section text-foreground mb-6">
              Join Our Team
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals to join our growing team. 
              If you're passionate about real estate and helping clients achieve their dreams, 
              we'd love to hear from you.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "2338 Bundoran Drive, Grovetown, GA 30813",
    link: "https://maps.google.com",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (706) 261-8948",
    link: "tel:+17062618948",
  },
  {
    icon: Mail,
    title: "Email",
    content: "bsrealtyllc@gmail.com",
    link: "mailto:bsrealtyllc@gmail.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    content: "Mon - Fri: 9AM - 6PM",
    link: null,
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us | BS Realty LLC - Get in Touch</title>
        <meta name="description" content="Contact BS Realty LLC for all your real estate, mortgage, and financial service needs. Schedule an appointment or send us a message today." />
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
              Get In Touch
            </span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              We want to hear from you! Please leave us a note and we'll get back to you as soon as possible.
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
            <span className="text-muted-foreground">Contact</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <section className="h-[400px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.8012938231087!2d-82.3008!3d33.4567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDI3JzI0LjEiTiA4MsKwMTgnMDMuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="BS Realty Location"
        />
      </section>

      {/* Contact Content */}
      <section ref={ref} className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-0 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-2"
            >
              <Card className="p-8 md:p-10 bg-card border-0 shadow-xl">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      required
                      className="h-12"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      required
                      className="h-12"
                    />
                  </div>

                  <Input
                    placeholder="Subject"
                    required
                    className="h-12"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Select required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="real-estate">Real Estate</SelectItem>
                        <SelectItem value="mortgage">Mortgage</SelectItem>
                        <SelectItem value="home-improvement">Home Improvement</SelectItem>
                        <SelectItem value="tax-accounting">Tax & Accounting</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select required>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Appointment Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="in-person">In-person</SelectItem>
                        <SelectItem value="virtual">Virtual</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    required
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

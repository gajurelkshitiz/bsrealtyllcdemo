import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Santosh Rijal",
    role: "Amazon.com employee",
    text: "Highly recommended! Very professional and easy going personality!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sunita Pudasaini",
    role: "Amazon.com employee",
    text: "Recommended to everyone who needs seamless real estate and mortgage transaction.",
    rating: 5,
  },
  {
    id: 3,
    name: "Thir Dangal",
    role: "Professor @ Augusta University",
    text: "Down to earth personality, very talented realtor and loan officer.",
    rating: 5,
  },
  {
    id: 4,
    name: "Ritu Neupane Dangal",
    role: "Self-Employed",
    text: "Exceptional character, made my first home buying process very smooth.",
    rating: 5,
  },
  {
    id: 5,
    name: "Durga Kutal",
    role: "Professor @ Augusta University",
    text: "You can stay peace of mind dealing with realtor Khadka. Highly recommended.",
    rating: 5,
  },
  {
    id: 6,
    name: "Dipak Timilsina",
    role: "Business Owner",
    text: "Wow, he is amazing! I plan to purchase more investment property with him in future.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const itemsPerView = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [maxIndex]);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="heading-section text-foreground mb-4">Customer Ratings</h2>
          <p className="text-muted-foreground text-body">
            See what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: `-${currentIndex * (100 / itemsPerView + 2)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className="flex-shrink-0 w-full md:w-[calc(33.333%-1rem)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-card border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <p className="text-foreground italic mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-green-dark flex items-center justify-center">
                        <span className="text-primary-foreground font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              disabled={currentIndex === maxIndex}
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

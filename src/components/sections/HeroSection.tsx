import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

const properties = [
  {
    id: 1,
    location: "Loganville, Georgia",
    address: "3303 Hawthorn Farm Blvd",
    price: "$472,000",
    status: "Sold",
    image: heroImage,
  },
  {
    id: 2,
    location: "Augusta, Georgia",
    address: "3620 Columbine Dr.",
    price: "$139,000",
    status: "Sold",
    image: heroImage,
  },
  {
    id: 3,
    location: "Evans, Georgia",
    address: "824 Nuttall St.",
    price: "$560,000",
    status: "Sold",
    image: heroImage,
  },
  {
    id: 4,
    location: "Evans, Georgia",
    address: "2993 Rosewood Dr.",
    price: "$458,000",
    status: "Sold",
    image: heroImage,
  },
];

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % properties.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % properties.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + properties.length) % properties.length);

  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={properties[currentSlide].image}
            alt={properties[currentSlide].address}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full container flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-primary-foreground/80 mb-4"
            >
              <MapPin size={18} />
              <span className="text-sm font-medium">{properties[currentSlide].location}</span>
            </motion.div>

            <h1 className="heading-display text-primary-foreground mb-6">
              {properties[currentSlide].address}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button variant="hero" size="lg">
                {properties[currentSlide].status} | {properties[currentSlide].price}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/properties">View All Properties</Link>
              </Button>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Schedule a Tour</Link>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute bottom-8 right-8 flex gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ChevronLeft className="text-primary-foreground" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
          >
            <ChevronRight className="text-primary-foreground" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {properties.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-4 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

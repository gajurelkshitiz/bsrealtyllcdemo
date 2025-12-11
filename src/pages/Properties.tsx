import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Square, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-home.jpg";
import { Helmet } from "react-helmet-async";

const properties = [
  {
    id: 1,
    title: "3303 Hawthorn Farm Blvd",
    location: "Loganville, Georgia",
    price: "$472,000",
    status: "Sold",
    beds: 4,
    baths: 3,
    sqft: "2,850",
    image: heroImage,
  },
  {
    id: 2,
    title: "3620 Columbine Dr.",
    location: "Augusta, Georgia",
    price: "$139,000",
    status: "Sold",
    beds: 3,
    baths: 2,
    sqft: "1,650",
    image: heroImage,
  },
  {
    id: 3,
    title: "824 Nuttall St.",
    location: "Evans, Georgia",
    price: "$560,000",
    status: "Sold",
    beds: 5,
    baths: 4,
    sqft: "3,200",
    image: heroImage,
  },
  {
    id: 4,
    title: "2993 Rosewood Dr.",
    location: "Evans, Georgia",
    price: "$458,000",
    status: "Sold",
    beds: 4,
    baths: 3,
    sqft: "2,750",
    image: heroImage,
  },
  {
    id: 5,
    title: "2985 Rosewood Dr.",
    location: "Evans, Georgia",
    price: "$449,900",
    status: "Sold",
    beds: 4,
    baths: 3,
    sqft: "2,680",
    image: heroImage,
  },
  {
    id: 6,
    title: "1534 Willow Bay Dr.",
    location: "Evans, Georgia",
    price: "$280,000",
    status: "Sold",
    beds: 3,
    baths: 2,
    sqft: "1,890",
    image: heroImage,
  },
];

const filters = ["All", "For Sale", "Sold", "For Rent"];

const Properties = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = properties.filter(
    (p) => activeFilter === "All" || p.status === activeFilter
  );

  return (
    <Layout>
      <Helmet>
        <title>Properties | BS Realty LLC - Browse Our Listings</title>
        <meta name="description" content="Browse our selection of properties in Georgia. From luxury homes to starter houses, find your perfect property with BS Realty LLC." />
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
              Our Listings
            </span>
            <h1 className="heading-display text-primary-foreground mb-6">
              Properties
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Explore our curated selection of properties. From cozy starter homes to luxurious estates, 
              we have the perfect property for you.
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
            <span className="text-muted-foreground">Properties</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {property.status}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-foreground/90 text-primary-foreground text-lg font-bold px-4 py-2 rounded-lg">
                        {property.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                      {property.title}
                    </h3>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground pb-4 border-b border-border">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        {property.beds} Beds
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        {property.baths} Baths
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        {property.sqft} sqft
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="w-full mt-4 justify-between">
                      <Link to="/contact">
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Properties;

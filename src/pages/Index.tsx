import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>BS Realty LLC | Premier Real Estate & Mortgage Services in Georgia</title>
        <meta name="description" content="BS Realty LLC provides comprehensive real estate, mortgage, tax & accounting services in Georgia. Buy, sell, or rent your dream property with our expert team." />
        <meta name="keywords" content="real estate georgia, mortgage services, home buying, property selling, tax accounting, home improvement, augusta georgia realtor" />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <StatsSection />
      <CoursesSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;

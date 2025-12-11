import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const courses = [
  {
    id: 1,
    icon: GraduationCap,
    title: "Licensing Exam Prep",
    price: "$149",
    description: "Expert prelicensing exam preparation and counseling for aspiring real estate professionals and mortgage loan officers.",
    students: 50,
    lessons: 65,
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Business Counseling",
    price: "$139",
    description: "Comprehensive business counseling services, including business establishment, tax preparation, bookkeeping, and payroll.",
    students: 35,
    lessons: 42,
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Investment Strategies",
    price: "$99",
    description: "Specialized training in various investment strategies including stocks, forex, ETFs, bonds, REITs, and real estate.",
    students: 20,
    lessons: 85,
  },
];

export const CoursesSection = () => {
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
            Learn & Grow
          </span>
          <h2 className="heading-section text-foreground mb-4">Courses</h2>
          <p className="text-muted-foreground text-body">
            We offer a wide range of services including Business Counseling, online training on Investment Strategies, 
            Real Estate and Mortgage pre-licensing, post-licensing, exam preparation, and continuing education courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="overflow-hidden bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary to-green-dark flex items-center justify-center">
                  <course.icon className="w-20 h-20 text-primary-foreground/90" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {course.title}
                    </h3>
                    <span className="text-primary font-bold text-lg">{course.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.students} Students</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {course.lessons} Lessons
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg">
            <Link to="/contact">Enroll Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

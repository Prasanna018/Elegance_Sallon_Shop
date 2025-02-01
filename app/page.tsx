"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scissors, Star, Users, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const services = [
  {
    title: "Haircut & Styling",
    description: "Expert cuts and styling for all hair types",
    icon: Scissors,
    price: "$30+"
  },
  {
    title: "Color & Highlights",
    description: "Professional coloring services",
    icon: Star,
    price: "$75+"
  },
  {
    title: "Facial Treatments",
    description: "Rejuvenating facial care",
    icon: Users,
    price: "$50+"
  }
];

export default function Home() {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-4"
          >
            Elegance Beauty Salon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl mb-8"
          >
            Where Beauty Meets Luxury
          </motion.p>
          <Link href="/booking">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Book Appointment
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        ref={servicesRef}
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 bg-background"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        ref={aboutRef}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
        variants={fadeIn}
        className="py-20 bg-muted"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            >
              <h2 className="text-4xl font-bold mb-6">About Us</h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over 15 years of experience, we provide top-notch beauty services in a luxurious and relaxing environment. Our team of skilled professionals is dedicated to making you look and feel your best.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-primary mr-2" />
                  <span>Open 7 Days</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-2" />
                  <span>Prime Location</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  <span>Expert Staff</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-primary mr-2" />
                  <span>Premium Service</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Salon Interior"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
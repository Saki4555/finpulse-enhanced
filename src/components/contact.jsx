"use client";

import { motion as m } from "motion/react";
import { Mail, MapPin } from "lucide-react";
import seoulImage from "../assets/seoul-1000.webp";
import newyorkImage from "../assets/new-york-1000.webp";
import Image from "next/image";
import ContactUsForm from "./contact-us-form";
export default function Contact() {
  // Location data with office information
  const locations = [
    {
      id: 1,
      city: "New York",
      name: "Headquarters",
      address: "123 AI Innovation District, Suite 1000",
      email: "info@likely-parents.com",
      image: newyorkImage,
    },
    {
      id: 2,
      city: "Seoul",
      name: "Asian Office",
      address: "456 Tech Street, Seoul EC2A",
      email: "seoul@likely-parents.com",
      image: seoulImage,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden"
    >
      {/* Subtle Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 dark:bg-primary/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/2 dark:bg-primary/4 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.06]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--primary))_1px,transparent_0)] bg-[length:80px_80px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4 px-6 py-2 bg-primary/8 dark:bg-primary/15 rounded-md border border-primary/20"
          >
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Global Presence
            </span>
          </m.div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Connect with our teams pioneering emotionally intelligent AI
          </p>
        </m.div>

        {/* Enhanced Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {locations.map((location, index) => (
            <m.div
              key={location.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-card/70 backdrop-blur-sm border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full">
                {/* Enhanced Location Image with Overlay */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"></div>
                </div>

                {/* Clean Location Details */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    {location.name}
                  </h4>

                  <div className="space-y-4">
                    <div className="flex items-start group/item">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover/item:bg-primary/15 transition-colors duration-300">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {location.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start group/item">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover/item:bg-primary/15 transition-colors duration-300">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <a
                          href={`mailto:${location.email}`}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors duration-300"
                        >
                          {location.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Subtle CTA */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <a
                      href={`mailto:${location.email}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-medium text-sm group/link"
                    >
                      Contact this office
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-16 flex justify-center  w-full">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}

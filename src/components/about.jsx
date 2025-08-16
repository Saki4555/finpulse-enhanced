"use client";

import { useState } from "react";
import { motion as m } from "framer-motion";
import {
  Brain,
  LineChart,
  Wallet,
  ArrowRight,
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Emotional Intelligence Engine",
      description:
        "Advanced affective computing systems that recognize, interpret, and respond to human emotions with genuine empathy and understanding.",
      icon: Brain,
      features: [
        "Emotion recognition",
        "Contextual understanding",
        "Empathetic responses",
      ],
      color: "from-fuchsia-500/10 to-pink-500/10",
      iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    },
    {
      title: "Conversational Mastery",
      description:
        "Natural language processing that goes beyond keywords to understand tone, nuance, and intent for truly meaningful dialogue.",
      icon: LineChart,
      features: [
        "Tone analysis",
        "Intent recognition",
        "Context retention",
      ],
      color: "from-fuchsia-500/10 to-purple-500/10",
      iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    },
    {
      title: "Personalized Connection",
      description:
        "AI companions that adapt to individual personalities, building rapport over time and learning to anticipate emotional needs.",
      icon: Wallet,
      features: [
        "Personality adaptation",
        "Relationship building",
        "Need anticipation",
      ],
      color: "from-fuchsia-500/10 to-violet-500/10",
      iconColor: "text-fuchsia-600 dark:text-fuchsia-400",
    },
  ];

  const stats = [
    { value: "98%", label: "Customer Satisfaction", icon: TrendingUp },
    { value: "2.5M+", label: "Transactions Analyzed", icon: LineChart },
    { value: "15s", label: "Average Setup Time", icon: Clock },
    { value: "24/7", label: "AI Monitoring", icon: Shield },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-fuchsia-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-1/3 w-80 h-80 bg-gradient-to-r from-fuchsia-400/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-violet-500/3 to-fuchsia-500/3 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-md text-primary text-sm font-medium mb-6 border border-primary/20">
              <Zap className="h-4 w-4" />
              EMOTIONALLY INTELLIGENT AI
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Pioneering the Next Generation of{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                AI Companions
              </span>{" "}
              that Truly Connect with People
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge natural language processing, affective computing,
              and behavioral psychology to create AI companions capable of empathy,
              nuance, and genuine emotional exchange
            </p>
          </m.div>
        </div>

        {/* Stats Section */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group text-center bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative"
            >
              <div
                className={`bg-background/70 backdrop-blur-xl border border-border/50 rounded-3xl p-8 flex flex-col justify-between h-full transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${
                  hoveredCard === index
                    ? "shadow-2xl border-primary/40 -translate-y-2"
                    : ""
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`bg-gradient-to-br ${service.color} backdrop-blur-sm p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border border-white/10`}
                  >
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <m.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.15 + idx * 0.1,
                          }}
                          className="flex items-start group/item"
                        >
                          <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-200" />
                          <span className="text-foreground text-sm font-medium">
                            {feature}
                          </span>
                        </m.li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button className="w-full cursor-pointer bg-gradient-to-r from-background to-background/80 border border-primary/30 text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg group-hover:border-primary hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 mt-auto">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* CTA Section */}
        <m.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-fuchsia-500/5 via-pink-500/5 to-purple-500/5 rounded-3xl p-12 md:p-16 border border-fuchsia-500/20 text-center overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-4 right-4 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                Genuine Connection?
              </span>
            </h3>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands who have discovered the difference of truly understanding AI companions
              that listen, understand, and respond in ways that feel personal and meaningful.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <m.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </m.button>

              <m.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-fuchsia-500/30 text-fuchsia-600 hover:bg-fuchsia-500/10 hover:border-fuchsia-500 px-8 py-4 text-lg font-medium rounded-xl backdrop-blur-sm transition-all duration-300"
              >
                Schedule a Demo
              </m.button>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}

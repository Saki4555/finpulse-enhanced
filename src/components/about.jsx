'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion as m } from 'motion/react';
import {
  TrendingUp,
  Target,
  CreditCard,
  ArrowRight,
  Shield,
  BarChart3,
  Zap,
  Brain,
  LineChart,
  Wallet
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  const services = [
    {
      title: "AI Financial Diagnosis",
      description: "Deep analysis of financial data using machine learning to identify trends, measure financial health, and provide a clear path to prosperity.",
      icon: Brain,
      delay: 0.1
    },
    {
      title: "AI Predictive Budgeting",
      description: "Forecast income and expenses with high accuracy, providing an adaptive, intelligent budget in real-time.",
      icon: LineChart,
      delay: 0.2
    },
    {
      title: "AI Subscription Analyzer",
      description: "Automatically detect recurring payments and hidden subscriptions, with recommendations to cancel or renegotiate.",
      icon: Wallet,
      delay: 0.3
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
              AI-Powered Finance
            </span>
          </m.div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              We are an AI-first company
            </span>
            <br />
            revolutionizing personal finance
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Harness the power of Artificial Intelligence for smarter financial decisions.
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-3xl mx-auto">
            Our suite of AI tools provides hyper-personalized strategies, predictive analytics, and automated financial guidance to secure your economic future.
          </p>
        </m.div>

        {/* Services Grid */}
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <m.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="h-full"
            >
              <Card
                className="bg-background/60 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-xl group h-full flex flex-col"
              >
                <CardContent className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-xl group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="w-fit p-0 text-primary hover:text-secondary group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </m.div>
          ))}
        </m.div>

        {/* CTA Button */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group"
          >
            Learn More About Our AI
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" />
          </Button>
        </m.div>
      </div>
    </section>
  );
}
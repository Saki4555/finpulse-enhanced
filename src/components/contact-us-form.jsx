'use client';
import React, { useState } from 'react';
import { Mail,  MapPin, Github, Twitter, Facebook, Instagram, Send } from 'lucide-react';
import Link from 'next/link';

export default function ContactUsForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    message: '',
    errors: {},
    submitting: false,
    submitted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    // Console log only
    console.log('Form submitted:', {
      name: state.name,
      email: state.email,
      message: state.message,
    });

    setState({
      ...state,
      submitting: false,
      submitted: true,
    });
  };

  return (
    <section className="w-full max-w-screen-md px-2">
      <h2 className="mt-4 mb-8 bg-gradient-to-r from-foreground to-foreground/90 bg-clip-text text-center text-3xl md:text-4xl font-bold text-transparent">
        Let's Start a Conversation
      </h2>
      <div className="bg-background/70 backdrop-blur-xl rounded-2xl border border-border/50 shadow-xl overflow-hidden">
        <div className="grid w-full items-start gap-8 md:grid-cols-2">
          <form className="space-y-6 p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label htmlFor="name" className="text-foreground font-medium">Name</label>
              <input
                id="name"
                type="text"
                required
                className="bg-background flex h-12 w-full rounded-lg border border-border px-4 py-3 text-sm shadow-inner outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Enter your name"
                name="name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-foreground font-medium">Email</label>
              <input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="bg-background flex h-12 w-full rounded-lg border border-border px-4 py-3 text-sm shadow-inner outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                name="email"
                required
              />
              {state.errors.email && (
                <p className="text-sm text-red-500">{state.errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-foreground font-medium">Message</label>
              <textarea
                className="bg-background ring-offset-background flex min-h-[120px] w-full rounded-lg border border-border px-4 py-3 text-sm shadow-inner outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
                id="message"
                placeholder="How can we help you?"
                name="message"
              />
              {state.errors.message && (
                <p className="text-sm text-red-500">{state.errors.message}</p>
              )}
            </div>

            <button
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <span className="flex items-center">
                  <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </button>
          </form>

          <div className="p-6 md:p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
            <h3 className="mb-6 text-2xl font-semibold text-foreground">Connect with Us</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a href="mailto:info@likely-parents.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@likely-parents.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Office</h4>
                  <p className="text-muted-foreground">
                    New York, NY<br />
                    Seoul, South Korea
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium text-foreground mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Twitter className="h-5 w-5 text-primary" />
                  </Link>
                  <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Facebook className="h-5 w-5 text-primary" />
                  </Link>
                  <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Instagram className="h-5 w-5 text-primary" />
                  </Link>
                  <Link href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

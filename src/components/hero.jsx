"use client";
import { Particles } from "@/components/ui/particles";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "../assets/hero-image.webp";
import heroImageDark from "../assets/hero-image-dark.webp";

import { motion as m } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative container mx-auto flex w-full flex-col items-center p-4 pt-28 pb-0 xl:px-6"
    >
      <div className="flex w-full max-w-3xl flex-col items-center gap-4">
        <m.p
          animate={{
            transform: "translateY(0)",
            opacity: 1,
            filter: "blur(0)",
          }}
          initial={{
            transform: "translateY(-20px)",
            opacity: 0,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.6,
            delay: 0,
            ease: "easeOut",
          }}
          className="border-border bg-muted/50 flex w-fit items-center justify-center gap-1 rounded-md border px-3 py-2 text-xs sm:text-sm font-semibold transition-[gap] ease-out hover:gap-3"
        >
          <span className="flex items-center gap-2">
            <span className="uppercase">
              Emotionally Intelligent AI Agents
            </span>
          </span>
        </m.p>
        <m.h1
          animate={{
            transform: "translateY(0)",
            opacity: 1,
            filter: "blur(0)",
          }}
          initial={{
            transform: "translateY(-20px)",
            opacity: 0,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="font-heading from-foreground bg-gradient-to-b to-neutral-800/70 bg-clip-text text-center text-4xl leading-none font-semibold text-balance whitespace-pre-wrap text-transparent sm:text-5xl lg:text-7xl xl:leading-[5rem] dark:to-neutral-400/80"
        >
          Pioneering the Next Generation of AI Companions
        </m.h1>
        <m.div
          animate={{
            transform: "translateY(0)",
            opacity: 1,
            filter: "blur(0)",
          }}
          initial={{
            transform: "translateY(-20px)",
            opacity: 0,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            ease: "easeOut",
          }}
          className="mt-6"
        >
          <a
            href="#"
            className={cn(
              buttonVariants({
                size: "lg",
              })
            )}
          >
            <span className="font-semibold">Discover likely-parents AI</span>

            
          </a>
        </m.div>
      </div>
      <div className="relative mt-14 flex w-full max-w-7xl">
        <m.div
          animate={{
            transform: "translateY(0)",
            opacity: 1,
            filter: "blur(0)",
          }}
          initial={{
            transform: "translateY(20px)",
            opacity: 0,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="bg-accent dark:bg-accent/40 ring-border z-10 aspect-video w-full rounded-2xl p-1 ring-1 ring-inset md:p-2"
        >
          <div className="relative w-full overflow-hidden rounded-xl">
            <Image
              src={heroImage}
              alt="Dashboard"
              className="bg-muted dark:hidden  aspect-video w-full object-cover"
              width={1920}
              height={1080}
            />
            <Image
              src={heroImageDark}
              alt="Dashboard"
              className="bg-muted hidden dark:block  aspect-video w-full object-cover"
              width={1920}
              height={1080}
            />
          </div>
        </m.div>
        <div className="from-background/70 via-primary/20 pointer-events-none absolute right-0 bottom-0 left-0 z-40 h-[60%] bg-gradient-to-t to-transparent" />
        <m.div
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            ease: "easeOut",
          }}
          className="absolute top-0 z-0 h-5 w-full rounded-xl bg-primary/80 blur-[20px] sm:h-10 md:h-20 md:blur-[100px] dark:bg-primary/60 dark:blur-[40px] sm:dark:top-10 md:dark:blur-[100px]"
        />
      </div>
      <Particles
        className="absolute inset-0 z-0 h-[80%]"
        quantity={150}
        ease={80}
        refresh
        accordingToTheme={true}
      />
    </section>
  );
}

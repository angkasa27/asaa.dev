"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { LuArrowLeft, LuHouse, LuGithub } from "react-icons/lu";
import { SiLinkedin } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { VelocityScroll } from "@/components/fragments/velocity-scroll";
import { useEffect, useState } from "react";

export function NotFoundContainer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingElements = [
    { id: 1, delay: 0, x: 20, y: 30 },
    { id: 2, delay: 0.5, x: 80, y: 20 },
    { id: 3, delay: 1, x: 60, y: 70 },
    { id: 4, delay: 1.5, x: 10, y: 80 },
    { id: 5, delay: 2, x: 90, y: 60 },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.map(({ id, delay, x, y }) => (
          <motion.div
            key={id}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center space-y-8 z-10 max-w-2xl mx-auto px-6">
        {/* 404 with glitch effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
          className="relative"
        >
          <motion.h1
            className="text-8xl sm:text-9xl font-bold tracking-tighter"
            animate={{
              textShadow: [
                "0 0 0 transparent",
                "2px 2px 0 hsl(var(--primary))",
                "0 0 0 transparent",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            404
          </motion.h1>

          {/* Glitch overlay */}
          <motion.div
            className="absolute inset-0 text-8xl sm:text-9xl font-bold tracking-tighter text-primary/30"
            animate={{
              x: [0, 2, -2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          >
            404
          </motion.div>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">
            Oops! You&apos;ve wandered off the beaten path
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto">
            The page you&apos;re looking for seems to have vanished into the
            digital void. But don&apos;t worry, even the best developers get
            lost sometimes! 🚀
          </p>
        </motion.div>

        {/* Fun fact with animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="p-4 rounded-lg border bg-secondary/50 backdrop-blur-sm"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">Fun fact:</span> The
            first 404 error occurred in 1993 at CERN. You&apos;re now part of a
            30+ year tradition! 🎉
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild size="lg" className="group">
            <Link href="/" className="flex items-center gap-2">
              <LuHouse className="size-4 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild className="group">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2"
            >
              <LuArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </button>
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex gap-4 justify-center items-center pt-8"
        >
          <p className="text-sm text-muted-foreground">
            While you&apos;re here, check out:
          </p>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" asChild className="group">
              <Link
                href="https://github.com/angkasa27"
                className="hover:text-primary"
              >
                <LuGithub className="size-4 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="group">
              <Link
                href="https://linkedin.com/in/angkasa27"
                className="hover:text-primary"
              >
                <SiLinkedin className="size-4 group-hover:scale-110 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scrolling text at bottom */}
      <div className="absolute bottom-8 left-0 right-0">
        <VelocityScroll
          baseVelocity={2}
          className="text-muted-foreground/30 text-sm"
        >
          404 ERROR • PAGE NOT FOUND •
        </VelocityScroll>
      </div>
    </div>
  );
}

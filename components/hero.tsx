"use client"

import { motion } from "framer-motion"
import { Phone, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const particles = [
    { left: "8%", top: "28%", size: 4, delay: 0 },
    { left: "18%", top: "68%", size: 3, delay: 1.2 },
    { left: "32%", top: "22%", size: 5, delay: 0.6 },
    { left: "48%", top: "74%", size: 3, delay: 1.8 },
    { left: "62%", top: "30%", size: 4, delay: 0.9 },
    { left: "78%", top: "62%", size: 5, delay: 1.5 },
    { left: "90%", top: "36%", size: 3, delay: 2.1 },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
<motion.div
  initial={{ scale: 1 }}
  animate={{ scale: 1.08 }}
  transition={{
    duration: 18,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut",
  }}
  className="absolute inset-0 z-0"
>
  <Image
    src="/images/hero-nails.png"
    alt="Luxury nail salon interior"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/65 to-background" />
  <div className="absolute inset-0 bg-gradient-to-r from-background/75 via-background/35 to-transparent" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(212,175,55,0.16),transparent_35%)]" />
</motion.div>
{/* Luxury Floating Particles */}
<div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
  {particles.map((particle, index) => (
    <motion.span
      key={index}
      className="absolute rounded-full bg-primary shadow-[0_0_18px_rgba(212,175,55,0.65)]"
      style={{
        left: particle.left,
        top: particle.top,
        width: particle.size,
        height: particle.size,
      }}
      initial={{ opacity: 0, scale: 0.4, y: 0 }}
      animate={{
        opacity: [0, 0.8, 0],
        scale: [0.6, 1.4, 0.6],
        y: [0, -30, 0],
      }}
      transition={{
        duration: 5,
        delay: particle.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  ))}
</div>
{/* Cinematic Gold Glow */}
<motion.div
  className="pointer-events-none absolute left-[-10%] top-[20%] z-[1] h-[420px] w-[420px] rounded-full bg-primary/20 blur-[120px]"
  animate={{
    x: [0, 80, 20, 0],
    y: [0, -40, 30, 0],
    opacity: [0.25, 0.45, 0.3, 0.25],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

<motion.div
  className="pointer-events-none absolute right-[8%] top-[35%] z-[1] h-[300px] w-[300px] rounded-full bg-primary/10 blur-[100px]"
  animate={{
    x: [0, -60, 20, 0],
    y: [0, 35, -20, 0],
    opacity: [0.18, 0.35, 0.22, 0.18],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
{/* Floating Nail Showcase */}
<motion.div
  initial={{ opacity: 0, x: 80, y: "-50%" }}
  animate={{ opacity: 1, x: 0, y: "-50%" }}
  transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
  className="absolute right-8 top-1/2 z-10 hidden h-[460px] w-[390px] xl:block"
>
  {/* Main floating card */}
  <motion.div
    animate={{
      y: [0, -16, 0],
      rotate: [0, 1.5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-0 top-8 h-[340px] w-[255px] overflow-hidden rounded-[2rem] border border-primary/40 bg-background/40 shadow-[0_0_70px_rgba(212,175,55,0.22)] backdrop-blur-xl"
  >
    <Image
      src="/images/gallery-1.png"
      alt="Luxury nail design"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
    <div className="absolute bottom-5 left-5 right-5">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary">
        Signature Look
      </p>
      <h3 className="mt-2 font-serif text-3xl leading-none text-foreground">
        Luxury Nails
      </h3>
    </div>
  </motion.div>

  {/* Secondary floating card */}
  <motion.div
    animate={{
      y: [0, 18, 0],
      rotate: [-8, -4, -8],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-0 top-0 h-[190px] w-[170px] overflow-hidden rounded-[1.5rem] border border-primary/30 bg-background/30 shadow-[0_0_50px_rgba(212,175,55,0.16)] backdrop-blur-xl"
  >
    <Image
      src="/images/gallery-2.png"
      alt="Elegant nail art"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
  </motion.div>

  {/* Third floating card */}
  <motion.div
    animate={{
      y: [0, -14, 0],
      rotate: [7, 3, 7],
    }}
    transition={{
      duration: 7.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-8 bottom-4 h-[180px] w-[180px] overflow-hidden rounded-[1.5rem] border border-primary/30 bg-background/30 shadow-[0_0_50px_rgba(212,175,55,0.16)] backdrop-blur-xl"
  >
    <Image
      src="/images/gallery-5.png"
      alt="French tip nails"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
  </motion.div>

  {/* Floating discount badge */}
  <motion.div
    animate={{
      scale: [1, 1.06, 1],
      rotate: [0, -2, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-8 bottom-0 rounded-full border border-primary/50 bg-primary px-7 py-5 text-center text-primary-foreground shadow-[0_0_45px_rgba(212,175,55,0.35)]"
  >
    <p className="text-xs font-bold uppercase tracking-[0.25em]">
      Limited
    </p>
    <p className="font-serif text-4xl leading-none">20%</p>
    <p className="text-xs font-bold uppercase tracking-[0.2em]">
      Off
    </p>
  </motion.div>

  {/* Shine line */}
  <motion.div
    animate={{ x: ["-120%", "120%"] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="absolute top-24 h-[360px] w-24 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent"
  />
</motion.div>
      {/* Promo Banner */}
<motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="absolute top-0 left-0 right-0 z-20 border-b border-primary/30 bg-gradient-to-r from-primary/95 via-primary to-primary/95 backdrop-blur-md px-4 py-3 shadow-[0_8px_30px_rgba(212,175,55,0.18)]"
>
  <div className="container mx-auto flex flex-col items-center justify-center gap-1 text-center text-primary-foreground sm:flex-row sm:gap-3">
    <div className="flex items-center gap-2">
      <Sparkles className="h-4 w-4" />
      <span className="text-xs font-bold uppercase tracking-[0.28em]">
        Under New Management
      </span>
      <Sparkles className="h-4 w-4" />
    </div>

    <div className="hidden h-4 w-px bg-primary-foreground/40 sm:block" />

    <p className="text-sm font-semibold tracking-wide md:text-base">
      <span className="font-extrabold">20% OFF</span> select services
      <span className="mx-2 text-primary-foreground/60">•</span>
      Limited Time Only
    </p>
  </div>
</motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-28 md:pt-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4">
              Luxury Nail Salon
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-6"
          >
            <span className="text-gradient-gold">Allure</span>
            <br />
            <span className="text-foreground">Modern Nails Spa</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Indulge in the ultimate nail care experience. Where artistry meets elegance in the heart of Longview, Texas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="tel:+19039449049"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 glow-gold"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-primary/50 hover:border-primary text-foreground hover:text-primary px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { Briefcase, Phone, Sparkles } from "lucide-react"
import { useRef } from "react"

export function JoinTeam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="join-team" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.10),transparent_35%)]" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            Opportunities Available
          </span>

          <h2 className="font-serif text-4xl md:text-6xl font-medium mb-6">
            <span className="text-gradient-gold">Join</span>{" "}
            <span className="text-foreground">Our Team</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Allure Modern Nails Spa is offering professional nail station rentals and welcoming skilled nail technicians to join our salon.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-primary/25 bg-card/70 p-8 shadow-[0_0_40px_rgba(212,175,55,0.08)] backdrop-blur-sm"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Sparkles className="h-7 w-7" />
            </div>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              Station Rental
            </h3>

            <p className="text-muted-foreground mb-6">
              Professional nail station rental available in a clean, elegant salon environment.
            </p>

            <div className="text-primary font-serif text-4xl">
              $150
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-3xl border border-primary/40 bg-primary/10 p-8 shadow-[0_0_55px_rgba(212,175,55,0.14)] backdrop-blur-sm"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <Briefcase className="h-7 w-7" />
            </div>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              Station + Limited Supplies
            </h3>

            <p className="text-muted-foreground mb-6">
              Nail station rental option with limited supplies included for added convenience.
            </p>

            <div className="text-primary font-serif text-4xl">
              $250
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-3xl border border-primary/25 bg-card/70 p-8 shadow-[0_0_40px_rgba(212,175,55,0.08)] backdrop-blur-sm"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <Phone className="h-7 w-7" />
            </div>

            <h3 className="font-serif text-2xl text-foreground mb-3">
              Nail Techs Wanted
            </h3>

            <p className="text-muted-foreground mb-6">
              We are looking for talented nail technicians. Earn 60% commission in a modern and professional salon.
            </p>

            <a
              href="tel:+19039449049"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(212,175,55,0.35)]"
            >
              Call 903-944-9049
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
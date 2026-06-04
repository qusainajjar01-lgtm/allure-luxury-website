"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
          >
            <span className="text-gradient-gold">Luxury Nail Care</span>{" "}
<span className="text-foreground">in Longview</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
  Welcome to Allure Modern Nails Spa in Longview, Texas. Under new management, our goal is to create a clean, relaxing, and beautiful salon experience where every guest feels cared for from the moment they walk in.
</p>
            <p>
  From pedicures and manicures to nail enhancements, lashes, waxing, and facial services, our team focuses on quality, comfort, and attention to detail with every visit.
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "Clean", label: "Sterilized Tools" },
{ number: "Walk-Ins", label: "Welcome Daily" },
{ number: "Modern", label: "Nail Designs" },
{ number: "Luxury", label: "Salon Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-serif text-gradient-gold font-medium">{stat.number}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

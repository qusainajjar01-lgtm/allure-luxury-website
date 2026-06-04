"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Shield, Heart, Award } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Premium Products",
    description: "We use only the finest, salon-grade products from top brands to ensure long-lasting, beautiful results.",
  },
  {
    icon: Shield,
    title: "Hygiene First",
    description: "Your safety is our priority. All tools are sterilized and single-use items are disposed of properly.",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every client receives individualized attention and customized treatments tailored to their needs.",
  },
  {
    icon: Award,
    title: "Expert Artists",
    description: "Our skilled technicians are trained in the latest techniques and trends in nail artistry.",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4"
          >
            Why Choose Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium"
          >
            <span className="text-foreground">The </span>
            <span className="text-gradient-gold">Allure</span>
            <span className="text-foreground"> Difference</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-serif text-xl font-medium mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

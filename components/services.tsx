"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const services = [
  {
    category: "Pedicures",
    items: [
      { name: "Regular Pedicure", price: "$35" },
      { name: "Deluxe Lavender Pedicure", price: "$40" },
      { name: "Allure Signature Pedicure", price: "$50" },
      { name: "Organic Lavender / Pearl / Mango Pedicure", price: "$55" },
      { name: "Fresh Organic Aloe Vera / Avocado / Volcano Pedicure", price: "$60" },
      { name: "Signature Luxury Pedicure", price: "$70" },
    ],
  },
  {
    category: "Nail Enhancements",
    items: [
      { name: "Clear Powder with Regular Polish", price: "New $40 / Fill $30" },
      { name: "Dip & Acrylic Pink & White Set", price: "New $55 / Fill $50" },
      { name: "Gel-X / Sculpted Gel Builder", price: "New $60 / Fill $50" },
      { name: "Nail Soak Off + Manicure", price: "$40" },
      { name: "Nail Soak Off Only", price: "$30" },
      { name: "Manicure + Gel Polish", price: "$40" },
    ],
  },
  {
    category: "Add-Ons & Design",
    items: [
      { name: "Gel Polish Change Hands or Toes", price: "$25" },
      { name: "Design", price: "$10 & Up" },
      { name: "Shapes or Lengths", price: "$5" },
      { name: "Gel Polish on Nails or Toes", price: "$25" },
      { name: "Pedicure Gel Polish Add-On", price: "+$15" },
      { name: "Gel Removal", price: "$5" },
    ],
  },
  {
    category: "Waxing, Lashes & Facial",
    items: [
      { name: "Eyebrows", price: "$15" },
      { name: "Lips / Chin", price: "$10 / $15 & Up" },
      { name: "Classic Eyelash Extension", price: "New $125 / Fill $75" },
      { name: "Hybrid Eyelash Extension", price: "New $150 / Fill $85" },
      { name: "Volume Eyelash Extension", price: "New $175 / Fill $105" },
      { name: "Hydro Facial", price: "$85" },
    ],
  },
]

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Services
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-4"
          >
            <span className="text-gradient-gold">Luxury</span>
            <span className="text-foreground"> Treatments</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Discover our range of premium nail services designed to pamper and beautify
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:glow-gold-subtle transition-all duration-500"
            >
              <h3 className="font-serif text-2xl font-medium mb-6 text-gradient-gold">
                {service.category}
              </h3>

              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                 <div
  key={itemIndex}
  className="group flex flex-col gap-2 py-4 border-b border-border/30 last:border-0 sm:flex-row sm:items-center sm:justify-between"
>
  <span className="text-foreground leading-relaxed pr-2">
    {item.name}
  </span>

  <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary transition-all duration-300 group-hover:border-primary/60 group-hover:bg-primary/15">
    {item.price}
  </span>
</div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            * Prices may vary based on nail length and design complexity. Contact us for custom quotes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

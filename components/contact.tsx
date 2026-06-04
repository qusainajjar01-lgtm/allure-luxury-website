"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Phone, Clock } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}
import Link from "next/link"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "3080 N Eastman Rd Suite 109",
    subcontent: "Longview, TX 75605",
    link: "https://maps.google.com/?q=3080+N+Eastman+Rd+Suite+109+Longview+TX+75605",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "903-944-9049",
    subcontent: "Book your appointment today",
    link: "tel:+19039449049",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Mon-Sat: 11:00 AM - 8:00 PM",
    subcontent: "Sunday: 12:00 PM - 6:00 PM",
    link: null,
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4"
          >
            Get In Touch
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium"
          >
            <span className="text-gradient-gold">Contact</span>
            <span className="text-foreground"> & Location</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {info.link ? (
                <Link
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block group bg-card border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 hover:glow-gold-subtle transition-all duration-500"
                >
                  <ContactCardContent info={info} />
                </Link>
              ) : (
                <div className="bg-card border border-border/50 rounded-2xl p-8 text-center">
                  <ContactCardContent info={info} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">Follow us on social media</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://www.instagram.com/alluremodernlongview/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-border/50 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <InstagramIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61590650064998"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-card border border-border/50 rounded-full flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
            >
              <FacebookIcon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden border border-border/50 glow-gold-subtle"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.742!2d-94.74147!3d32.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8636d0a0a0a0a0a0%3A0x0!2s3080%20N%20Eastman%20Rd%20Suite%20109%2C%20Longview%2C%20TX%2075605!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Allure Modern Nails Spa Location"
            className="grayscale contrast-125 invert opacity-80"
          />
        </motion.div>
      </div>
    </section>
  )
}

function ContactCardContent({ info }: { info: typeof contactInfo[number] }) {
  return (
    <>
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        <info.icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="font-serif text-xl font-medium mb-2 text-foreground">{info.title}</h3>
      <p className="text-foreground">{info.content}</p>
      <p className="text-muted-foreground text-sm mt-1">{info.subcontent}</p>
    </>
  )
}

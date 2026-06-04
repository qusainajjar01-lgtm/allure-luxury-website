"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

const galleryImages = [
  { src: "/images/gallery-1.png", alt: "Elegant gold accent nail design" },
  { src: "/images/gallery-2.png", alt: "Pink and nude gel nails with gold details" },
  { src: "/images/gallery-3.png", alt: "Luxury pedicure treatment" },
  { src: "/images/gallery-4.png", alt: "Modern geometric nail art" },
  { src: "/images/gallery-5.png", alt: "French tip acrylic nails" },
  { src: "/images/gallery-6.png", alt: "Luxury spa interior" },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4" ref={ref}>
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-4"
            >
              Our Work
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium"
            >
              <span className="text-foreground">Stunning </span>
              <span className="text-gradient-gold">Gallery</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-primary transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative w-full max-w-4xl aspect-square"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain rounded-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

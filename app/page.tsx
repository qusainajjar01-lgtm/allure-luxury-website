import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { JoinTeam } from "@/components/join-team"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Gallery />
      <JoinTeam />
      <Contact />
      <Footer />
    </main>
  )
}

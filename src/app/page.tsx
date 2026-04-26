import { Nav } from "@/components/nav/Nav"
import { Hero } from "@/components/hero/Hero"
import { Problem } from "@/components/problem/Problem"
import { Services } from "@/components/services/Services"
import { Process } from "@/components/process/Process"
import { Why } from "@/components/why/Why"
import { Stack } from "@/components/stack/Stack"
import { CTA } from "@/components/cta/CTA"
import { ContactForm } from "@/components/contact/ContactForm"
import { Footer } from "@/components/footer/Footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Process />
        <Why />
        <Stack />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

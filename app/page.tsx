'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Offerings from '@/components/Offerings'
import TrustedBy from '@/components/TrustedBy'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 dark:from-gray-900 dark:to-gray-800"
    >
      <Hero />
      <About />
      <Offerings />
      <TrustedBy />
      <Testimonials />
      <Contact />
    </motion.main>
  )
}


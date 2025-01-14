'use client'

import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Mission</h2>
                    <p className="text-xl text-center max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                        We harness the power of AI to create innovative solutions that improve personal health,
                        combat climate change, and foster positive habits. Our goal is to make a lasting impact
                        on individuals and the planet.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}


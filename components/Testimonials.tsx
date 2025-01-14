'use client'

import { testimonials } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-700">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    What Our Customers Say
                </motion.h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                        >
                            <p className="text-gray-600 dark:text-gray-300 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    {testimonial.name[0]}
                                </div>
                                <div className="ml-4">
                                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


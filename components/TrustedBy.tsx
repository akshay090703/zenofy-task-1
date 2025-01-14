'use client'

import { companies } from '@/lib/constants'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function TrustedBy() {
    return (
        <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white"
                >
                    Trusted By Industry Leaders
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-center justify-center"
                        >
                            <Image
                                src={company.logo}
                                alt={`${company.name} logo`}
                                width={company.name === 'microsoft' ? 140 : 100}
                                height={company.name === 'microsoft' ? 100 : 60}
                                className="max-w-[120px] h-auto dark:filter dark:invert"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


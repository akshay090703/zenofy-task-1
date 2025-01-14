import { offerings } from '@/lib/constants'
import { motion } from 'framer-motion'

export default function Offerings() {
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-700">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Offerings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offerings.map((offering, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="text-4xl mb-4">{offering.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{offering.title}</h3>
                            <p>{offering.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}


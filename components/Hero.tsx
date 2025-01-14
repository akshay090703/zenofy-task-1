'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Bubble {
    size: number
    left: number
    top: number
    yMovement: number
    xMovement: number
    scale: number
    duration: number
}

export default function Hero() {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
        const bubbleArray = Array.from({ length: 50 }, () => ({
            size: Math.random() * 50 + 10,
            left: Math.random() * 100,
            top: Math.random() * 100,
            yMovement: Math.random() * 100 - 50,
            xMovement: Math.random() * 100 - 50,
            scale: Math.random() + 0.5,
            duration: Math.random() * 10 + 5,
        }));
        setBubbles(bubbleArray);
    }, []);

    return (
        <section className="h-screen flex items-center justify-center text-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10"
            >
                <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">AI for a Better World</h1>
                <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">Transforming Health, Climate, and Habits</p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="#contact"
                        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                className="absolute inset-0 z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {bubbles.map((bubble, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-500 opacity-10"
                        style={{
                            width: bubble.size,
                            height: bubble.size,
                            left: `${bubble.left}%`,
                            top: `${bubble.top}%`,
                        }}
                        animate={{
                            y: [0, bubble.yMovement],
                            x: [0, bubble.xMovement],
                            scale: [1, bubble.scale],
                        }}
                        transition={{
                            duration: bubble.duration,
                            repeat: Infinity,
                            repeatType: 'reverse',
                        }}
                    />
                ))}
            </motion.div>
        </section>
    );
}

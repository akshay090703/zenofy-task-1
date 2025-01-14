'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { User } from 'lucide-react'
import { useUser } from '@/contexts/UserContext'
import { ModeToggle } from './ModeToggle'
import { Skeleton } from './ui/skeleton'

export default function Navbar() {
    const { user, signOut } = useUser();
    const [clicked, setClicked] = useState(false)
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSignOut = () => {
        signOut();
        setClicked(false)
    }

    if (!mounted) {
        return (
            <div className="flex flex-col h-screen justify-center items-center space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        )
    }

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            AI World
                        </Link>
                    </div>
                    <div className="flex items-center gap-3">
                        <ModeToggle />
                        {user ? (
                            <motion.div
                                className="relative"
                            >
                                <User size={24} className="text-gray-600 dark:text-gray-300 cursor-pointer" onClick={() => setClicked(prev => !prev)} />
                                {clicked && <div
                                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10"
                                >
                                    <motion.button
                                        onClick={() => handleSignOut()}
                                        whileTap={{ scale: 0.9 }}
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                                    >
                                        Sign out
                                    </motion.button>
                                </div>}
                            </motion.div>
                        ) : (
                            <Link href="/auth/signin">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                >
                                    Login
                                </motion.button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

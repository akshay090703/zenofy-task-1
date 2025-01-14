'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import axios from "@/lib/axios"
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await axios.post("/auth/forgot-password")

            if (res.status === 200) {
                toast.success("Forgot password instructions sent")
                setEmail('')
            }
        } catch (error) {
            console.error(error)
            toast.error("There was an error")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8"
            >
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">Forgot your password?</h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Enter your email address and we'll send you instructions to reset your password.
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading && "bg-blue-700 px-4 py-2 rounded-md cursor-not-allowed opacity-50"}`}
                        >
                            {loading && <Loader2 className='h-5 w-5 animate-spin mr-3' />}
                            Send reset instructions
                        </motion.button>
                    </div>
                </form>
                <div className="text-center">
                    <Link href="/auth/signin" className="font-medium text-blue-600 hover:text-blue-500">
                        Back to sign in
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}


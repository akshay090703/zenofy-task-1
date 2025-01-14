'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from "@/lib/axios"
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'

export default function Contact() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const res = await axios.post("/contact-mail", { email, message })

            if (res.status === 200) {
                setEmail('')
                setMessage('')
                toast.success("Contact mail sent successfully!")
            }
        } catch (error) {
            console.error(error)
            toast.error("There was an error logging in")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
                <motion.form
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded dark:border-gray-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded dark:border-gray-500"
                            rows={4}
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className={`bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 ${loading && "bg-blue-700 px-4 py-2 rounded-md cursor-not-allowed opacity-50"} flex items-center`}
                    >
                        {loading && <Loader2 className='h-5 w-5 animate-spin mr-3' />}
                        Send Message
                    </button>
                </motion.form>
            </div>
        </section>
    )
}


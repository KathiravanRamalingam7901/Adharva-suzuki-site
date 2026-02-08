'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BlogPost } from '@/data/blogs'

interface BlogCardProps {
    blog: BlogPost
    index: number
}

export default function BlogCard({ blog, index }: BlogCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:border-suzuki-blue/50 hover:shadow-lg"
        >
            <Link href={`/blogs/${blog.id}`} className="relative h-48 w-full overflow-hidden sm:h-56">
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-suzuki-blue backdrop-blur-sm">
                    {blog.category}
                </div>
            </Link>

            <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-center text-xs text-slate-500">
                    <span>{blog.date}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.author}</span>
                </div>

                <Link href={`/blogs/${blog.id}`}>
                    <h3 className="mb-2 text-lg font-bold text-slate-900 transition-colors group-hover:text-suzuki-blue line-clamp-2">
                        {blog.title}
                    </h3>
                </Link>

                <p className="mb-4 text-sm text-slate-600 line-clamp-3 flex-1">
                    {blog.excerpt}
                </p>

                <Link
                    href={`/blogs/${blog.id}`}
                    className="inline-flex items-center text-sm font-semibold text-suzuki-red transition-colors hover:text-red-700"
                >
                    Read Article
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </motion.div>
    )
}

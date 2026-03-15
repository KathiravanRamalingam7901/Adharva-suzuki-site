'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { blogs } from '@/data/blogs'
import { notFound } from 'next/navigation'

export default function BlogDetailPage() {
    const params = useParams()
    const blog = blogs.find((b) => b.id === params.id)

    if (!blog) {
        return notFound()
    }

    // Find related blogs (excluding current one)
    const relatedBlogs = blogs
        .filter((b) => b.id !== blog.id)
        .slice(0, 3)

    return (
        <article className="min-h-screen bg-white pt-24">
            {/* Generic Header Banner (Careers Style) */}
            <motion.section
                className="relative overflow-hidden border-b border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-100 to-suzuki-blue/20" />
                <div className="absolute -right-20 top-10 w-64 h-64 bg-suzuki-red/10 blur-3xl rounded-full" />
                <div className="absolute -left-24 -bottom-12 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />

                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
                    <Link href="/blogs" className="inline-block">
                        <motion.p
                            className="text-xs uppercase tracking-[0.25em] text-suzuki-blue mb-2 hover:underline cursor-pointer"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            Knowledge Hub
                        </motion.p>
                    </Link>
                    <motion.h1
                        className="text-2xl sm:text-3xl font-extrabold text-slate-900"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Blog <span className="text-suzuki-red">Details</span>
                    </motion.h1>
                </div>
            </motion.section>

            {/* Blog Content Section */}
            <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Feature Image */}
                        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl md:h-[400px] md:aspect-auto">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Title and Metadata - BELOW Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-8"
                        >
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                                {blog.title}
                            </h1>
                            <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                                <span>{blog.date}</span>
                                <span className="h-1 w-1 rounded-full bg-slate-300" />
                                <span>{blog.author}</span>
                            </div>
                        </motion.div>

                        {/* Article Body */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-suzuki-blue prose-img:rounded-xl"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Back Link */}
                        <div className="mt-12 border-t border-slate-200 pt-8">
                            <Link
                                href="/blogs"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-suzuki-blue hover:text-suzuki-red"
                            >
                                ← Back to All Blogs
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm">
                            <h3 className="mb-6 text-xl font-bold text-slate-900">Recent Posts</h3>
                            <div className="space-y-6">
                                {relatedBlogs.map((relatedBlog) => (
                                    <Link
                                        key={relatedBlog.id}
                                        href={`/blogs/${relatedBlog.id}`}
                                        className="group flex gap-4"
                                    >
                                        <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200">
                                            <Image
                                                src={relatedBlog.image}
                                                alt={relatedBlog.title}
                                                fill
                                                className="object-cover transition-transform group-hover:scale-110"
                                            />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <span className="mb-1 text-xs text-slate-500">
                                                {relatedBlog.date}
                                            </span>
                                            <h4 className="line-clamp-2 text-sm font-semibold text-slate-900 group-hover:text-suzuki-blue">
                                                {relatedBlog.title}
                                            </h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    )
}

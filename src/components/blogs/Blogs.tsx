import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data/siteData'; 

const CATEGORIES = ['All', 'Patient Care', 'Diagnostics', 'Wellness', 'Nutrition', 'Lifestyle', 'Research'];

const Blogs: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts = activeCategory === 'All'
        ? BLOG_POSTS
        : BLOG_POSTS.filter((post) => post.category === activeCategory);

    return (
        <section className="bg-white py-14 sm:py-20 font-sans min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20">
                
                <div className="text-center mb-10 sm:mb-16 flex flex-col items-center">
                    <span className="text-[#0056b3] font-bold text-[11px] sm:text-[12px] uppercase tracking-[0.1em] mb-2.5 block">
                        Knowledge Hub
                    </span>
                    <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-3.5 tracking-tight">
                        Insights & Education
                    </h2>
                    <div className="w-12 h-[2px] bg-[#0056b3]" />
                    <p className="text-[#575A5F] max-w-2xl mx-auto mt-5 sm:mt-6 leading-relaxed text-[14px] sm:text-[15px] balance">
                        Evidence-based articles on prevention, treatment, and the science of a healthy heart.
                    </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all cursor-pointer border whitespace-nowrap ${
                                activeCategory === cat
                                    ? 'bg-[#0056b3] text-white border-[#0056b3]'
                                    : 'bg-white text-[#575A5F] border-gray-300 sm:border-gray-400 hover:border-[#0056b3] hover:text-[#0056b3]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group flex flex-col bg-white border border-blue-100 rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-blue-200 transition-all duration-300"
                            >
                                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-gray-50 shrink-0">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded text-[10px] sm:text-[11px] font-bold text-[#0056b3] uppercase tracking-wider shadow-sm z-10">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 sm:gap-4 text-[12px] sm:text-[13px] text-[#575A5F] font-medium mb-3">
                                        <span>{post.date}</span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={14} className="text-[#0056b3]" /> {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-[17px] sm:text-[19px] font-semibold text-[#0b1b36] mb-2.5 leading-snug group-hover:text-[#0056b3] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-[14px] sm:text-[15px] text-[#575A5F] leading-[1.55] flex-grow line-clamp-3 balance">
                                        {post.excerpt}
                                    </p>

                                    <div className="text-[#0056b3] text-[13px] sm:text-[14px] font-semibold mt-6 sm:mt-8 flex items-center gap-1 group-hover:gap-2 transition-all shrink-0">
                                        <span>Read Article</span> <span>&rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 sm:py-20 bg-[#F0F6FF]/50 rounded-xl border border-blue-100 max-w-md mx-auto px-4">
                        <p className="text-[14px] sm:text-[15px] text-[#575A5F] font-medium">
                            No articles found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;
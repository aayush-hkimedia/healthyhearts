import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { BLOG_POSTS } from '../../data/siteData'; 

const CATEGORIES = [
    'All',
    'Patient Care',
    'Diagnostics',
    'Wellness',
    'Nutrition',
    'Lifestyle',
    'Research',
];

const Blogs: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredPosts =
        activeCategory === 'All'
            ? BLOG_POSTS
            : BLOG_POSTS.filter((post) => post.category === activeCategory);

    return (
        <section className="bg-white py-20 font-sans min-h-screen">
            <div className="max-w-7xl mx-auto px-6 mb-20">
                
                {/* Header Section matching Services */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <span className="text-[#0056b3] font-bold text-[12px] uppercase tracking-[0.1em] mb-3">
                        Knowledge Hub
                    </span>
                    <h2 className="text-[32px] md:text-[40px] font-semibold text-[#0b1b36] mb-4">
                        Insights & Education
                    </h2>
                    <div className="w-12 h-[2px] bg-[#0056b3]"></div>
                    <p className="text-[#575A5F] max-w-2xl mx-auto mt-6 leading-relaxed text-[15px]">
                        Evidence-based articles on prevention, treatment, and the
                        science of a healthy heart.
                    </p>
                </div>

               
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-[14px] font-semibold transition-all cursor-pointer border ${
                                activeCategory === cat
                                    ? 'bg-[#0056b3] text-white border-[#0056b3]'
                                    : 'bg-white text-[#575A5F] border-gray-400 hover:border-[#0056b3] hover:text-[#0056b3]'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

            
                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPosts.map((post) => (
                            <Link
                                key={post.id}
                                to={`/blog/${post.slug}`}
                                className="group flex flex-col bg-white border border-blue-200 rounded-xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
                            >
                                
                                <div className="relative h-48 w-full overflow-hidden border-b border-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded text-[11px] font-bold text-[#0056b3] uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>

                                {/* Content Body */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-[13px] text-[#575A5F] font-medium mb-4">
                                        <span>{post.date}</span>
                                        <span className="flex items-center gap-1.5">
                                            <Clock size={14} className="text-[#0056b3]" /> {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-[19px] font-semibold text-[#0b1b36] mb-3 leading-snug">
                                        {post.title}
                                    </h3>

                                    <p className="text-[15px] text-[#575A5F] leading-[1.6] flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="text-[#0056b3] text-[14px] font-semibold mt-8 flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Read Article &rarr;
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-[#F0F6FF] rounded-xl border border-gray-200">
                        <p className="text-[15px] text-[#575A5F] font-medium">
                            No articles found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blogs;
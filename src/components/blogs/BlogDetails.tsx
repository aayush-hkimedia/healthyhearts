import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '../../data/siteData';

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main className="font-sans antialiased bg-[#FCFDFF] min-h-screen py-10 sm:py-16 md:py-20 px-4 sm:px-6">
      <article className="max-w-4xl mx-auto bg-white p-5 sm:p-8 md:p-14 rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[#575A5F] hover:text-[#0056b3] transition-colors mb-6 sm:mb-10 text-sm font-semibold"
        >
          <ArrowLeft size={16} /> <span>Back to all articles</span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap text-[13px] sm:text-sm text-[#575A5F] font-medium">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#F8FAFC] border border-gray-200 rounded-lg text-[#0b1b36] font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {post.readTime}
          </span>
        </div>

        <h1 className="text-[24px] sm:text-[32px] md:text-[44px] font-bold text-[#0b1b36] leading-tight tracking-tight mb-6 sm:mb-8">
          {post.title}
        </h1>
        
        <div className="w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2/1] rounded-xl sm:rounded-2xl overflow-hidden mb-8 sm:mb-12 bg-gray-50">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="text-[#575A5F] text-[16px] sm:text-lg leading-relaxed space-y-5 sm:space-y-6 whitespace-pre-line balance">
          {post.content}
        </div>

      </article>
    </main>
  );
};

export default BlogDetails;
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
    <main className="font-sans antialiased bg-[#FCFDFF] min-h-screen py-20 px-6">
      <article className="max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-[#575A5F] hover:text-[#0056b3] transition-colors mb-10 text-sm font-semibold"
        >
          <ArrowLeft size={16} /> Back to all articles
        </Link>

        <div className="flex items-center gap-4 mb-6 flex-wrap text-sm text-[#575A5F] font-medium">
          <span className="px-3 py-1 bg-[#F8FAFC] border border-gray-200 rounded-lg text-[#0b1b36] font-bold uppercase tracking-wider text-[11px]">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {post.readTime}
          </span>
        </div>

        <h1 className="text-[32px] md:text-[44px] font-bold text-[#0b1b36] leading-tight mb-8">
          {post.title}
        </h1>
        
        <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden mb-12">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
        </div>

        <div className="text-[#575A5F] text-lg leading-relaxed space-y-6">
          {post.content}
        </div>

      </article>
    </main>
  );
};

export default BlogDetails;
import type { ReactNode } from "react";

interface BannerProps {
  title: string;
  subtitle: string;
  icons?: ReactNode;
  lastUpdated?: string; // optional last updated text
}

export default function Banner({
  title,
  subtitle,
  icons,
  lastUpdated,
}: BannerProps) {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 text-white border-b border-accent/20">
      
      {/* Decorative Icons Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {icons}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center px-6">
        
        {/* Gradient Animated Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 
                       bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 
                       bg-clip-text text-transparent animate-gradient-x">
          {title}
        </h1>

        <p className="text-slate-300 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>

        {lastUpdated && (
          <p className="mt-2 text-xs text-slate-400">
            Last updated: {lastUpdated}
          </p>
        )}
      </div>
    </section>
  );
}

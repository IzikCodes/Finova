import { useEffect, useRef, useState } from "react";
import Banner from "../components/ui/Banner";
import { Link } from "react-router-dom";

interface Stat {
  target: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    target: 250,
    suffix: "K+",
    label: "Active investors participating in structured capital growth.",
  },
  {
    target: 200,
    suffix: "M+",
    label: "Total transaction volume processed securely.",
  },
  {
    target: 85,
    suffix: "%",
    label: "Average portfolio growth across optimized cycles.",
  },
  {
    target: 120,
    suffix: "+",
    label: "Regions connected through Finova infrastructure.",
  },
];

const AnimatedCounter = ({
  target,
  suffix,
  startAnimation,
}: {
  target: number;
  suffix: string;
  startAnimation: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 2000;
    const stepTime = 16;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [startAnimation, target]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
      {count}
      {suffix}
    </h1>
  );
};

export default function About() {
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // run once only
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Banner */}
      <Banner
        title="About Finova"
        subtitle="Corporate discipline. Digital precision."
        lastUpdated="March 3, 2026"
      />

      {/* Who We Are */}
      <section className="py-20 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-accent mb-6">
            Who We Are
          </h2>
          <p className="text-white/80 leading-relaxed text-lg">
            Finova is a structured digital investment infrastructure designed
            to modernize traditional capital growth models. We combine
            disciplined financial principles with advanced technological
            systems to create secure, scalable wealth-building opportunities.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-accent mb-6">
            What We Do
          </h2>
          <p className="text-white/80 leading-relaxed text-lg">
            We provide structured investment plans engineered for optimized
            growth cycles, secure capital allocation, and transparent return
            models. Our digital architecture ensures reliable transaction
            handling, performance tracking, and scalable participation across
            global markets.
          </p>
        </div>
      </section>

      {/* Impact Stats */}
      <section
        ref={statsRef}
        className="py-20 px-6 bg-secondary text-white"
      >
        <h2 className="text-4xl font-bold text-center text-accent mb-12">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary p-8 rounded-xl shadow-lg border border-accent/20 
                         transform transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                startAnimation={animate}
              />
              <p className="text-white/70 mt-4 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Finova */}
      <section className="py-20 px-6 bg-primary text-white">
        <h2 className="text-4xl font-bold text-center text-accent mb-12">
          Why Choose Finova
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            "Institutional-grade security architecture.",
            "Structured growth models built on disciplined financial systems.",
            "Transparent plan frameworks with clear performance logic.",
            "Scalable digital infrastructure engineered for global expansion.",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-secondary p-8 rounded-xl border border-accent/20"
            >
              <p className="text-white/80 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-secondary text-white text-center">
        <h2 className="text-4xl font-bold text-accent mb-8">
          Mission & Vision
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-white/80">
              To provide secure, structured, and technologically advanced
              investment systems that empower disciplined capital growth.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-white/80">
              To become a globally recognized digital investment infrastructure
              known for stability, innovation, and institutional integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold text-accent mb-12">
          Strategic Roadmap
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 text-white/80">
          <p><strong>Phase I:</strong> Core Infrastructure Development</p>
          <p><strong>Phase II:</strong> Automation & Platform Optimization</p>
          <p><strong>Phase III:</strong> Ecosystem & Partnership Expansion</p>
          <p><strong>Phase IV:</strong> Global Capital Network Integration</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-secondary text-white text-center">
        <h2 className="text-4xl font-bold text-accent mb-6">
          Build Smarter Capital
        </h2>
        <p className="text-white/80 mb-8">
          Join Finova and participate in structured, technology-driven
          investment growth.
        </p>
        <Link
          to="/register"
          className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all"
        >
          Get Started
        </Link>
      </section>
    </>
  );
}

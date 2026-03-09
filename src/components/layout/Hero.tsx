import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-primary">
      
      {/* Glowing background circle */}
      <div className="absolute w-72 h-72 bg-accent/20 rounded-full top-[-100px] left-1/2 transform -translate-x-1/2 blur-3xl animate-pulse"></div>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-accent mb-6">
        Welcome to Finova
      </h1>

      {/* Subtext */}
      <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
        Your gateway to smart investments and secure crypto adventures. 
        Grow your funds with confidence and explore a world of opportunities.
      </p>

      {/* Call-to-action buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/register"
          className="bg-accent text-primary px-8 py-3 rounded-full font-semibold hover:brightness-110 transition-all"
        >
          Get Started
        </Link>
        <Link
          to="/about"
          className="border border-accent text-accent px-8 py-3 rounded-full font-semibold hover:bg-accent hover:text-primary transition-all"
        >
          Learn More
        </Link>
      </div>

      {/* Floating secondary accent circle */}
      <div className="absolute w-60 h-60 bg-innovation/30 rounded-full bottom-[-80px] right-10 blur-2xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
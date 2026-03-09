import { useState } from "react";
import { motion } from "framer-motion";
import { BiUser, BiCheckCircle, BiTimeFive } from "react-icons/bi";

// Sample testimonial data
const testimonials = [
  {
    name: "Alice Johnson",
    feedback: "Finova made my first crypto investment seamless. I’m already seeing returns!",
  },
  {
    name: "Michael Smith",
    feedback: "The platform feels secure and professional. I trust Finova with my funds.",
  },
  {
    name: "Sara Lee",
    feedback: "Referral program is fantastic! I invited friends and earned commissions effortlessly.",
  },
];

// How It Works steps
const steps = [
  {
    icon: <BiCheckCircle size={36} className="text-accent" />,
    title: "Register",
    description: "Sign up quickly and securely to access all investment plans.",
  },
  {
    icon: <BiUser size={36} className="text-accent" />,
    title: "Fund Wallet",
    description: "Deposit crypto to your site wallet or send directly to the platform.",
  },
  {
    icon: <BiTimeFive size={36} className="text-accent" />,
    title: "Invest & Grow",
    description: "Choose your plan, watch your funds grow, and track progress in real time.",
  },
];

const HowItWorksTestimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="relative py-20 px-6 bg-primary text-white">

      {/* Floating background circles */}
      <div className="absolute w-60 h-60 bg-accent/20 rounded-full top-[-60px] left-10 blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full bottom-[-80px] right-10 blur-2xl animate-pulse pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* How It Works */}
        <h2 className="text-4xl font-bold text-center text-accent mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-secondary p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-accent/50 transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
              <p className="text-white/80">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <h2 className="text-4xl font-bold text-center text-accent mb-12">Testimonials</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-white/80 italic mb-4">"{testimonials[current].feedback}"</p>
          <p className="text-accent font-semibold mb-6">- {testimonials[current].name}</p>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mb-4">
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                  idx === current ? "bg-accent scale-125" : "bg-white/50"
                }`}
                onClick={() => setCurrent(idx)}
              ></span>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="bg-accent text-primary px-6 py-2 rounded-full hover:brightness-110 transition-all"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksTestimonials;
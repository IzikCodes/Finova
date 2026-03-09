import Hero from "../components/layout/Hero";
import HowItWorksTestimonials from "../components/layout/HowItWorksTestimonials";
import Plans from "../components/layout/Plans";
import Services from "../components/layout/Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Plans />
      <Services />
      <HowItWorksTestimonials />
    </div>
  );
};

export default Home;

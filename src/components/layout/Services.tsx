import { BiWallet, BiUserPlus, BiBarChartAlt2, BiHeadphone, BiTrendingUp, BiTransfer } from "react-icons/bi";

const services = [
  {
    title: "Secure Wallet",
    description: "Keep your funds safe and accessible anytime within our secure platform.",
    icon: <BiWallet size={36} className="text-accent" />,
  },
  {
    title: "Fast Transactions",
    description: "Deposit or withdraw instantly with minimal waiting time.",
    icon: <BiTransfer size={36} className="text-accent" />,
  },
  {
    title: "Referral Program",
    description: "Invite friends and earn 10% commission for each successful referral.",
    icon: <BiUserPlus size={36} className="text-accent" />,
  },
  {
    title: "Investment Plans",
    description: "Choose the plan that suits your goals and watch your funds grow.",
    icon: <BiBarChartAlt2 size={36} className="text-accent" />,
  },
  {
    title: "24/7 Support",
    description: "We’re always here to answer your questions and guide your investments.",
    icon: <BiHeadphone size={36} className="text-accent" />,
  },
  {
    title: "Analytics",
    description: "Track your deposits, earnings, and performance in real time.",
    icon: <BiTrendingUp size={36} className="text-accent" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 px-6 bg-primary text-white">
      <h2 className="text-4xl font-bold text-center text-accent mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-secondary p-6 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-accent/50 transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="text-white/80">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

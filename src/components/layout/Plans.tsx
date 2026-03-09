import { useState } from "react";
import DepositModal from "./DepositModal";
import { BiRocket, BiShield, BiTrendingUp, BiGift } from "react-icons/bi";

const plans = [
  {
    name: "EXCLUSIVE PLAN",
    percentage: "2%",
    duration: "Every day for 6 days",
    referral: "10% Referral commission",
    min: "$100",
    max: "$4,999",
    icon: <BiRocket size={36} className="text-accent" />,
  },
  {
    name: "PERMANENT PLAN",
    percentage: "10%",
    duration: "Every day for 5 days",
    referral: "10% Referral commission",
    min: "$5,000",
    max: "$29,999",
    icon: <BiShield size={36} className="text-accent" />,
  },
  {
    name: "AVENUE PLAN",
    percentage: "20%",
    duration: "Every day for 4 days",
    referral: "10% Referral commission",
    min: "$30,000",
    max: "$1,000,000",
    icon: <BiTrendingUp size={36} className="text-accent" />,
  },
  {
    name: "PROMOTIONAL PLAN",
    percentage: "100%",
    duration: "Every day for 1 day",
    referral: "10% Referral commission",
    min: "$15,000",
    max: "$1,000,000",
    icon: <BiGift size={36} className="text-accent" />,
  },
];

const Plans = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openModal = (planName: string) => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section className="py-20 px-6 bg-primary text-white">
      <h2 className="text-4xl font-bold text-center text-accent mb-12">Our Plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-secondary p-6 rounded-xl shadow-lg hover:shadow-accent/50 flex flex-col items-center text-center border border-accent/20
                       transform transition-all duration-300 hover:-translate-y-2"
          >
            <div className="mb-4">{plan.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-lg font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent animate-gradient-x">
              {plan.percentage}
            </p>
            <p className="text-white/80 mb-1">{plan.duration}</p>
            <p className="text-white/80 mb-2">{plan.referral}</p>
            <p className="text-white/70 mb-1">
              Min: <span className="text-success">{plan.min}</span>
            </p>
            <p className="text-white/70 mb-4">
              Max: <span className="text-success">{plan.max}</span>
            </p>
            <button
              className="bg-accent text-primary px-6 py-2 rounded-full hover:brightness-110 transition-all"
              onClick={() => openModal(plan.name)}
            >
              Deposit Now
            </button>
          </div>
        ))}
      </div>

      {/* Deposit Modal */}
      <DepositModal isOpen={modalOpen} onClose={closeModal} planName={selectedPlan} />
    </section>
  );
};

export default Plans;

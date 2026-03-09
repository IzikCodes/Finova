import { FC } from "react";
import { Link } from "react-router-dom";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

const DepositModal: FC<DepositModalProps> = ({ isOpen, onClose, planName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-secondary rounded-xl p-8 w-11/12 md:w-1/3 relative">
        <button
          className="absolute top-4 right-4 text-accent text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl text-accent font-bold mb-4">{planName} Deposit</h2>
        <p className="text-white mb-6">Please login or register to proceed with your deposit.</p>
        <div className="flex gap-4 justify-center">
        <Link to="/login">
          <button
            className="bg-accent text-primary px-6 py-2 rounded-full shadow-md
                      hover:brightness-110 hover:-translate-y-1 transition-all duration-300"
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            className="border border-accent text-accent px-6 py-2 rounded-full shadow-md
                      hover:bg-accent hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            Register
          </button>
        </Link>

        </div>
      </div>
    </div>
  );
};

export default DepositModal;

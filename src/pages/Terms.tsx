import Banner from "../components/ui/Banner";
import Accordion from "../components/ui/Accordion";
import { Shield, LineChart, Coins } from "lucide-react";

export default function TermsPage() {
  const termsItems = [
    {
      title: "Introduction",
      content:
        "By accessing and using this platform, you agree to comply with these Terms and Conditions. Please review them carefully before making any financial commitments.",
    },
    {
      title: "Eligibility",
      content:
        "Users must be at least 18 years old and legally capable of entering financial agreements in their jurisdiction.",
    },
    {
      title: "Investment Risks",
      content:
        "All investments carry risk. Capital is not guaranteed unless explicitly stated. Users acknowledge potential gains and losses.",
    },
    {
      title: "Deposits & Withdrawals",
      content:
        "Processing times may vary depending on payment methods. The platform reserves the right to verify transactions for security purposes.",
    },
    {
      title: "Account Responsibilities",
      content:
        "Users are responsible for maintaining the confidentiality of their login credentials and all activities under their account.",
    },
    {
      title: "Governing Law",
      content:
        "These terms shall be governed by applicable financial regulations within the platform’s operating jurisdiction.",
    },
  ];

  return (
    <>
        <Banner
        title="Terms & Conditions"
        subtitle="Clarity. Structure. Responsible Participation."
        lastUpdated="March 3, 2026"
        icons={
            <>
            {/* Main icon: always visible, bigger on mobile */}
            <Shield className="absolute top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-32 md:h-32 text-accent animate-pulse" />

            {/* Secondary icons: show only on medium+ screens */}
            <LineChart className="hidden sm:block absolute top-10 left-20 w-32 h-32 text-cyan-400 animate-pulse" />
            <Coins className="hidden md:block absolute bottom-10 right-20 w-32 h-32 text-purple-500 animate-pulse" />
            </>
        }
        />
      <Accordion items={termsItems} />
    </>
  );
}

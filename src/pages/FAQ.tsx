import Banner from "../components/ui/Banner";
import Accordion from "../components/ui/Accordion";
import { HelpCircle, MessageSquare, BookOpen } from "lucide-react";

export default function FaqPage() {
  const faqItems = [
    {
      title: "How do I create an account?",
      content:
        "Click the Register button and complete the required information. Once your details are verified, your account will be activated and you may proceed with funding your wallet.",
    },
    {
      title: "What is the minimum investment amount?",
      content:
        "The minimum investment requirement is displayed within each available investment plan. Please review the plan details carefully before committing funds.",
    },
    {
      title: "Are returns guaranteed?",
      content:
        "All investments carry risk. While we strive to operate with discipline and transparency, returns are subject to market conditions and other financial variables.",
    },
    {
      title: "How are profits calculated?",
      content:
        "Profit calculations are based on the specific investment plan selected. Details including duration, expected returns, and payout structure are clearly outlined before you confirm any investment.",
    },
    {
      title: "When can I withdraw my funds?",
      content:
        "Withdrawal timelines depend on your selected investment plan and platform processing times. Requests may be subject to verification for security and regulatory compliance.",
    },
    {
      title: "How is my data protected?",
      content:
        "We implement structured security measures including encrypted connections, secure authentication processes, and ongoing monitoring to safeguard user data and transactions.",
    },
    {
      title: "Can I have multiple investment plans at once?",
      content:
        "Yes. Users may diversify by selecting multiple plans, provided sufficient account balance is available and platform rules are followed.",
    },
    {
      title: "How do I contact support?",
      content:
        "You may contact our support team through the official contact channels listed on the platform. We aim to respond to all verified inquiries promptly and professionally.",
    },
  ];

  return (
    <>
    <Banner
        title="Frequently Asked Questions"
        subtitle="Clear answers to help you make informed decisions." 
        lastUpdated="March 3, 2026" 
        icons={ 
        <> 
        {/* Main icon: always visible, bigger on mobile */} 
        <HelpCircle className="absolute top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-32 md:h-32 text-accent animate-pulse" /> 
        {/* Secondary icons: show only on medium+ screens */} 
        <MessageSquare className="hidden sm:block absolute top-10 left-20 w-32 h-32 text-cyan-400 animate-pulse" /> 
        <BookOpen className="hidden md:block absolute bottom-10 right-20 w-32 h-32 text-purple-500 animate-pulse" /> 
        </> 
        } 
    />    
 <Accordion items={faqItems} />
    </>
  );
}

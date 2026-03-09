import Banner from "../components/ui/Banner";
import Accordion from "../components/ui/Accordion";
import { Key, Lock, Database } from "lucide-react";

export default function PrivacyPolicyPage() {
  const privacyItems = [
    {
      title: "Information We Collect",
      content:
        "We collect personal information necessary to provide our investment services, including your name, email address, phone number, payment details, and transaction history. We may also collect technical data such as IP address, browser type, and device information for security and performance monitoring purposes.",
    },
    {
      title: "How We Use Your Information",
      content:
        "Your information is used to create and manage your account, process deposits and withdrawals, communicate important updates, improve platform functionality, and ensure regulatory compliance. We do not sell or rent your personal data to third parties.",
    },
    {
      title: "Data Security",
      content:
        "We implement appropriate technical and organizational security measures to protect your data against unauthorized access, alteration, disclosure, or destruction. While no system is completely immune to risk, we continuously monitor and strengthen our security practices.",
    },
    {
      title: "Cookies & Tracking Technologies",
      content:
        "We use cookies and similar technologies to enhance user experience, analyze site traffic, and maintain session security. You may adjust your browser settings to disable cookies, though some features of the platform may not function properly as a result.",
    },
    {
      title: "Third-Party Services",
      content:
        "Certain services such as payment processing and analytics may be handled by trusted third-party providers. These providers are contractually obligated to protect your information and use it solely for authorized purposes.",
    },
    {
      title: "Regulatory Compliance",
      content:
        "We may retain and disclose information where required to comply with applicable financial regulations, anti-money laundering requirements, or lawful governmental requests.",
    },
    {
      title: "Data Retention",
      content:
        "We retain your information only for as long as necessary to fulfill the purposes outlined in this policy, including legal, accounting, and regulatory obligations.",
    },
    {
      title: "Your Rights",
      content:
        "You may request access to, correction of, or deletion of your personal information, subject to legal and regulatory limitations. For privacy-related inquiries, please contact our support team through the official communication channels provided on the platform.",
    },
  ];

  return (
    <>
        <Banner
        title="Privacy Policy"
        subtitle="Your data is handled with discipline, transparency, and respect."
        lastUpdated="March 3, 2026"
        icons={
            <>
            {/* Main icon: always visible, bigger on mobile */}
            <Lock className="absolute top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-32 md:h-32 text-accent animate-pulse" />

            {/* Secondary icons: show only on medium+ screens */}
            <Database className="hidden sm:block absolute top-10 left-20 w-32 h-32 text-cyan-400 animate-pulse" />
            <Key className="hidden md:block absolute bottom-10 right-20 w-32 h-32 text-purple-500 animate-pulse" />
            </>
        }
        />
    <Accordion items={privacyItems} />
    </>
  );
}

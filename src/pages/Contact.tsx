import { useState } from "react";
import emailjs from "@emailjs/browser";
import Banner from "../components/ui/Banner";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    const form = e.currentTarget;
    const currentTime = new Date().toLocaleString();

    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;

    const firstLetter = name ? name.charAt(0).toUpperCase() : "";

    emailjs
      .send(
        "xxxxxxxxx", // service id
        "xxxxxxxxx", // template id
        { name, email, message, time: currentTime, firstLetter },
        "xxxxxxxxxxxxx" // public key
      )
      .then(() => {
        setSent(true);
        setSending(false);
        form.reset();
        setTimeout(() => setSent(false), 4000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(`Something went wrong: ${error.text || error.message}`);
        setSending(false);
      });
  };

  return (
    <div className="min-h-screen bg-primary">

      {/* Banner */}
      <Banner
        title="Contact Finova"
        subtitle="Every great journey begins with a message — let’s start ours."
        lastUpdated="March 3, 2026"
      />

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE — CONTACT INFO */}
        <div className="space-y-8">

          {/* Support Email */}
          <div className="bg-secondary border border-accent/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Support Email
            </h3>
            <p className="text-slate-400 mb-3">
              For general inquiries, account assistance, or partnership requests.
            </p>
            <p className="text-accent font-medium">
              support@finova.com
            </p>
          </div>

          {/* Response Time */}
          <div className="bg-secondary border border-accent/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Response Time
            </h3>
            <p className="text-slate-400">
              Our support team typically responds within
              <span className="text-accent font-medium"> 24 hours</span>.
            </p>
          </div>

          {/* Secure Messaging Notice */}
          <div className="bg-secondary border border-accent/20 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Secure Communication
            </h3>
            <p className="text-slate-400">
              All messages sent through this form are processed securely.
              Please avoid sharing sensitive financial information such as
              passwords or full banking credentials.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE — CONTACT FORM */}
        <div className="bg-secondary rounded-2xl shadow-xl p-8 border border-accent/20">

          <form onSubmit={sendEmail} className="space-y-6">

            {/* Name */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Name
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white
                placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <p className="text-sm text-slate-400 mt-1">
                If you’re a registered user, please use your account name.
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                required
                className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white
                placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <p className="text-sm text-slate-400 mt-1">
                We’ll reply to this email address.
              </p>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white
                placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
              <p className="text-sm text-slate-400 mt-1">
                Provide full details so our support team can assist you faster.
              </p>
            </div>

            {/* Hidden Time Field */}
            <input type="hidden" name="time" />

            {/* Send Button */}
            <button
              type="submit"
              disabled={sending}
              className={`w-full py-3 rounded-xl font-semibold transition-all
              ${
                sent
                  ? "bg-green-600 text-white"
                  : "bg-accent text-primary hover:brightness-110"
              }`}
            >
              {sending ? "Sending..." : sent ? "Message Sent ✓" : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

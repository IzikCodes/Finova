import { useState } from "react";
import { UserPlus, Clipboard } from "lucide-react";
import Banner from "../components/ui/Banner";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    if (!acceptTerms) {
      alert("You must accept the Terms & Conditions to register.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // TODO: Replace this with your PHP API call to register the user
    const generatedReferral = `${firstName.toLowerCase()}${Math.floor(
      Math.random() * 9000 + 1000
    )}`;

    console.log({
      firstName,
      lastName,
      email,
      phone,
      gender,
      password,
      referral: generatedReferral,
    });

    setReferralCode(generatedReferral);
    setCopied(false); // reset copy state
  };

  const handleCopyReferral = () => {
    if (referralCode) {
      navigator.clipboard.writeText(
        `${window.location.origin}/register?ref=${referralCode}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Banner */}
      <Banner
        title="Create Account"
        subtitle="Start your investment journey with Finova."
        lastUpdated="March 3, 2026"
        icons={
          <UserPlus className="absolute top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-32 md:h-32 text-accent blur-sm animate-pulse" />
        }
      />

      {/* Registration Form */}
      <div className="flex justify-center px-6 py-16">
        <div className="w-full max-w-lg bg-secondary rounded-2xl shadow-xl p-8 border border-accent/20">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Sign Up
          </h2>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+2348012345678"
                className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm text-slate-300 mb-1">Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white placeholder-slate-400
                           focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                required
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="********"
                  className="w-full px-4 py-3 rounded-xl bg-primary border border-accent/20 text-white placeholder-slate-400
                             focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition"
                  required
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="h-4 w-4 text-accent focus:ring-accent border-accent rounded"
              />
              <label className="text-slate-400 text-sm">
                I accept the{" "}
                <Link to="/terms" className="text-cyan-400 hover:underline">
                  Terms & Conditions
                </Link>
              </label>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full py-3 bg-accent text-primary font-semibold rounded-xl shadow-lg hover:shadow-accent/50
                         transform transition-all duration-300 hover:-translate-y-1"
            >
              Register
            </button>
          </form>

          {/* Referral Link Display */}
          {referralCode && (
            <div className="mt-6 p-4 bg-primary/30 rounded-xl text-center border border-accent/20 text-white space-y-2">
              <p className="text-sm">Your referral link:</p>
              <div className="flex items-center justify-center space-x-2">
                <input
                  type="text"
                  readOnly
                  value={`${window.location.origin}/register?ref=${referralCode}`}
                  className="w-full text-center px-4 py-2 rounded-xl bg-secondary border border-accent/20 text-white"
                  onFocus={(e) => e.target.select()}
                />
                <button
                  onClick={handleCopyReferral}
                  className="p-2 rounded-xl bg-accent text-primary hover:brightness-110 transition-all duration-300"
                >
                  <Clipboard className="w-5 h-5" />
                </button>
              </div>
              {copied && <p className="text-xs text-green-400">Copied to clipboard!</p>}
              <p className="mt-1 text-xs text-slate-400">
                Share this link to invite friends and earn referral bonuses.
              </p>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-400 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

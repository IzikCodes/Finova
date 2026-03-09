import { useState } from "react";
import { LogIn } from "lucide-react"; // main banner icon
import Banner from "../components/ui/Banner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: connect to PHP backend login API
    console.log("Logging in with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Banner */}
      <Banner
        title="Welcome Back"
        subtitle="Access your Finova account securely."
        lastUpdated="March 3, 2026"
        icons={
          <>
            <LogIn className="absolute top-10 left-1/2 transform -translate-x-1/2 w-40 h-40 md:w-32 md:h-32 text-accent blur-sm animate-pulse" />
          </>
        }
      />

      {/* Login Form */}
      <div className="flex justify-center px-6 py-16">
        <div className="w-full max-w-md bg-secondary rounded-2xl shadow-xl p-8 border border-accent/20">
          <h2 className="text-2xl font-semibold text-white text-center mb-6">
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-5">
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

            <button
              type="submit"
              className="w-full py-3 bg-accent text-primary font-semibold rounded-xl shadow-lg hover:shadow-accent/50
                         transform transition-all duration-300 hover:-translate-y-1"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Don’t have an account?{" "}
            <a href="/register" className="text-cyan-400 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

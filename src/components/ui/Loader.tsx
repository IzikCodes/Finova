import { useEffect, useState } from "react";
import Logo from "../../assets/images/FinovaLogo_Transparent.png";

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.6s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1600);

    // Remove loader completely after fade animation
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-primary transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">

        {/* Logo with Fade + Scale */}
        <img
          src={Logo}
          alt="Finova Logo"
          className="h-16 w-16 object-contain mb-4 animate-logo-enter"
        />

        {/* Wordmark */}
        <h1 className="text-xl font-bold tracking-[0.35em] text-accent">
          FINOVA
        </h1>

        {/* Tagline */}
        <p className="text-xs uppercase tracking-widest text-white/60 mt-3">
          Smart Cash. Smarter Investments.
        </p>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/FinovaLogo_Transparent.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-secondary shadow-lg py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-1">
          <img
            src={Logo}
            alt="Finova Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl text-accent font-bold tracking-[0.25em]">
            FINOVA
          </h1>
        </div>
      </Link>

      {/* Desktop Links */}
      <div className="space-x-6 hidden md:flex">
        <Link to="/" className="hover:text-accent transition-colors duration-300">Home</Link>
        <Link to="/about" className="hover:text-accent transition-colors duration-300">About</Link>
        <Link to="/contact" className="hover:text-accent transition-colors duration-300">Contact</Link>
      </div>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <Link to="/login">
          <button
            className="bg-accent text-primary px-4 py-2 rounded shadow-md
                      hover:brightness-110 hover:-translate-y-1 transition-all duration-300"
          >
            Login
          </button>
        </Link>
        <Link to="/register">
          <button
            className="border border-accent text-accent px-4 py-2 rounded shadow-md
                      hover:bg-accent hover:text-primary hover:-translate-y-1 transition-all duration-300"
          >
            Register
          </button>
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-accent focus:outline-none"
        >
          {/* Simple hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-secondary flex flex-col items-center py-4 space-y-3 md:hidden shadow-lg">
          <Link to="/" className="text-white hover:text-accent" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-white hover:text-accent" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" className="text-white hover:text-accent" onClick={() => setMenuOpen(false)}>Contact</Link>
          <div className="flex space-x-3 mt-2">
          <Link to="/login">
            <button
              className="bg-accent text-primary px-4 py-2 rounded shadow-md
                        hover:brightness-110 hover:-translate-y-1 transition-all duration-300"
            >
              Login
            </button>
          </Link>

          <Link to="/register">
            <button
              className="border border-accent text-accent px-4 py-2 rounded shadow-md
                        hover:bg-accent hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              Register
            </button>
          </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

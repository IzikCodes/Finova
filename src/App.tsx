import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import BackToTop from "./components/layout/BackToTop";
import Footer from "./components/layout/Footer";
import Loader from "./components/ui/Loader";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <AppRoutes />
        <BackToTop />
        <Footer />
        <Loader />
      </div>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Messages from "./pages/Messages";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only on Home page */}
      {location.pathname === "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

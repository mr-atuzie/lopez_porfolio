// import About from "./components/About";
// import Cert from "./components/Cert";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";
// import Portfolio from "./components/Portfolio";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Navbar />
        <Toaster position="top-center" reverseOrder={false} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project/:id" element={<Project />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

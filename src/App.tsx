import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Public Routes  */}
      <Routes>
        <Route path="/" element={<Home />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      

      <Footer/>
    </>
  );
};

export default App;

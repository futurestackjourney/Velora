import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DocsPage from "./pages/Docs";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Demos from "./pages/Demos";
import Playground from "./pages/Playground";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      {/* Public Routes  */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/docs" element={<DocsPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/demos" element={<Demos/>}/>
        <Route path="/playground" element={<Playground/>} /> */}

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

        {/* 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      

      <Footer/>
    </>
  );
};

export default App;

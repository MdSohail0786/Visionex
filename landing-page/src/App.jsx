import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import AboutOne from "./components/AboutOne/AboutOne.jsx";
import AboutTwo from "./components/AboutTwo/AboutTwo.jsx";
import Services from "./components/Services/Services.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Newsletter from "./components/Newsletter/Newsletter.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutOne />
        <AboutTwo />
        <Services />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

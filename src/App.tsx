import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import MissingFeature from "./components/MissingFeature";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UpcomingFeatures from "./components/UpcomingFeatures";
import Samples from "./components/Samples";
import Elevate from "./components/Elevate";

import TempHero from "./components/TempHero";

export default function App() {
  return (
    <div className="w-full bg-[#1B2028] flex flex-col items-center text-white scroll-smooth">
      <section
        className="w-full h-max flex flex-col justify-center items-center overflow-hidden relative"
        id="main"
      >
        <TempHero />
        <Header />
        <Hero />
      </section>

      <Dashboard />
      <Elevate />
      <Samples />
      <UpcomingFeatures />
      <MissingFeature />
      <Footer />
    </div>
  );
}

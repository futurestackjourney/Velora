import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import IntroSection from "../components/home/IntroSection";
import TestimonialSection from "../components/TestimonialSection";
import GsapHero from "../sections/GsapHero";

const Home: React.FC = () => {
  return (
    <div>
      {/* <Hero/> */}
      <GsapHero />
      <IntroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialSection />
    </div>
  );
};

export default Home;

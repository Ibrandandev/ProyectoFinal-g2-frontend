import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import PlansSection from "../components/PlansSection";
import TrainersSection from "../components/TrainersSection";
import ReviewsSection from "../components/ReviewsSection";

const HomeScreen = () => {
  return (
    <main className="bg-white min-vh-100">
      <HeroSection />
      <ServicesSection />
      <PlansSection />
      <TrainersSection />
      <ReviewsSection />
    </main>
  );
};

export default HomeScreen;

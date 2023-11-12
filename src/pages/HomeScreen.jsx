import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import PlansSection from "../components/PlansSection";
import TrainersSection from "../components/TrainersSection";
import CommentsSection from "../components/CommentsSection";
import "../css/home-section.css";

const HomeScreen = () => {
  return (
    <main className="min-vh-100">
      <HeroSection />
      <CategoriesSection />
      <PlansSection />
      <TrainersSection />
      <CommentsSection />
    </main>
  );
};

export default HomeScreen;

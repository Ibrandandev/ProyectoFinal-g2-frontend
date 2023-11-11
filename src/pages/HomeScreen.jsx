import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import PlansSection from "../components/PlansSection";
import TrainersSection from "../components/TrainersSection";
import CommentsSection from "../components/CommentsSection";

const HomeScreen = () => {
  return (
    <main className="bg-white min-vh-100">
      <HeroSection />
      <CategoriesSection />
      <PlansSection />
      <TrainersSection />
      <CommentsSection />
    </main>
  );
};

export default HomeScreen;

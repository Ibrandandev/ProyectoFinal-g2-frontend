import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/categories/Section";
import PlansSection from "../components/plans/Section";
import TrainersSection from "../components/trainers/Section";
import CommentsSection from "../components/comments/Section";
import "../css/home.css";

const HomeScreen = () => {
  return (
    <main className="min-vh-100 bg-our-black">
      <HeroSection />
      <CategoriesSection />
      <PlansSection />
      <TrainersSection />
      <CommentsSection />
    </main>
  );
};

export default HomeScreen;

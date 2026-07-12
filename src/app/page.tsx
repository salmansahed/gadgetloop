import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Features from "../components/home/Features";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Features />
      <FeaturedProducts />
    </div>
  );
};

export default Home;

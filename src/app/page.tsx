import Categories from "../components/home/Categories";
import FAQSection from "../components/home/FAQSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Features from "../components/home/Features";
import HeroSection from "../components/home/HeroSection";
import HowItWorks from "../components/home/HowItWorks";
import Newsletter from "../components/home/Newsletter";
import PlatformStats from "../components/home/PlatformStats";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Features />
      <FeaturedProducts />
      <PlatformStats />
      <HowItWorks />
      <FAQSection />
      <Newsletter />
    </div>
  );
};

export default Home;

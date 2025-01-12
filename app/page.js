import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlider from "./components/heroSlider";
import BookingWidget from "./components/bookingWidget";
import FeaturedRooms from "./components/featuredRooms";
import DiningSection from "./components/diningSection";
import SpaSection from "./components/spaSection";
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <div className="container mx-auto container-padding">
        <BookingWidget />
      </div>
      <FeaturedRooms />
      <DiningSection />
      <SpaSection />
      <Footer />
    </div>
  );
};

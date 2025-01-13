import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import HeroSlider from "./_components/heroSlider";
import BookingWidget from "./_components/bookingWidget";
import FeaturedRooms from "./_components/featuredRooms";
import DiningSection from "./_components/diningSection";
import SpaSection from "./_components/spaSection";
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

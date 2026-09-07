import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnershipSection from "@/components/PartnershipSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrainingSection from "@/components/TrainingSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-[#080808]">
    <Navbar />
    <Hero />
    <PartnershipSection />
    <FeaturesSection />
    <TrainingSection />
    <Footer />
  </div>
);

export default Index;

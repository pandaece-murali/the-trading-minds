import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TrustStrip from "./sections/TrustStrip";
import HostCredibility from "./sections/HostCredibility";
import MediaCoverage from "./sections/MediaCoverage";
import WhyAttend from "./sections/WhyAttend";
import LearnerTypes from "./sections/LearnerTypes";
import Curriculum from "./sections/Curriculum";
import Outcomes from "./sections/Outcomes";
import Gallery from "./sections/Gallery";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import StickyCTA from "./sections/StickyCTA";
import PressGallery from "./sections/PressGallery";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary-brand/30">
      <Navbar />
      <Hero />
      <TrustStrip />
      <HostCredibility />
      <MediaCoverage />
      <PressGallery />
      <WhyAttend />
      <LearnerTypes />
      <Curriculum />
      <Outcomes />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyCTA />
    </div>
  );
}

// import EsportsEventSection from "@/components/home/EsportEventSection";
import FAQSection from "@/components/home/FAQSection";
import GalllerySection from "@/components/home/GalllerySection";
import LandingSection from "@/components/home/LandingSection";
import SponsorSection from "@/components/home/SponsorSection";
// import TechlavyaEventSection from "@/components/home/TechlavyaEventSection";
import TimelineSection from "@/components/home/TimelineSection";
import TshirtSection from "@/components/home/TshirtSection";

const ComingSoonSection = ({ title }: { title: string }) => {
  return (
    <section className="px-4 md:px-6 py-10 md:py-14">
      <div className="mx-auto max-w-6xl rounded-2xl border border-accent/20 bg-background/60 p-8 md:p-12 text-center backdrop-blur-sm">
        <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-foreground tracking-wider mb-3">
          {title}
        </h2>
        <p className="text-primary font-kodeMono tracking-[0.18em] uppercase text-xs md:text-sm">
          Coming Soon
        </p>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 bg-black/60 pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-black/40 pointer-events-none"></div>
      <LandingSection />
      <TimelineSection />
      <ComingSoonSection title="Techlavya Events" />
      <ComingSoonSection title="Esports Events" />
      {/* <TechlavyaEventSection />
      <EsportsEventSection /> */}
      <TshirtSection />
      <GalllerySection />
      <FAQSection />
      <SponsorSection />
    </div>
  );
};

export default Home;

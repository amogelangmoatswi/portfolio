import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import DesignShowcaseSection from "@/components/sections/DesignShowcaseSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import { GradientBackground } from "@/components/ui/shader-gradient-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { NoiseTexture } from "@/components/ui/noise-texture";

export default function HomePage() {
  return (
    <div className="text-foreground relative">
      {/* Deep Space Layer: 3D Shader Gradient + Twinkling Stars + Shooting Stars + Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* 3D Shader Gradient with soft, subtle ambient opacity */}
        <div className="absolute inset-0 opacity-25">
          <GradientBackground />
        </div>

        {/* Twinkling Starfield */}
        <StarsBackground
          starDensity={0.00015}
          allStarsTwinkle={true}
          twinkleProbability={0.7}
          minTwinkleSpeed={0.5}
          maxTwinkleSpeed={1}
          className="opacity-75"
        />

        {/* Periodic Shooting Stars */}
        <ShootingStars
          minSpeed={12}
          maxSpeed={28}
          minDelay={1500}
          maxDelay={4500}
          starColor="#A855F7"
          trailColor="#38BDF8"
        />

        {/* Subtle Fractal Noise Texture for Depth */}
        <NoiseTexture
          className="opacity-20 dark:opacity-30"
          frequency={0.4}
          octaves={6}
          slope={0.15}
          noiseOpacity={0.5}
        />
      </div>
      <div className="relative z-10 w-full sm:w-[88%] md:w-[75%] lg:w-[55%] mt-14 sm:mt-20 mx-auto px-3.5 sm:px-4 md:px-6">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <DesignShowcaseSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}

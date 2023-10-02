import Collect from "@/components/Home/Collect";
import Display from "@/components/Home/Display";
import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import TrustedBy from "@/components/Home/TrustedBy";
import Navbar from "@/components/Shared/Navigaitons/Navbar";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Collect />
      <Display />
    </main>
  );
}

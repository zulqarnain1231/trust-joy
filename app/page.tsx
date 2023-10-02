import BookCall from "@/components/Home/BookCall";
import Collect from "@/components/Home/Collect";
import Display from "@/components/Home/Display";
import GoogleRichSnippets from "@/components/Home/GoogleRichSnippets";
import Hero from "@/components/Home/Hero/Hero";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";
import Industries from "@/components/Home/IndustriesWeServe/Industries";
import ReplyAi from "@/components/Home/ReplyAi";
import Resources from "@/components/Home/ResourcesToHelp/Resources";
import Share from "@/components/Home/Share";
import TrustedBy from "@/components/Home/TrustedBy";
import WhatCustomerSays from "@/components/Home/WhatCustomerSays/WhatCustomerSays";
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
      <ReplyAi />
      <Share />
      <GoogleRichSnippets />
      <WhatCustomerSays />
      <Industries />
      <BookCall />
      <Resources />
    </main>
  );
}

import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { HeroSection } from "./HeroSection";
import { MarketsSection } from "./MarketSection";
import { ProductsSection } from "./ProductSection";
import { ValuesSection } from "./ValuesSection";


export function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection/>
      <ValuesSection/>
      <ProductsSection/>
      <MarketsSection/>
      <ContactSection/>
    </main>
  );
}

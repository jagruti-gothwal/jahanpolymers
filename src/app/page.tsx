import { Hero } from "@/components/Hero";
import { VisionSection } from "@/components/VisionSection";
import { ProductsSection } from "@/components/ProductsSection";
import { Contact } from "@/components/Contact";
import { GallerySection } from "@/components/GallerySection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VisionSection />
      <ProductsSection />
      <GallerySection />
      <div className="bg-neutral-50">
        <Contact />
      </div>
    </main>
  );
}

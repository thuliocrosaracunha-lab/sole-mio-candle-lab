import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Collection } from "@/components/sections/Collection";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { Process } from "@/components/sections/Process";
import { Values } from "@/components/sections/Values";
import { site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.description,
  url: site.url,
  sameAs: [site.instagram.url, site.linktree.url],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: `+${site.whatsapp.number}`,
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Collection />
        <Values />
        <Process />
        <InstagramSection />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}

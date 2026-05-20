"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="directional-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Solutions", id: "#solution" },
        { name: "Process", id: "#process" },
        { name: "Values", id: "#values" },
        { name: "Apply", id: "/apply" },
        { name: "Contact", id: "/contact" },
        { name: "Language", id: "#lang" }
      ]}
      brandName="Artemis Agency"
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DzkD2uz35Ou1bcDokeeXdpdXCv/uploaded-1779296716411-d4fpppan.jpg"
      logoClassName="w-12 h-12"
      button={{ text: "Apply Now", href: "/apply" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Professional support for your OnlyFans business."
      titleClassName="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-extrabold"
      description="Artemis supports selected creators with strategic growth, optimization and management — discreet, structured and professional."
      buttons={[{ text: "Book a Free Consultation", href: "/contact" }]}
      imageSrc="http://img.b2bpic.net/free-photo/elegant-geometric-background-business_24972-1791.jpg"
      showDimOverlay={true}
      showBlur={true}
      avatars={[]}
      avatarText="Trusted by elite creators"
    />
  </div>

  <div id="problem" data-section="problem">
      <MediaAbout
      useInvertedBackground={false}
      title="The Reality of Unstructured Scaling"
      description="Many creators hit a plateau due to high workloads and a lack of clear strategy. Without professional oversight, even the best talent struggles to optimize their operations and scale effectively."
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-desk-concept-with-copy-space_23-2148459729.jpg"
    />
  </div>

  <div id="solution" data-section="solution">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      features={[
        { title: "Strategic Scaling", description: "Methodical growth strategies.", imageSrc: "http://img.b2bpic.net/free-photo/assortment-matches-representing-graph_23-2148749506.jpg", titleImageSrc: "http://img.b2bvec.net/free-vector/gradient-technology-concept-logotype-collection_52683-13459.jpg", buttonText: "Learn More" },
        { title: "Revenue Optimization", description: "Maximized efficiency per channel.", imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-futuristic-sci-fi-techno-lights-cool-background_181624-26156.jpg", titleImageSrc: "http://img.b2bvec.net/free-vector/gradient-social-media-logo-collection_23-2148306808.jpg", buttonText: "Learn More" },
        { title: "Discreet Management", description: "High-level professional privacy.", imageSrc: "http://img.b2bpic.net/free-vector/vintage-golden-art-nouveau-badge-vector_53876-57477.jpg", titleImageSrc: "http://img.b2bpic.net/free-photo/minus-icon-left-side_187299-44679.jpg", buttonText: "Learn More" },
      ]}
      title="Premium Operational Systems"
      description="We replace chaos with precision."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        { id: "p1", value: "01", description: "Application & Vetting" },
        { id: "p2", value: "02", description: "Private Consultation" },
        { id: "p3", value: "03", description: "Strategy & Management" },
      ]}
      title="Our Three-Step Evolution"
      description="A refined path to elite management."
    />
  </div>

  <div id="values" data-section="values">
      <MediaAbout
      useInvertedBackground={false}
      title="Elite Standards of Conduct"
      description="Professionalism, transparency, and absolute discretion define the Artemis experience. We prioritize sustainable long-term value over short-lived trends."
      imageSrc="http://img.b2bpic.net/free-photo/vertical-monochrome-shot-abstract-architectural-building_181624-3562.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", name: "Alex R.", handle: "@alexcreator", testimonial: "Artemis turned my workflow into a machine.", imageSrc: "http://img.b2bpic.net/free-photo/smiley-man-blending-different-colors-his-painting_23-2148422200.jpg" },
        { id: "t2", name: "Sophia L.", handle: "@sophiastudios", testimonial: "Elite level professionalism. Highly recommend.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-66975.jpg" },
        { id: "t3", name: "Jordan P.", handle: "@jordancreative", testimonial: "The only agency that understands branding.", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-shooting-with-projector_23-2149424929.jpg" },
        { id: "t4", name: "Maya K.", handle: "@mayaspace", testimonial: "Structured, calm, and incredibly effective.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-middle-aged-charismatic-man-brown-coat-dark-photo-studio_613910-14768.jpg" },
        { id: "t5", name: "Elena M.", handle: "@elenawork", testimonial: "Finally, the strategy I actually needed.", imageSrc: "http://img.b2bpic.net/free-photo/spotlight-portrait-golden-hour_23-2151915114.jpg" },
      ]}
      title="Refined Creator Experiences"
      description="Voices of the creators we guide."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{ variant: "canvas-reveal" }}
      tag="Apply Now"
      title="Step into the elite."
      description="Ready to scale your business? Artemis is accepting new applications from serious creators."
    />
  </div>

  <div id="footer" data-section="footer" className="bg-gradient-to-b from-background to-card">
      <FooterBaseReveal
      logoText="ARTEMIS"
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DzkD2uz35Ou1bcDokeeXdpdXCv/uploaded-1779296716411-d4fpppan.jpg"
      columns={[
        { title: "Company", items: [{ label: "About", href: "#" }, { label: "Careers", href: "#" }] },
        { title: "Legal", items: [{ label: "Privacy", href: "#" }, { label: "Terms", href: "#" }] },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

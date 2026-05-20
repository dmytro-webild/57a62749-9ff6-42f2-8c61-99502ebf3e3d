"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import Textarea from '@/components/form/Textarea';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ThemeProvider 
      defaultButtonVariant="text-stagger" 
      defaultTextAnimation="entrance-slide" 
      borderRadius="rounded" 
      contentWidth="medium" 
      sizing="medium" 
      background="circleGradient" 
      cardStyle="glass-elevated" 
      primaryButtonStyle="gradient" 
      secondaryButtonStyle="glass" 
      headingFontWeight="normal"
    >
      <NavbarLayoutFloatingInline 
        navItems={[{ name: "Home", id: "/" }, { name: "Apply", id: "/apply" }, { name: "Contact", id: "/contact" }]} 
        brandName="Artemis Agency"
        logoClassName="w-12 h-12"
        button={{ text: "Apply Now", href: "/apply" }}
      />
      
      <main className="pt-32 pb-20 px-6 max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <form className="space-y-6">
          <div><label className="block mb-2">Name</label><input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 bg-card border rounded" placeholder="Your name" /></div>
          <div><label className="block mb-2">Email</label><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 bg-card border rounded" placeholder="email@example.com" /></div>
          <div><label className="block mb-2">Message</label><Textarea value={message} onChange={setMessage} placeholder="How can we help?" /></div>
          <button type="submit" className="w-full bg-primary-cta text-white py-3 rounded">Send Message</button>
        </form>
      </main>

      <div className="bg-gradient-to-b from-background to-card">
        <FooterBaseReveal logoText="ARTEMIS" columns={[]} />
      </div>
    </ThemeProvider>
  );
}
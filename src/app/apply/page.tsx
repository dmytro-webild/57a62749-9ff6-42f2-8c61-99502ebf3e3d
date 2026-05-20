"use client";

import { useState } from "react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function ApplyPage() {
  const [mode, setMode] = useState<'model' | 'personal'>('model');
  
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
      
      <main className="pt-32 pb-20 px-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Apply for Artemis</h1>
        
        <div className="flex bg-card p-1 rounded-full mb-10 border">
          <button 
            className={`flex-1 py-2 rounded-full transition ${mode === 'model' ? 'bg-primary-cta text-white' : ''}`}
            onClick={() => setMode('model')}>
            Model Application
          </button>
          <button 
            className={`flex-1 py-2 rounded-full transition ${mode === 'personal' ? 'bg-primary-cta text-white' : ''}`}
            onClick={() => setMode('personal')}>
            Personal Application
          </button>
        </div>

        <form className="space-y-6">
          <div><label className="block mb-2">Full Name</label><input required type="text" className="w-full p-3 bg-card border rounded" placeholder="Your full name" /></div>
          <div><label className="block mb-2">Age</label><input required type="number" className="w-full p-3 bg-card border rounded" placeholder="Your age" /></div>
          <div><label className="block mb-2">Email</label><input required type="email" className="w-full p-3 bg-card border rounded" placeholder="email@example.com" /></div>
          <div><label className="block mb-2">Phone</label><input required type="tel" className="w-full p-3 bg-card border rounded" placeholder="+49..." /></div>
          <div><label className="block mb-2">Country</label><select className="w-full p-3 bg-card border rounded"><option>Germany</option><option>Austria</option><option>Switzerland</option></select></div>
          
          {mode === 'model' && (
            <>
               <div><label className="block mb-2">Instagram Link</label><input type="url" className="w-full p-3 bg-card border rounded" placeholder="https://instagram.com/..." /></div>
               <div><label className="block mb-2">OnlyFans Link</label><input type="url" className="w-full p-3 bg-card border rounded" placeholder="https://onlyfans.com/..." /></div>
            </>
          )}
          
          {mode === 'personal' ? (
            <>
              <div><label className="block mb-2">Role</label><select className="w-full p-3 bg-card border rounded"><option>Chatter</option><option>Accountsetter</option><option>Accountmanager</option><option>Content-research Manager</option><option>Cutter</option></select></div>
              <div><label className="block mb-2">Experience</label><select className="w-full p-3 bg-card border rounded"><option>None</option><option>Under 6 months</option><option>6 to 12 months</option><option>1 to 2 years</option><option>Over 2 years</option></select></div>
            </>
          ) : (
            <div><label className="block mb-2">Experience</label><textarea className="w-full p-3 bg-card border rounded" placeholder="Tell us about your experience..." /></div>
          )}
          
          <div><label className="block mb-2">Salary Expectation</label><input type="text" className="w-full p-3 bg-card border rounded" placeholder="€ per month" /></div>
          <button type="submit" className="w-full bg-primary-cta text-white py-3 rounded">Submit Application</button>
        </form>
      </main>

      <div className="bg-gradient-to-b from-background to-card">
        <FooterBaseReveal logoText="ARTEMIS" columns={[]} />
      </div>
    </ThemeProvider>
  );
}
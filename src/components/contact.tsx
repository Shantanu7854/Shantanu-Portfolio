"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send ❌");
      }
    } catch (error) {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="relative py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Form */}
        <div>
          <div className="text-center md:text-left mb-10">
            <Badge className="mb-4 bg-rose-500/20 border border-rose-400/40 text-rose-300 font-medium backdrop-blur-sm px-4 py-1.5 text-sm rounded-lg">
              Contact
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-rose-200 drop-shadow-[0_0_15px_rgba(244,63,94,0.6)]">
              Get In Touch
            </h2>
            <p className="text-slate-400 mt-3">
              Have a project idea, collaboration, or just want to say hi? Fill out the form below.
            </p>
          </div>

          <form 
            onSubmit={handleSubmit} 
            className="space-y-6 bg-slate-900/60 backdrop-blur-md p-8 rounded-2xl border border-rose-500/30 shadow-xl"
          >
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 bg-slate-800/40 border-rose-500/30 text-slate-200 focus:ring-2 focus:ring-rose-500/50"
              />
            </div>
            
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-slate-400 h-5 w-5" />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 bg-slate-800/40 border-rose-500/30 text-slate-200 focus:ring-2 focus:ring-rose-500/50"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3.5 text-slate-400 h-5 w-5" />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="pl-10 bg-slate-800/40 border-rose-500/30 text-slate-200 focus:ring-2 focus:ring-rose-500/50"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-700 hover:to-pink-600 shadow-lg shadow-rose-600/30 transition-all duration-200"
            >
              Send Message
            </Button>

            {status && (
              <p className="text-center text-rose-300 mt-2 animate-pulse">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Right: Contact Info / Socials */}
        <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold text-rose-200">Let’s Connect</h3>
          <p className="text-slate-400 leading-relaxed">
            You can also reach me directly via email or connect with me on my socials. 
            I usually reply within 24 hours.
          </p>

          <div className="space-y-3">
            <p className="text-slate-300">
              📧 <span className="text-rose-400">shantanusaha677@gmail.com</span>
            </p>
            <p className="text-slate-300">
              📞 <span className="text-rose-400">+91 9073915549</span>
            </p>
            <p className="text-slate-300">
              📍 Kolkata, India
            </p>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="https://github.com/" target="_blank" className="text-slate-400 hover:text-rose-400 transition-colors">
              <i className="fa-brands fa-github fa-lg"></i>
            </a>
            <a href="https://linkedin.com/" target="_blank" className="text-slate-400 hover:text-rose-400 transition-colors">
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" className="text-slate-400 hover:text-rose-400 transition-colors">
              <i className="fa-brands fa-twitter fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

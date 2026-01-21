import { motion } from "framer-motion";
import { ChevronDown, Linkedin, Github, Youtube } from "lucide-react";
import { socialLinks } from "@/data/portfolioData";
import { useState, useEffect } from "react";

const iconMap: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
};

export const Hero = () => {
  const [visitCount, setVisitCount] = useState<string>("loading...");

useEffect(() => {
  const azurefunctionApi = 'https://resumecounterapi.azurewebsites.net/api/CounterAPI';
  
  fetch(azurefunctionApi)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response error');
      }
      return response.json();
    })
    .then(response => {
      console.log("Website called function API.");
      setVisitCount(response.visit_count.toLocaleString());
    })
    .catch(error => {
      console.log(error);
      setVisitCount("N/A");
    });
}, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-4xl">
          {/* Welcome text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-primary" />
            Welcome!
          </motion.p>

          {/* Hero headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8"
          >
            I'm Thong,{" "}
            <br className="hidden sm:block" />
            exploring{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">networks,</span>{" "}
            <br className="hidden sm:block" />
            <span className="text-gradient">cloud,</span> and{" "}
            <span className="text-gradient">Linux</span>
          </motion.h1>

          {/* Visit counter */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-body text-foreground-muted text-sm mb-12"
          >
            This page has been viewed{" "}
            <span id="VisitCount" className="text-accent font-medium">
              {visitCount}
            </span>{" "}
            times!
          </motion.p>

          {/* Social links */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-6"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <li key={link.name}>
                  <motion.a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors"
                    whileHover={{ scale: 1.05 }}
                    aria-label={link.name}
                  >
                    <span className="p-2 rounded-lg bg-card border border-border group-hover:border-accent/50 group-hover:shadow-[0_0_15px_hsl(45_95%_58%_/_0.2)] transition-all duration-300">
                      <Icon size={18} className="group-hover:text-accent transition-colors" />
                    </span>
                    <span className="hidden sm:inline font-body text-sm">{link.name}</span>
                  </motion.a>
                </li>
              );
            })}
          </motion.ul>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-foreground-muted hover:text-accent transition-colors"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
};

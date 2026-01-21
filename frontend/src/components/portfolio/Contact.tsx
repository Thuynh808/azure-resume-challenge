import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Youtube, Send } from "lucide-react";
import { socialLinks, contactEmail } from "@/data/portfolioData";

const iconMap: Record<string, typeof Linkedin> = {
  linkedin: Linkedin,
  github: Github,
  youtube: Youtube,
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background-secondary">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-2xl mx-auto leading-tight">
            Any questions or feedback? Just hit me up for a chat!
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            {/* Email */}
            <div className="text-center sm:text-left">
              <h3 className="font-display text-sm uppercase tracking-wider text-foreground-muted mb-3">
                Reach me at
              </h3>
              <a
                href={`mailto:${contactEmail}`}
                className="font-body text-lg text-foreground hover:text-accent transition-colors flex items-center gap-2 justify-center sm:justify-start group"
              >
                <Mail size={18} className="text-primary group-hover:text-accent transition-colors" />
                {contactEmail}
              </a>
            </div>

            {/* Social */}
            <div className="text-center sm:text-left">
              <h3 className="font-display text-sm uppercase tracking-wider text-foreground-muted mb-3">
                Social
              </h3>
              <ul className="flex items-center gap-4 justify-center sm:justify-start">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <li key={link.name}>
                      <motion.a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-card border border-border text-foreground-muted hover:text-accent hover:border-accent/50 hover:shadow-[0_0_20px_hsl(45_95%_58%_/_0.2)] transition-all duration-300 block"
                        whileHover={{ scale: 1.05, y: -2 }}
                        aria-label={link.name}
                      >
                        <Icon size={20} />
                      </motion.a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <motion.div
            className="text-center"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <a
              href={`mailto:${contactEmail}`}
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-display font-semibold text-lg rounded-xl hover:shadow-[0_0_40px_hsl(210_100%_55%_/_0.4)] transition-all duration-300 group"
            >
              <Send size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              Say Hello.
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

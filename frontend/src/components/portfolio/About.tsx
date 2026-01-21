import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { aboutText, credentials } from "@/data/portfolioData";

export const About = () => {
  // Split credentials into two columns
  const midPoint = Math.ceil(credentials.length / 2);
  const leftColumn = credentials.slice(0, midPoint);
  const rightColumn = credentials.slice(midPoint);

  return (
    <section id="about" className="py-24 md:py-32 bg-background-secondary">
      <div className="container px-6">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border bg-card">

                {/* Profile image */}
                <img
                  src="/images/profilepicGIT.png"
                  alt="Profile photo"
                  className="h-full w-full object-cover object-[50%_40%]"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none" />

              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-4 flex items-center gap-4">
              <span className="w-12 h-px bg-primary" />
              About Me
            </p>
            <p className="font-body text-lg md:text-xl text-foreground-muted leading-relaxed mb-8">
              {aboutText}
            </p>
            <motion.a
              href="images/thuynh-pt-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:shadow-[0_0_30px_hsl(210_100%_55%_/_0.3)] transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              View Resume
              <ExternalLink size={18} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </motion.div>
        </div>

        {/* Credentials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-12 text-center">
            Credentials{" "}
            <span className="text-foreground-muted font-normal text-lg">(Click to Verify)</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
            {/* Left Column */}
            <div className="space-y-4">
              {leftColumn.map((cred, index) => (
                <CredentialCard key={index} credential={cred} index={index} />
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {rightColumn.map((cred, index) => (
                <CredentialCard key={index} credential={cred} index={index + midPoint} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface CredentialCardProps {
  credential: {
    title: string;
    issuer: string;
    date: string;
    link: string | null;
  };
  index: number;
}

const CredentialCard = ({ credential, index }: CredentialCardProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`relative p-5 rounded-xl bg-card border border-border transition-all duration-300 group ${
        credential.link
          ? "hover:border-accent/50 hover:shadow-[0_0_20px_hsl(45_95%_58%_/_0.15)] cursor-pointer"
          : ""
      }`}
      whileHover={credential.link ? { scale: 1.01, y: -2 } : undefined}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background-secondary hidden lg:block" />
      
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className={`font-display text-base font-semibold text-foreground mb-1 ${
            credential.link ? "group-hover:text-accent transition-colors" : ""
          }`}>
            {credential.title}
          </h3>
          <p className="font-body text-sm text-foreground-muted">{credential.issuer}</p>
          <p className="font-body text-xs text-foreground-muted/70 mt-1">{credential.date}</p>
        </div>
        {credential.link && (
          <ExternalLink size={16} className="text-foreground-muted group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
        )}
      </div>
    </motion.div>
  );

  if (credential.link) {
    return (
      <a href={credential.link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

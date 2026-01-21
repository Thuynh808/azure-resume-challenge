import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-sm text-foreground-muted">
            © {currentYear} Streetrack. All rights reserved.
          </p>
          <a
            href="#intro"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#intro")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-display text-sm text-foreground-muted hover:text-accent transition-colors"
          >
            Back to top ↑
          </a>
        </motion.div>
      </div>
    </footer>
  );
};

import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-6"
      >
        <h1 className="font-display text-8xl font-bold text-gradient mb-4">404</h1>
        <p className="font-body text-xl text-foreground-muted mb-8">
          Oops! This page doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:shadow-[0_0_30px_hsl(210_100%_55%_/_0.3)] transition-all duration-300"
        >
          <Home size={18} />
          Return to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

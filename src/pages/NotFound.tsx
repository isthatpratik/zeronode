
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal mb-4">404</h1>
        <p className="text-2xl text-offwhite mb-8">Page not found</p>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button asChild className="bg-teal text-charcoal hover:bg-teal/90">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

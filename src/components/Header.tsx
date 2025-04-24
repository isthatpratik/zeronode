
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const routes = [
    { path: '/', label: 'Home' },
    { path: '/executive-summary', label: 'Executive Summary' },
    { path: '/market-overview', label: 'Market Overview' },
    { path: '/orb-platform', label: 'ORB Platform' },
    { path: '/nod-platform', label: 'NOD Platform' },
    { path: '/investment-opportunity', label: 'Investment Opportunity' },
    { path: '/future-outlook', label: 'Future Outlook' },
    { path: '/visualizations', label: 'Interactive Visuals' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 lg:px-24 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-space font-bold text-teal hover:no-underline">
          NeuralArc
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="hidden lg:flex space-x-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="text-offwhite hover:text-teal transition duration-200 text-sm"
              >
                {route.label}
              </Link>
            ))}
          </div>
          <Button asChild className="bg-teal text-charcoal hover:bg-teal/90">
            <Link to="/contact">Get Demo</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-charcoal border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col space-y-3">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-offwhite hover:text-teal py-2 transition duration-200"
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

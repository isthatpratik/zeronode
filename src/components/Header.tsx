
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AIChatWidget from './AIChatWidget';
import APIKeyManager from './APIKeyManager';

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
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-space font-bold text-teal hover:no-underline">
            NeuralArc
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="text-offwhite hover:text-teal transition duration-200 text-sm whitespace-nowrap"
                >
                  {route.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center">
              <Button asChild className="bg-teal text-charcoal hover:bg-teal/90">
                <Link to="/contact">Get Demo</Link>
              </Button>
              <AIChatWidget />
              <APIKeyManager />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <AIChatWidget />
            <APIKeyManager />
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-[72px] bg-charcoal border-t border-white/10">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-3">
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
                <Button asChild className="bg-teal text-charcoal hover:bg-teal/90 w-full mt-4">
                  <Link to="/contact">Get Demo</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

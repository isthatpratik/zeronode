import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AIChatWidget from './AIChatWidget';
import APIKeyManager from './APIKeyManager';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const mainRoutes = [
    { path: '/', label: 'Home' },
    { path: '/executive-summary', label: 'Executive Summary' },
    { path: '/orb-platform', label: 'ORB Platform' },
    { path: '/nod-platform', label: 'NOD Platform' },
    { path: '/platforms/micro-saas', label: 'Micro SaaS Suite' },
  ];

  const investmentRoutes = [
    { path: '/investment-opportunity', label: 'Overview' },
    { path: '/market-overview', label: 'Market Overview' },
    { path: '/visualizations', label: 'Interactive Visuals' },
    { path: '/future-outlook', label: 'Future Outlook' },
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
              {mainRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="text-offwhite hover:text-teal transition duration-200 text-sm whitespace-nowrap"
                >
                  {route.label}
                </Link>
              ))}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-offwhite hover:text-teal transition duration-200 text-sm">
                      Investment Opportunity
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-3 p-4 w-[400px]">
                        {investmentRoutes.map((route) => (
                          <Link
                            key={route.path}
                            to={route.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{route.label}</div>
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="flex items-center">
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
                {mainRoutes.map((route) => (
                  <Link
                    key={route.path}
                    to={route.path}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-offwhite hover:text-teal py-2 transition duration-200"
                  >
                    {route.label}
                  </Link>
                ))}
                <div className="py-2 border-t border-white/10">
                  <p className="text-sm font-medium text-white/60 mb-2">Investment Opportunity</p>
                  {investmentRoutes.map((route) => (
                    <Link
                      key={route.path}
                      to={route.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-offwhite hover:text-teal py-2 block transition duration-200 pl-4"
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
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

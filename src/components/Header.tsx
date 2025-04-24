import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import APIKeyManager from './APIKeyManager';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
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
    { path: '/canvas', label: 'Canvas' },
    { path: '/white-paper', label: 'White Paper' },
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
          <Link to="/" className="flex items-center gap-3 hover:no-underline">
            <img 
              src="/lovable-uploads/3cbb6750-3d48-45e8-b9ea-498f6527d80e.png" 
              alt="NeuralArc Logo" 
              className="h-7 w-auto"
            />
            <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
              <span className="text-2xl font-space font-bold text-teal">
                NeuralArc
              </span>
              <span className="text-xs font-space text-offwhite/60 font-normal">
                Investor Portal
              </span>
            </div>
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
            <div className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="text-offwhite hover:text-teal transition duration-200 text-sm"
              >
                Sign In
              </Link>
              <APIKeyManager />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
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
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

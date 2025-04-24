
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-white/10 py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-space font-bold text-teal hover:no-underline">
              NeuralArc
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Pioneering Neural Business Intelligence
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Platforms</h3>
            <ul className="space-y-2">
              <li><Link to="/orb-platform" className="text-sm">ORB Platform</Link></li>
              <li><Link to="/nod-platform" className="text-sm">NOD Platform</Link></li>
              <li><Link to="/micro-suite" className="text-sm">Micro SaaS Suite</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/market-overview" className="text-sm">Market Overview</Link></li>
              <li><Link to="/executive-summary" className="text-sm">Executive Summary</Link></li>
              <li><Link to="/visualizations" className="text-sm">Interactive Visuals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Contact</h3>
            <address className="not-italic text-sm">
              <p>Email: aniket.tapre@neuralarc.ai</p>
            </address>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-sm text-muted-foreground">
          <p>© 2025 NeuralArc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

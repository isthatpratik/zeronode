import FadeInSection from '@/components/FadeInSection';

const Disclaimer = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
          <div className="prose prose-invert max-w-none">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            <p>This disclaimer governs your use of our website and services.</p>
            {/* Add your disclaimer content here */}
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default Disclaimer; 
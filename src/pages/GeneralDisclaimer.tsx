import FadeInSection from '@/components/FadeInSection';

const Disclaimer = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container h-[calc(100vh-30rem)]">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <h1 className="text-4xl font-bold mb-8">General Disclaimer</h1>
          <div className="prose prose-invert max-w-none">
            <p className="mb-4">The content provided herein is intended solely for informational and reference purposes. While every effort has been made to ensure the accuracy, reliability, and currency of the information, NeuralArc makes no representations or warranties, express or implied, about the completeness, accuracy, suitability, or availability of the content for any purpose.</p>

            <p className="mb-4">Nothing in this material shall be construed as legal advice, professional consultation, or a substitute for independent judgment. Users are advised to consult with a qualified professional or legal advisor before acting upon any information contained herein.</p>

            <p className="mb-4">Under no circumstances shall the Provider, its affiliates, partners, authors, or contributors be liable for any loss, injury, or damage—including without limitation, indirect or consequential loss or damage—arising out of or in connection with the use of or reliance on the material provided.</p>

            <p className="mb-4">Any references to third-party sources, laws, or regulations are for illustrative purposes only and do not imply endorsement or warranty of accuracy.</p>

            <p className="mt-8 text-muted-foreground">By accessing or using this material, you acknowledge and agree to this Disclaimer in its entirety.</p>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default Disclaimer; 
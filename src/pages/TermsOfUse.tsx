import FadeInSection from '@/components/FadeInSection';

const TermsOfUse = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
          <div className="prose prose-invert max-w-none">
            <div className="mb-8 text-muted-foreground">
              <p><strong>Effective Date:</strong> April 2025</p>
              <p><strong>Owner:</strong> NeuralArc</p>
            </div>

            <div className="mb-8">
              <p>These Terms of Use ("Terms") govern your access to and use of the content made available by NeuralArc (hereinafter referred to as the "Provider"). By accessing, reviewing, or utilizing this material in any manner, you acknowledge that you have read, understood, and agreed to be bound by these Terms.</p>
            </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Ownership and Intellectual Property</h2>
              <p>All content provided, whether in written, visual, audio, or digital format (the "Material"), including without limitation, the text, documents, structure, design, graphics, layout, and presentation, is the sole and exclusive property of the Provider or its licensors. The Material is protected by applicable copyright, trademark, trade secret, and other intellectual property laws.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Limited License to Access</h2>
              <p>You are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the Material solely for personal, internal, or non-commercial reference purposes. This license does not include any rights to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Copy, reproduce, or duplicate the Material in whole or in part;</li>
                <li>Modify, adapt, translate, or create derivative works based on the Material;</li>
                <li>Distribute, publish, transmit, broadcast, or otherwise disseminate the Material by any means (including electronic, print, or digital platforms);</li>
                <li>Sell, license, or commercially exploit the Material;</li>
                <li>Store or archive the Material in any public or shared repository, whether physical or cloud-based.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Prohibition on Reproduction</h2>
              <h3 className="text-xl font-semibold mb-2">Strictly No Reproduction:</h3>
              <p>Reproduction of this Material in any form, including but not limited to copying, screenshotting, printing, scanning, uploading to cloud storage, redistributing via email or other platforms, or recording through any medium, is expressly prohibited without the prior written consent of the Provider.</p>
              <p className="mt-4">Any unauthorized use of the Material constitutes a violation of these Terms and may infringe upon intellectual property rights, giving rise to civil and/or criminal liability.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Disclaimer of Warranties</h2>
              <p>The Material is provided on an "as-is" and "as-available" basis. The Provider makes no warranties or representations, express or implied, regarding the accuracy, completeness, reliability, or suitability of the Material for any particular purpose. You agree to use the Material at your own risk.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, the Provider shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or related to your access to or use of the Material, even if advised of the possibility of such damages.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
              <p>The Provider reserves the right to terminate or restrict your access to the Material at any time, without notice or liability, for any reason, including breach of these Terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Governing Law and Jurisdiction</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of Pune, Maharashtra. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Pune, Maharashtra.</p>
            </section>

            <section className="mt-12 p-6 border border-white/10 rounded-lg bg-white/5">
              <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
              <p className="mb-2">For inquiries regarding permissions, licensing, or the use of this Material, please contact:</p>
              <div className="text-muted-foreground">
                <p><a href="mailto:support@neuralarc.ai" className="text-teal hover:text-teal/80">support@neuralarc.ai</a></p>
              </div>
            </section>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default TermsOfUse; 
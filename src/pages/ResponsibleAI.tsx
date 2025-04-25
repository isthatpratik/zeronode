import FadeInSection from '@/components/FadeInSection';

const ResponsibleAI = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="grid-container">
        <FadeInSection className="col-span-4 md:col-span-8 lg:col-span-12">
          <h1 className="text-4xl font-bold mb-8">Responsible AI</h1>
          <div className="prose prose-invert max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Responsible Use of AI-Powered Tools</h2>
              <div className="text-muted-foreground mb-6">
                <p><strong>Applies to:</strong> All Employees, Contractors, and Consultants</p>
                <p><strong>Effective From:</strong> April 2025</p>
              </div>

              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">1. Purpose</h3>
                <p>To ensure the ethical, secure, and compliant use of AI-powered tools such as NeuralArc in the workplace.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">2. Scope</h3>
                <p>This policy applies to any use of third-party AI tools that generate, summarize, or assist in the creation of written content, including documentation, reports, contracts, research, and internal communications.</p>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">3. Guidelines</h3>
                
                <div className="pl-4 mb-6">
                  <h4 className="font-semibold mb-2">a. Permitted Use</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Drafting general content such as templates, outlines, and non-confidential material.</li>
                    <li>Brainstorming, summarizing public content, and refining tone/style of internal documents.</li>
                  </ul>
                </div>

                <div className="pl-4 mb-6">
                  <h4 className="font-semibold mb-2">b. Prohibited Use</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Inputting personal data, sensitive financials, health information, client names, or trade secrets.</li>
                    <li>Uploading or inputting NDA-protected or privileged information.</li>
                    <li>Using AI-generated content as final without proper human review.</li>
                  </ul>
                </div>

                <div className="pl-4 mb-6">
                  <h4 className="font-semibold mb-2">c. Review & Verification</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>All AI-generated content must be reviewed and approved by a team member before external distribution or client use.</li>
                    <li>Outputs are considered draft-only until explicitly approved.</li>
                  </ul>
                </div>

                <div className="pl-4 mb-6">
                  <h4 className="font-semibold mb-2">d. Disclosure Requirements</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>When using AI tools for content shared externally, employees must disclose the use where appropriate (see "Client Disclosure Template").</li>
                  </ul>
                </div>

                <div className="pl-4 mb-6">
                  <h4 className="font-semibold mb-2">e. Tool Vetting</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Only tools approved by the Legal/IT team may be used. Requests for new tools must go through the approval workflow.</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">4. Compliance</h3>
                <p>Violations of this policy may result in disciplinary action. For questions, contact <a href="mailto:support@neuralarc.ai" className="text-teal hover:text-teal/80">support@neuralarc.ai</a></p>
              </section>

              <section className="mt-12 p-6 border border-white/10 rounded-lg bg-white/5">
                <h3 className="text-xl font-semibold mb-4">Disclosure of AI-Assisted Content Generation</h3>
                <p className="mb-4">As part of our commitment to innovation and efficiency, we occasionally use AI-powered tools to support the drafting of preliminary content, such as templates, proposals, or reports. These tools serve as accelerators and are always followed by expert human review and customization tailored to your specific needs.</p>
                
                <p className="font-medium mb-2">Please note:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>All sensitive and confidential client data is handled exclusively by human personnel.</li>
                  <li>AI tools are used in compliance with internal policies and applicable data protection regulations.</li>
                  <li>Final outputs are rigorously validated for accuracy and quality before delivery.</li>
                </ul>
                
                <p className="text-muted-foreground">If you have any questions about our processes or would prefer not to have AI-assisted content included in your project, we're happy to accommodate.</p>
              </section>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
};

export default ResponsibleAI; 
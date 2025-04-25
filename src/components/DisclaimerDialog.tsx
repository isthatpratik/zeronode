import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';

const DisclaimerDialog = () => {
  const { acceptDisclaimer } = useAuth();

  return (
    <Dialog open={true}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Confidentiality Agreement</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <p>
            This website (the "Website") contains confidential, proprietary, and commercially sensitive information belonging to NeuralArc, including but not limited to strategic plans, financial data, operational insights, and information relating to the Company's AI systems, models, and data infrastructure. It is provided solely for informational purposes to a limited number of recipients for the purpose of evaluating a potential business relationship or investment.
          </p>
          <p>
            By accepting this Website, you agree that the information contained herein shall be treated as strictly confidential and shall not be disclosed, copied, reproduced, shared, or distributed in any form electronically or otherwise without the prior written consent of the Company.
          </p>
          <p>
            This Website does not constitute an offer to sell or a solicitation of an offer to buy any securities or engage in any transaction. No representation or warranty, express or implied, is made as to the accuracy, completeness, or reliability of the information contained herein, including any forward-looking statements or assumptions.
          </p>
          <p>
            All AI-related content, data outputs, and intellectual property disclosed herein remain the exclusive property of the Company. Any unauthorized use or dissemination of this information, particularly that relating to AI technologies and proprietary systems, is strictly prohibited and may result in legal liability.
          </p>
          <p>
            By proceeding, you confirm your agreement to comply with these terms and to return or securely destroy this material upon request.
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <Button 
            onClick={acceptDisclaimer}
            className="bg-teal text-charcoal hover:bg-teal/90"
          >
            I Accept the Terms
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DisclaimerDialog; 

import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Valuation = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">3 ▸ Valuation Math (Discounted)</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Approach</TableHead>
            <TableHead>Inputs</TableHead>
            <TableHead>Present-Value (PV)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Forward-ARR Multiple</TableCell>
            <TableCell>2028E Total ARR US $ 7 m × 7 × industry SaaS multiple</TableCell>
            <TableCell>US $ 49 m EV</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>High-risk discount</TableCell>
            <TableCell>35 % rate, 3-year bring-back</TableCell>
            <TableCell>US $ 18.5 m PV</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5-yr DCF</TableCell>
            <TableCell>Cash flows from table above, 35 % discount</TableCell>
            <TableCell>US $ 16.3 m PV</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="font-semibold">
        Result: Both methods yield US $ 16-19 m today—&gt; 30 % upside vs. our US $ 12 m cap.
      </p>
    </div>
  );
};

export default Valuation;

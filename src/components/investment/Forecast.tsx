
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Forecast = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">2 ▸ 5-Year Conservative Forecast (Platforms + Micro-Apps)</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Year</TableHead>
            <TableHead>Enterprise Clients</TableHead>
            <TableHead>Core-Platform ARR (US $ m)</TableHead>
            <TableHead>Active Micro-App Users</TableHead>
            <TableHead>Micro-App ARR (US $ m)</TableHead>
            <TableHead>Total ARR (US $ m)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>2025</TableCell>
            <TableCell>10</TableCell>
            <TableCell>0.20</TableCell>
            <TableCell>5 k</TableCell>
            <TableCell>0.15</TableCell>
            <TableCell>0.35</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2026</TableCell>
            <TableCell>30</TableCell>
            <TableCell>0.72</TableCell>
            <TableCell>20 k</TableCell>
            <TableCell>0.45</TableCell>
            <TableCell>1.17</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2027</TableCell>
            <TableCell>75</TableCell>
            <TableCell>2.03</TableCell>
            <TableCell>55 k</TableCell>
            <TableCell>1.00</TableCell>
            <TableCell>3.03</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2028</TableCell>
            <TableCell>150</TableCell>
            <TableCell>4.50</TableCell>
            <TableCell>100 k</TableCell>
            <TableCell>2.50</TableCell>
            <TableCell>7.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2029</TableCell>
            <TableCell>250</TableCell>
            <TableCell>8.00</TableCell>
            <TableCell>160 k</TableCell>
            <TableCell>4.10</TableCell>
            <TableCell>12.10</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <div className="mt-4">
        <h3 className="font-bold mb-2">Assumptions (intentionally conservative)</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Platform ACV starts at US $ 20 k, rises to US $ 32 k by 2029.</li>
          <li>Micro-App ARPU rises from US $ 2.5 → 3.5 / mo as freemium converts.</li>
          <li>Client CAGR ≤ 64 %; user CAGR ≤ 80 %—both below Gen-AI medians.</li>
          <li>Gross margin stabilises &gt; 84 %; churn &lt; 4 %; NDR &gt; 130 %.</li>
        </ul>
      </div>
    </div>
  );
};

export default Forecast;

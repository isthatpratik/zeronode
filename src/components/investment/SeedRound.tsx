
import React from "react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const SeedRound = () => {
  return (
    <Card className="bg-charcoal/50 p-6 rounded-lg border border-white/10">
      <h2 className="text-2xl font-bold mb-4">Seed Round Details</h2>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-bold">Capital sought</TableCell>
            <TableCell>US $ 500 k</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Instrument</TableCell>
            <TableCell>Convertible SAFE (MFN) or straight equity (≈ 4 % for US $ 500 k)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-bold">Pre-money valuation</TableCell>
            <TableCell>US $ 12 m</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  );
};

export default SeedRound;


import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const Benchmarks = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">1 ▸ How Does US $ 12 m Compare? – 2025 Seed & Pre-Seed Benchmarks</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company (2025)</TableHead>
            <TableHead>Focus</TableHead>
            <TableHead>Round</TableHead>
            <TableHead>Raise</TableHead>
            <TableHead>Implied Pre-money*</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Jurimesh</TableCell>
            <TableCell>AI due-diligence automation</TableCell>
            <TableCell>Pre-Seed</TableCell>
            <TableCell>€1.6 m</TableCell>
            <TableCell>≈ US $ 8 m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>WilsonAI</TableCell>
            <TableCell>AI paralegal for in-house teams</TableCell>
            <TableCell>Pre-Seed</TableCell>
            <TableCell>US $ 1.7 m</TableCell>
            <TableCell>≈ US $ 8 m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Augmetec</TableCell>
            <TableCell>AI investigations platform</TableCell>
            <TableCell>Seed</TableCell>
            <TableCell>£2 m</TableCell>
            <TableCell>≈ US $ 10 m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Aracor AI</TableCell>
            <TableCell>AI contract review</TableCell>
            <TableCell>Pre-Seed</TableCell>
            <TableCell>US $ 4.5 m</TableCell>
            <TableCell>≈ US $ 18 m</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Median AI Seed (2024-25)</TableCell>
            <TableCell>—</TableCell>
            <TableCell>—</TableCell>
            <TableCell>—</TableCell>
            <TableCell>US $ 12 m</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="text-sm text-muted-foreground">*Implied pre-money assumes standard 20-25 % dilution where valuations were not disclosed.</p>
      <p className="mt-4 font-semibold">
        Take-away: Neural Arc&apos;s US $ 12 m cap sits right on the sector median—below several peers that have no enterprise revenue yet.
      </p>
    </div>
  );
};

export default Benchmarks;

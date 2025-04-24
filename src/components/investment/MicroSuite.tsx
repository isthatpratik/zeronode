
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const MicroSuite = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">4 ▸ Neural Arc Micro-AI SaaS Suite</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>App</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Rovyk</TableCell>
            <TableCell>Unified chat & prompt lab for GPT-4o, Claude-3, Gemini, Mistral</TableCell>
            <TableCell>Live</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>LawBit.ai</TableCell>
            <TableCell>AI contract drafting & clause-risk analysis</TableCell>
            <TableCell>Live</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Compliance AI</TableCell>
            <TableCell>Instant gap-scan against HIPAA, GDPR, ISO-27001</TableCell>
            <TableCell>Live</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Kashew</TableCell>
            <TableCell>AI invoicing & cash-flow forecasting</TableCell>
            <TableCell>In development (Beta H2 2025)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Spider</TableCell>
            <TableCell>No-code data extractor with Gen-AI transforms</TableCell>
            <TableCell>In development (Beta H2 2025)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Striker</TableCell>
            <TableCell>Real-time market-signal radar</TableCell>
            <TableCell>In development (Beta H2 2025)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>PatentPal</TableCell>
            <TableCell>End-to-end patent filing assistant</TableCell>
            <TableCell>Planned (H1 2026)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Asseto</TableCell>
            <TableCell>Smart receipt & warranty tracker</TableCell>
            <TableCell>Planned (H1 2026)</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>ScribbleCRM</TableCell>
            <TableCell>Lightweight CRM that OCRs handwritten notes</TableCell>
            <TableCell>Planned (H1 2026)</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p className="mt-4">
        The micro-app fabric (shared auth, billing, model orchestration) lets us launch each new utility for &lt; US $ 40 k, compounding ARR with minimal incremental burn.
      </p>
    </div>
  );
};

export default MicroSuite;

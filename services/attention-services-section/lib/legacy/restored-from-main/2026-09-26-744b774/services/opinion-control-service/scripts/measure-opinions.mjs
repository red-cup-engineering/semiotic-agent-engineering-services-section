#!/usr/bin/env node
import { measureOpinions } from "../src/opinion-control.mjs";
import { runJavascriptNodeOperation } from "@red-cup-engineering/javascript-node-services-section/operation";

export function measureOpinionsFromDocument(document) {
  return measureOpinions(document.snapshot, document, { generatedAt: document.generatedAt });
}

if (import.meta.main) {
  const result = await runJavascriptNodeOperation({ name: "measure-opinions", description: "measureOpinionsFromDocument — the measure-opinions operation.", operation: measureOpinionsFromDocument }, { arguments: process.argv.slice(2), standardInput: process.stdin, standardOutput: process.stdout });
  process.exitCode = result.exitCode;
}

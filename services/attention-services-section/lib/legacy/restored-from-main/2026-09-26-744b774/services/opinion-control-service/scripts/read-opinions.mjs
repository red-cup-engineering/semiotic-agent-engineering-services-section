#!/usr/bin/env node
import { foldOpinions } from "../src/opinion-control.mjs";
import { runJavascriptNodeOperation } from "@red-cup-engineering/javascript-node-services-section/operation";

export function readOpinionsFromDocument(document) {
  return foldOpinions(document.events, { generatedAt: document.generatedAt });
}

if (import.meta.main) {
  const result = await runJavascriptNodeOperation({ name: "read-opinions", description: "readOpinionsFromDocument — the read-opinions operation.", operation: readOpinionsFromDocument }, { arguments: process.argv.slice(2), standardInput: process.stdin, standardOutput: process.stdout });
  process.exitCode = result.exitCode;
}

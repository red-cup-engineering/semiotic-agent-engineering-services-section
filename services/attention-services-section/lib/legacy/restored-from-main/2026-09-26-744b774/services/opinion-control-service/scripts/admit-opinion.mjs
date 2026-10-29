#!/usr/bin/env node
import { admitOpinion } from "../src/opinion-control.mjs";
import { runJavascriptNodeOperation } from "@red-cup-engineering/javascript-node-services-section/operation";

export function admitOpinionFromDocument(document) {
  return admitOpinion(document, { at: document.at });
}

if (import.meta.main) {
  const result = await runJavascriptNodeOperation({ name: "admit-opinion", description: "admitOpinionFromDocument — the admit-opinion operation.", operation: admitOpinionFromDocument }, { arguments: process.argv.slice(2), standardInput: process.stdin, standardOutput: process.stdout });
  process.exitCode = result.exitCode;
}

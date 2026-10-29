#!/usr/bin/env node
import { weightRecognition } from "../src/recognition-ranking.mjs";

export const weightRecognitionScript = (params = {}) => weightRecognition(params);

async function readParams() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(Buffer.from(chunk));
  const text = Buffer.concat(chunks).toString("utf8");
  const trimmed = text.trim();
  if (trimmed === "") return {};
  if (!trimmed.startsWith("{")) return { sources: text };
  const value = JSON.parse(trimmed);
  if (value === null || typeof value !== "object" || Array.isArray(value)) throw new TypeError("stdin JSON must be an object");
  return value;
}

if (import.meta.main) {
  try {
    process.stdout.write(`${JSON.stringify(weightRecognitionScript(await readParams()))}\n`);
  } catch (error) {
    process.stderr.write(`weight-recognition: ${error instanceof Error ? error.message : String(error)}\n`);
    process.exitCode = 1;
  }
}

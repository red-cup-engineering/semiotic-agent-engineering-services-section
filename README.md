# Semiotic Agent Services Section

<!-- 561-group-standards:badges:start -->
[![Red Cup Engineering](https://img.shields.io/badge/561%20Group-Red%20Cup%20Engineering-c0392b)](https://github.com/red-cup-engineering)
[![License: MIT](https://img.shields.io/badge/license-MIT-c0392b)](LICENSE)
[![Indigenous data: CARE](https://img.shields.io/badge/Indigenous%20data-CARE-4b6f44)](https://github.com/red-cup-engineering/.github/blob/main/GOVERNANCE.md)
[![Tips welcome](https://img.shields.io/badge/tips-welcome-d4a017)](https://github.com/561-group/.github/blob/main/TIPS.md)
<!-- 561-group-standards:badges:end -->

This section is a pure grouping umbrella: it has no `content/` or `src/` of
its own; its agent-facing implementations live under `services/`.

## Children

- `services/attention-services-section/services/attention-allocation-readout-service`
  — computes deterministic attention-allocation readouts and exposes the
  `@red-cup-engineering/attention-allocation-readout-service` package.
- `services/semiotic-agent-capability-services-section/services/capability-pricing-service`
  — ranks same-denomination provider offers by expected consideration per
  verified result, using explicit costs and observed task-class outcomes.
  Ships `src/pricing.mjs` plus three CLI/server scripts
  (`capability-price`, `capability-reservation-quote`,
  `serve-capability-pricing`). Its own `node --test` run passes (11/11) as
  of this pass — it does not depend on any unvendored workspace package.

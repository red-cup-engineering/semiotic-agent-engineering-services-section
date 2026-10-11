# Semiotic Agent Services Section

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

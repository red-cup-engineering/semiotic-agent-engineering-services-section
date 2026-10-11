# Attention Services Section

This section owns the semiotic-agent services that price and allocate limited
attention against a declared budget. There is no section-level runtime or
package.

`attention-allocation-readout-service` implements the monotone-budget
greedy allocation specified by Obsmetrologia's
`Cohomology/AttentionAllocation.lean`, computes the funded subset for a
budget and a candidate list over an ActivityStreams contract face, and
reports tie-set choice bits and locally measured resource use. It settles
no cash price and claims no formally verified Lean extraction.

The implementation retains its Obsmetrologia mathematical provenance while
belonging to the semiotic-agent service topology.

`recognition-ranking-service` ranks caller-supplied recognition evidence by
the declared order `sense > rememberContexted-sense > learning`, then by
weight and stable URI order. Its source is a deterministic transformation;
its `read-recognition` and `weight-recognition` scripts are executable faces
over explicit inputs. Obtaining evidence from a context system is app-level
composition and is not hidden inside the ranking service.

`opinion-control-service` admits explicit operator opinions as journal events,
folds explicit event sets into a control, and measures subjects against that
control. Journal custody and CLI composition remain outside the service's pure
source operations.

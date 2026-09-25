# Repository Agent Instructions

The active 11.11 application is under `artifacts/eleven-eleven`. Read and preserve its project rules in `artifacts/eleven-eleven/AGENT_RULES.md` before making application changes. Do not modify legacy or unrelated project paths unless the task explicitly requires it.

# Mandatory Product Memory

Before planning, designing, reviewing, or implementing any 11.11 work, read:

1. `artifacts/eleven-eleven/docs/11-11/START_HERE.md`
2. `artifacts/eleven-eleven/docs/PROJECT_VISION.md`
3. `artifacts/eleven-eleven/docs/project-memory.json`
4. `artifacts/eleven-eleven/docs/internal/narrative/current/ar/manifest.json`

Use `$11-11-game-director` for roadmap, system-order, story-to-gameplay,
third-person, Manhwa, puzzle, progression, economy, or milestone decisions.
The Owner has explicitly chosen quality over speed and authorized a long,
evidence-gated production. This does not authorize skipping the current phase,
building every system at once, or replacing 11.11 with a clone of another game.

# Mandatory 11.11 Quality Gate

For EVERY implementation, bug fix, refactor, UI change, gameplay change,
content integration, asset change, data change, or system modification:

Before reporting the task complete, you MUST invoke and satisfy:

$11.11-autonomous-quality-gate

The task is NOT complete merely because code was written or tests passed.

Required lifecycle:

UNDERSTAND
→ INSPECT
→ PLAN
→ IMPLEMENT
→ VERIFY
→ SELF-CRITIQUE
→ AUTO-FIX SAFE DEFECTS
→ VERIFY AGAIN
→ REGRESSION REVIEW
→ FINAL DELIVERY

Do not knowingly return fixable defects to the Owner.

If runtime/browser evidence is genuinely unavailable, never fabricate PASS.
Complete every verification possible and explicitly report the missing runtime evidence.

# Mandatory 11.11 Player Experience Finish

For every player-facing integration, visual pass, puzzle pass, or release task:

- Prefer clear, evocative player-facing names over internal or legacy labels.
  Rename navigation items and mode labels when evidence shows that the new name
  makes the journey easier to understand without changing Canon.
- The game must feel like one connected experience. Story, Manhwa, puzzles,
  characters, progression, rewards, Daily, and Weekly may not feel like isolated
  demos or hidden developer screens.
- Every completed Story puzzle must produce a polished, accessible completion
  moment using the existing authoritative reward receipt: visual feedback,
  reward details, achievement feedback when earned, and a dedicated game sound
  when sound is enabled. Never grant rewards or achievements from presentation
  code, and never replay a server-owned reward from a duplicate request.
- Sound, animation, and notifications must respect mute/volume, reduced-motion,
  accessibility, and player control. Provide visual equivalents for audio cues.
- Player-facing UI must be polished, cinematic, enjoyable, and unmistakably
  consistent with the 11.11 visual language. Use strong purposeful animation
  for entry, puzzle interaction, completion, rewards, achievements, and Echo
  transformation moments. Avoid constant decorative motion that competes with
  gameplay, and keep a complete Reduced Motion alternative.
- Verify ambitious UI and animation work on target landscape viewports and
  against performance evidence. Visual intensity never justifies clipped
  controls, input delay, illegible RTL text, inaccessible focus, or oversized
  blocking payloads.
- Optimize for strong attachment to the characters, story curiosity, satisfying
  mastery, and meaningful Daily/Weekly return. Do not use deceptive dark
  patterns, fake urgency, punitive streak loss, spam notifications, or coercive
  engagement mechanics.
- Fix every known repository-local defect required to make the existing Part 1
  experience cohesive, playable, attractive, and release-ready before reporting
  completion. Add assets or content only when they close an evidenced release
  gap and remain within approved Canon.

<!-- CODEX_CCE_QUALITY_GUARDRAILS_BEGIN -->

# Codex Context Efficiency + Quality Guardrails

Use Code Context Engine as the FIRST tool for broad repository exploration
and codebase discovery whenever its MCP tools are available.

Primary workflow:

1. Search indexed context first.
2. Identify the smallest relevant group of files, symbols, classes, systems,
   scenes, prefabs, modules, or configurations.
3. Open/read the ORIGINAL source files before important edits.
4. Never modify critical code based only on a compressed summary.
5. If indexed results are incomplete, ambiguous, low-confidence, stale,
   or conflict with source, immediately fall back to normal Codex
   repository search and direct file reads.
6. Correctness, architecture quality, game quality, and verification
   always have priority over token savings.
7. Avoid repeatedly rereading unchanged large files.
8. Avoid dumping entire folders or huge logs into context.
9. For logs, inspect errors and surrounding relevant sections first.
10. For cross-cutting architecture changes, retrieve a broader dependency
    set and inspect the original implementations before editing.
11. For files changed during the current task, treat the original file
    contents as authoritative.
12. After a meaningful batch of source changes, refresh the CCE index
    before relying on indexed search for those changed areas.
13. Run focused tests/builds first, then broader validation when warranted.
14. Never lower reasoning effort or skip testing merely to save tokens.
15. Do not sacrifice visual quality, gameplay quality, animation quality,
    architecture, reliability, or maintainability for token savings.

For large game projects, avoid unnecessary context from generated/cache
directories such as:

- Library/
- Temp/
- Logs/
- obj/
- bin/
- Build/
- Builds/
- Binaries/
- Intermediate/
- Saved/
- DerivedDataCache/
- node_modules/
- .git/
- .vs/

Use direct reads when exact serialized game data, scene data, prefab data,
shader code, animation state logic, configuration, or generated output is
actually required for the current task.

<!-- CODEX_CCE_QUALITY_GUARDRAILS_END -->

## Context Engine (CCE)

This project uses Code Context Engine for intelligent code retrieval and
cross-session memory.

### Searching the codebase

**Use `context_search` instead of reading files directly** when exploring
the codebase, answering questions about code, or understanding how things
work. `context_search` returns the most relevant code chunks with
confidence scores instead of whole files.

When to use `context_search`:
- Answering questions about the codebase ("how does X work?", "where is Y?")
- Exploring structure or architecture
- Finding related code, functions, or patterns

Other tools:
- `expand_chunk` for full source of a compressed result
- `related_context` for what calls/imports a function
- `session_recall` to recall past decisions

### Cross-session memory

Call `session_recall("topic phrase")` before answering non-trivial questions.
Call `record_decision(decision="...", reason="...")` after making choices.
Call `record_code_area(file_path="...", description="...")` after meaningful work.

### Output style

Respond in compressed style. Drop articles (a, an, the) in prose. Use
sentence fragments over full sentences. Use short synonyms (fix not resolve,
check not investigate). Pattern: [thing] [action] [reason]. [next step].
No filler, hedging, pleasantries, trailing summaries, or restating what
the user said. One sentence if one sentence is enough.

When suggesting code changes, show only the changed lines with 3 lines of
context. Never rewrite entire files. Multiple changes in one file: show each
change separately. Never echo back unchanged code the user already has.

Code blocks, file paths, commands, error messages: always written in full.
Security warnings and destructive action confirmations: use full clarity.

<!-- CCE-CODEX-HQ-BEGIN -->
## CCE high-quality context policy

- For broad repo discovery, use CCE context_search before large file reads.
- Use related_context for cross-file dependencies.
- Before important edits, inspect/expand the exact original implementation.
- Never trade correctness, architecture, gameplay quality, animation quality,
  visual quality, debugging accuracy, or testing quality for token savings.
- If CCE results are uncertain or incomplete, immediately use direct source reads.
- Avoid rereading unchanged large files and avoid dumping full build logs.
- Record durable architecture decisions/code areas so future sessions can recall them.
- Keep the CCE index fresh after meaningful edits.
- Prefer diffs/changed sections instead of reproducing entire unchanged files.
<!-- CCE-CODEX-HQ-END -->

@RTK.md

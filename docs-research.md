---
title: Award-Winning Dev Docs — Research for sybra-website
created: 2026-04-16
scope: Compile industry best-practice for premium developer documentation — awards, exemplars, principles, AI-era patterns
target: Build sybra-website (docs for Sybra: local desktop app orchestrating Claude Code agents)
---

# Award-Winning Developer Documentation — Research Compilation

> Goal: Distill the best developer-documentation practice from 2021–2026 into actionable guidance for `sybra-website`.
>
> Structure:
> 1. Awards & industry recognition (who won, what won)
> 2. Exemplar site teardowns (concrete patterns from top 12 sites)
> 3. Principles & frameworks (Diátaxis, Google/Microsoft style, plain language, accessibility)
> 4. Emerging AI-era patterns (llms.txt, inline AI, runnable playgrounds)
> 5. Table-stakes checklist for 2026
> 6. Distinguishing moves (wow-factor)
> 7. Direct recommendations for `sybra-website`
> 8. Starter-kit stack proposal

---

## 1. Awards & Industry Recognition (2021–2026)

### 1.1 DevPortal Awards (Pronovix) — the most formal recognition in the space
Run since 2022. Fourth year in 2025; nine categories, 44 nominees. <https://devportalawards.org/winners>

**2025 winners**
- **North Developer** — Best Overall, Best Onboarding, Best Solution Portal
- **Cloudflare Docs** — Best Unified Enterprise (<https://developers.cloudflare.com>)
- **Cloudinary Doc Portal** — Best AI-Enabled
- **Canva Developers** — Best API Marketplace
- **Mappedin** + **Pismo** — Best Reference Docs Beyond REST
- **UPS Developer Portal** — Best Written API Reference Topics

**2024 winners**
- **Mapbox Docs** — Best Unified Enterprise
- **Cloudinary Docs** + **Miro Developer Platform** — Best Use of Analytics
- **XRP Ledger Developer Resources** — Best Reference Beyond REST
- **Worldpay Developer Hub** — Best Enterprise Portal

**2023 winners (notable)**
- **Miro Developer Platform** + **react.dev** — Best New DX Innovation
- **react.dev** — Best API Reference Docs
- **Spotify for Developers** — Best Accessible Devportal
- **Viam Documentation** — Best Visual Design

Pronovix's jury commentary recurs on: onboarding journey, personalization (logged-in state), findability, analytics loops, and "designed-for-humans" writing style.

### 1.2 Write the Docs — the community consensus
WTD doesn't run a formal award, but conference talks crown the consensus. Recurring case studies (Portland/Berlin/Australia 2023–2025 — <https://www.writethedocs.org/conf/>):
- **Stripe, Twilio, MDN, Django** cited almost every year
- Automation Anywhere on contextual in-product UX (Portland 2024)
- AWS on treating docs with engineering rigor (Portland 2024)

Community Slack repeatedly nominates **Stripe, MDN, Django, PostgreSQL, Arch Wiki** as reference-class.

### 1.3 Hacker News "best docs" peer review
Consolidated from multiple HN Ask threads; top 2024 thread: <https://news.ycombinator.com/item?id=41538743>

Most-nominated sites (descending citation frequency):
1. **Stripe** — "the gold standard"
2. **MDN / developer.mozilla.org**
3. **Django**
4. **PostgreSQL**
5. **PHP.net**
6. **Arch Linux Wiki**
7. **Wolfram Language** (live-executable inline examples)
8. **docs.rs / Rust std**
9. **Elixir / HexDocs**
10. **HAProxy**

### 1.4 Nielsen Norman Group
No single study targets dev docs, but applicable guidance:
- Jakob's Law → docs should feel like tools the reader already knows
- F-pattern + scannability guidelines form the basis of most modern docs IA

---

## 2. Exemplar Site Teardowns

### 2.1 Stripe — <https://docs.stripe.com>
Industry benchmark.
- **Layout**: signature three-column (nav tree · prose ~700px · sticky live code panel right)
- **Personalization**: signed-in users get **their live test keys auto-injected into every code sample** — highest-magic move in docs today
- **Language tabs persist globally** (Python/Node/Ruby/Go/PHP/curl) — select once, remembered across all pages
- **Hover-sync**: hovering a param in prose highlights matching lines in the right code pane
- **Callouts**: info/tip/warn/danger tinted-bg with left accent rule
- **Cmd-K** search spans guides + API ref + support
- **Signature move**: personalized code samples
- References: [Oxford Comma teardown](https://medium.com/the-oxford-comma/stripes-new-api-reference-documentation-e6b1fc46896d), [Moesif teardown](https://www.moesif.com/blog/best-practices/api-product-management/the-stripe-developer-experience-and-docs-teardown/)

### 2.2 Tailwind CSS — <https://tailwindcss.com/docs>
- **Templated per-utility structure**: Quick Reference table → Examples → Custom values → Responsive → Related. Regulars can predict where any info lives.
- **Live preview above raw HTML** on every utility page — uses the real utilities so a doc break = a product break
- **Tailwind Play** (<https://play.tailwindcss.com>) embedded as a genuine sandbox with the real build pipeline
- **Signature move**: the doc IS the demo

### 2.3 Linear — <https://linear.app/docs> · <https://linear.app/method> · <https://linear.app/changelog>
Design reference for the "calm docs" aesthetic.
- **Inter Display** + **Inter**; generous vertical rhythm; single-column centered prose
- **Prose-first, not code-first** (it's an app, not an SDK) — screenshots dominate
- **`/method`** — opinionated essay series doubles as thought leadership
- **Changelog**: date + bold title + screenshot + prose; no categories, no tags; treats each entry as a mini-post
- **Signature move**: docs as product statement

### 2.4 Vercel — <https://vercel.com/docs>
- **Geist Sans + Geist Mono** — the visual dialect for "modern dev tool" (<https://vercel.com/font>)
- **Black-default dark mode**; monochrome (almost no color accent)
- **Package-manager tabs** via single declarative attribute (`package-manager="npm|yarn|pnpm|bun"`)
- **Every asset has light AND dark variants** swapped via CSS — the polish competitors skimp
- **Ask AI** in header; feedback widget at bottom
- **Signature move**: paired light/dark assets

### 2.5 Supabase — <https://supabase.com/docs>
- **Client-library tabs** (JS/Dart/Swift/Python/Kotlin/C#) with global persistence
- **In-page AI assistant** that writes SQL against YOUR project tables — docs that execute
- **Dark-default** with the single Supabase green (#3ECF8E) as accent
- **Fix with Assistant** buttons route prompts to Claude/ChatGPT
- Ships `llms.txt`
- **Signature move**: docs that know who you are

### 2.6 Prisma — <https://www.prisma.io/docs>
- Branching "getting started" wizard (DB × framework combos)
- **"Copy as Markdown"** button on every page — explicit LLM-first export
- `Ctrl+I` for Ask AI; Cmd-K for search
- **Signature move**: Copy-as-Markdown

### 2.7 Raycast — <https://developers.raycast.com> · <https://www.raycast.com/changelog>
- **Emoji-led changelog categorization** (✨ New / 💎 Improvements / 🐞 Fixes / 🧪 Experiments)
- Full-width hero images and inline GIFs per entry
- **Paginated** (not infinite-scroll) — cacheable, linkable
- Very native-macOS aesthetic; Raycast pink (#FF6363) accent, dark-default
- **Signature move**: release notes as a feature, not an afterthought

### 2.8 Cloudflare — <https://developers.cloudflare.com>
2025 DevPortal Award winner for Unified Enterprise. Built on **Astro Starlight** since 2025 ([migration post](https://blog.cloudflare.com/open-source-all-the-way-down-upgrading-our-developer-documentation/)).
- Unified portal across ~40 product lines → product-scoped sub-nav + global search
- **`llms.txt` + `llms-full.txt`** published (headline adopter)
- Inline **Ask AI** on every page
- **Run in Playground** link next to snippets → one click from read to run
- **Signature move**: inline runnable playground

### 2.9 Anthropic — <https://docs.anthropic.com> / <https://platform.claude.com/docs>
- **Styrene A/B** (Commercial Type) for display; Tiempos Text for prose
- **Warm tan #D4A27F on cream or #191919** — docs feel like a printed book
- Three-column on API ref with Try It executing against sandboxed key
- Global language-tab sync (pick Python once, all samples flip)
- **Signature move**: cream + Styrene aesthetic — brand-forward, ignores the black-default orthodoxy

### 2.10 Resend — <https://resend.com/docs>
Mintlify-powered.
- **`<Prompt>` component** — first-class card shipping AI-agent guardrails (do's/don'ts, required params, verification) that devs copy into Claude/Cursor
- Code groups with npm/yarn/pnpm/bun
- **Signature move**: docs-as-tooling — prompts shipped as content

### 2.11 Clerk — <https://clerk.com/docs>
- Triple-indexed IA: learning path × feature domain × stack (Next.js / React / Vue / Go / Python)
- **Framework switcher at top of page**: pick Next.js App Router vs Pages Router and every block on every page re-renders
- **Signature move**: persistent stack switcher reshapes whole site

### 2.12 Fumadocs — <https://fumadocs.dev>
- **TypeScript Twoslash** integration: hover a type in code to see the inferred TS type inline — the most "alive" code blocks in the industry
- MDX + React Server Components for DB-driven docs
- File tree, steps, type tables; Geist by default
- Three content modes: Docs / Notebook / OpenAPI
- **Signature move**: Twoslash inline type hints

---

## 3. Principles & Frameworks

### 3.1 Diátaxis (<https://diataxis.fr>)
Four documentation types. Mixing them is the #1 cause of bad docs.

| Type | User need | Voice |
|---|---|---|
| **Tutorial** | Learning | "We will…" |
| **How-to** | Goal completion | "To do X, do Y" |
| **Reference** | Information lookup | Neutral, terse |
| **Explanation** | Understanding | Discursive |

**Rules:**
- One page = one quadrant. Never blend tutorial steps with reference tables.
- Tutorials: must work end-to-end for a beginner. No "or you can skip this" branches.
- How-tos: assume competence. Title starts with goal ("How to rotate an API key").
- Reference: describe the machine, don't teach. No "best practice" asides.
- Explanation: no instructions. If you write "run `x`", you're in the wrong quadrant.

**Adoption**: Ubuntu, Python core docs, Gatsby, Sequin, many DevPortal Award winners.

### 3.2 Google Developer Documentation Style Guide (<https://developers.google.com/style>)

**Voice & tone**
- Conversational but professional; contractions OK
- Second person (`you`); never `we` for reader's action — `we` = the product team
- Present tense: "the function returns X", not "will return"

**Sentences**
- Target ≤26 words; aim 15–20. One idea per sentence. Active voice.

**Lists vs prose**
- 3+ parallel items → bulleted list
- Ordered steps → numbered list, one action per step
- Bullets must be grammatically parallel

**Code**
- Backticks for filenames, commands, UI labels in running text
- Fenced blocks with language tag
- Show output separately from commands; never prefix `$` (breaks copy-paste)
- Placeholders in `UPPER_SNAKE_CASE` or `<angle-brackets>`, consistently

**Inclusive language**
- Avoid: whitelist/blacklist, master/slave, dummy, sanity check, crazy, crippled
- Avoid: "simply", "just", "easy", "obvious"

> **Bad**: "Simply just run the command and it should probably work."
> **Good**: "Run `sybra start`. The daemon binds to port 8080."

### 3.3 Microsoft Writing Style Guide — top 10 (<https://learn.microsoft.com/style-guide>)
1. Lead with the user's goal, not the feature name
2. Second person singular
3. Active voice, present tense
4. Sentence-case headings ("Configure the agent", not "Configure The Agent")
5. Serial comma
6. Numbers: spell out 0–9, digits for 10+
7. Bold UI labels, code font for input
8. "for example" not "e.g.", "that is" not "i.e."
9. Don't anthropomorphize ("The app wants to" → "The app requires")
10. Global English: avoid idioms; ISO 8601 dates

### 3.4 Write the Docs community (<https://writethedocs.org>)
- **ARID > DRY** (Accept some Repetition In Docs)
- Write for the reader, not the writer
- **Docs-like-code** philosophy:
  - Docs live next to code, markdown/MDX in version control
  - PR workflow, docs reviewed alongside code
  - CI: link checkers, spell check, build check, screenshot regen
  - Vercel/Netlify/Cloudflare Pages previews per PR
  - Style linters: Vale, alex, textlint
  - "No feature ships without docs"

### 3.5 Plain language — concrete targets
- **Reading level**: Grade 8–10 (Flesch-Kincaid)
- **Sentence length**: ≤20 words avg; hard cap ~30
- **Paragraphs**: ≤5 sentences
- **Active voice**: ≥90% of sentences
- Prefer Anglo-Saxon over Latinate: `use` > `utilize`, `help` > `facilitate`, `start` > `initiate`, `about` > `regarding`
- Cut: "in order to" → "to"; "at this point in time" → "now"; "due to the fact that" → "because"

> **Bad**: "In order to facilitate the initiation of an agent, it is necessary that the requisite configuration be provided by the user." (40 words)
> **Good**: "To start an agent, provide the config." (7 words)

### 3.6 Information architecture (Redish, NN/g)
- **Progressive disclosure**: 80% case at top; edge cases in `<details>` or separate page
- **Inverted pyramid**: conclusion first, background last
- **F-pattern scannability**: front-load keywords per line; descriptive headings every 200–300 words; bold ≤1 phrase per paragraph
- **Nutrition-label metadata per page**: prerequisites box, estimated time, applies-to versions, last-updated date, related links

### 3.7 Accessibility (WCAG 2.2 AA+)
- **Contrast**: ≥4.5:1 body, ≥3:1 large text + UI components. Test code blocks with axe DevTools.
- **Keyboard nav**: every interactive element Tab-reachable. Visible focus ring (don't `outline: none` without replacement). WCAG 2.2 new AA: focus indicator ≥2px, ≥3:1 contrast.
- **Heading order**: never skip. One H1 per page.
- **Alt text**: describe function, not appearance. Decorative: `alt=""`.
- **Link text**: descriptive standalone — "Read the [agent lifecycle docs](…)", not "click here".
- **Reduced motion**: respect `prefers-reduced-motion`. Disable autoplay demos, parallax.
- **Code blocks**: real `<pre><code>`, never images. Include language class.
- **Color**: never encode meaning in color alone. Red error + icon + "Error:" prefix.
- **Zoom**: layout survives 200% zoom or 320px viewport.

### 3.8 Dev-docs content patterns
**Getting Started in 5 minutes**
- Zero branching. Install → first working example → one-line validation.
- Real code. Copy-paste must work. Happy path only — link to troubleshooting separately.

**Copy-paste-ready snippets**
- Single code block per command. No `$` prefix. Copy button everywhere. Placeholders obvious.

**Versioning disclosure**
- Page banner: "Applies to sybra v2.3+"
- Deprecated APIs: visible `Deprecated since v2.1` badge at top, not buried
- Version switcher in nav for multi-version docs

**"Last updated" dates**
- Auto-generated from git commit, not manual. Every page. Paired with "Edit on GitHub".

**Error-message docs**
- Every error code/string gets a stable anchor: `/errors/E_AGENT_TIMEOUT`
- Contents: exact error text, cause, fix, prevention
- Error message in-app links directly to its doc page

---

## 4. Emerging AI-Era Patterns (2024–2026)

### 4.1 `llms.txt` / `llms-full.txt`
Proposed by Jeremy Howard (Answer.AI) Sept 2024 (<https://llmstxt.org> · <https://www.answer.ai/posts/2024-09-03-llmstxt.html>).

- Root file `/llms.txt`: curated, markdown, LLM-friendly site map
- Structure: H1 site name → blockquote summary → H2 sections with link lists + one-line descriptions
- Plus `/llms-full.txt`: concatenated full docs for single-shot ingestion
- Individual pages: serve `.md` version at same path (`/docs/agents` → `/docs/agents.md`)
- Adoption: 784+ documented by early 2025; headline adopters Anthropic, Cloudflare, Supabase. Near-total among AI/dev-tool cos.

### 4.2 Inline AI chat / "Ask the docs"
- Providers: **Kapa.ai**, **Inkeep**, **Mintlify AI**, **Algolia Ask AI** (<https://www.algolia.com/blog/product/ask-ai-smarter-search-for-docs-and-beyond>)
- Baseline expectation for premium docs — Stripe, Supabase, Vercel, Anthropic, Cloudflare, Prisma, Clerk all ship

### 4.3 Runnable / embedded playgrounds
- **Sandpack** (CodeSandbox) — React-component toolkit
- **StackBlitz WebContainers** — full Node.js in browser (Vite/Astro/SvelteKit)
- **Tailwind Play**, **TypeScript Playground** — reference implementations
- Pattern: one-click "Run this snippet" → live result inline

### 4.4 Writing for LLM ingestion
- **Semantic HTML + headings** — LLMs chunk on headings. Deep well-labeled H2/H3 = retrievable chunks
- **Self-contained sections** — each H2 answers one question fully. Avoid "as mentioned above" cross-refs
- **Explicit terminology** — define jargon on first use per page (not once for the site)
- **Code with context** — precede every snippet with one-sentence purpose
- **Avoid "see the diagram"** — LLMs may skip images. Describe the relationship in text also
- **Stable URLs + anchors** — LLMs cite by URL; breaking them breaks trust forever

### 4.5 Avoiding hallucination bait
Ambiguous or missing docs = LLMs invent plausible-sounding fiction. Users copy it, file bugs. Rules:
- Never describe features that don't exist ("coming soon" placeholders — remove or date-stamp)
- Spell out all parameter types, defaults, valid ranges. Table per parameter: `name | type | required | default | description`
- Include negative space: "This does NOT support X. Use Y instead."
- Cover failure modes explicitly: timeout, empty input, duplicate IDs
- Version everything. Without version context, an LLM averages across versions = hallucination
- Prefer unambiguous examples over prose. Prose = interpretation; code = ground truth.

> **Bad**: "The `allowed_tools` field controls which tools the agent can use." (type? default? empty? invalid?)
> **Good**: "`allowed_tools` (array of strings, default `[]`). Claude Code tool names. **Empty array grants ALL tools and passes `--dangerously-skip-permissions` to `claude -p`.** Invalid tool names cause agent to exit with code 2."

### 4.6 Dark mode as default (2024–2026)
- 92% of software engineers prefer dark IDEs; 82% of mobile users prefer dark
- Linear, Raycast, Vercel, Resend, Supabase default dark
- Technique: `prefers-color-scheme` + explicit toggle + localStorage persistence

### 4.7 Command palette / Cmd-K
- Universal: Stripe, Vercel, Supabase, Tailwind, Linear, Raycast, Prisma, Clerk
- Doubles as nav (jump to page), action runner (theme, lang switch), AI-chat entry
- Baseline provider: **Algolia DocSearch** (<https://docsearch.algolia.com>). OSS: **Pagefind** (Starlight), **Orama** (Fumadocs).

### 4.8 Multi-language / multi-stack tabs with persistence
- Preference in localStorage, synced across ALL code blocks on the page (not per-block)
- Persists across navigation
- Vercel does this for package managers; Clerk for frameworks; Stripe/Supabase/Anthropic for SDK languages

### 4.9 Changelog-as-docs
- Linear + Raycast are the exemplars
- Reverse-chron timeline with screenshots/GIFs, prose, inline kbd badges
- Drives reverse-chronological discovery; reduces marketing-page pressure

### 4.10 Docs-as-code tooling (state of 2025/26)
- **Mintlify** — API-first startups' default (Cursor, Perplexity, Coinbase, Anthropic)
- **Fern** — OpenAPI-first; generates SDKs + docs from spec
- **Nextra** — Next.js-native; Vercel-flavoured
- **Docusaurus** — Meta-backed; mature plugin ecosystem
- **Starlight (Astro)** — rising in OSS; zero-JS default; Cloudflare moved to it in 2025
- **Fumadocs (Next.js)** — Twoslash + RSC advantage

---

## 5. Table-Stakes Checklist (2026)

MUST have — not optional:

- [ ] **Three-column layout** on deep pages (nav · prose · right TOC). Single-column centered on landing/concept pages.
- [ ] **Dark mode** with `prefers-color-scheme` detection + explicit toggle + localStorage.
- [ ] **Cmd-K command palette** searching guides + API + blog. Jumps to pages, toggles theme, opens AI chat.
- [ ] **Single accent color** applied monochromatically. Don't use two.
- [ ] **Sans + mono font pair**, both intentional (Geist Sans/Mono is the trendsetter).
- [ ] **Copy-code button** on every fenced block with "Copied" feedback.
- [ ] **Anchor links on hover** next to every heading.
- [ ] **Breadcrumbs** on deep pages.
- [ ] **"Edit on GitHub"** + **"Was this helpful?"** at bottom.
- [ ] **Callout variants** (info/tip/warn/danger) with left accent + tinted bg.
- [ ] **Code-block metadata**: filename label, language tabs, package-manager tabs.
- [ ] **Auto-generated "Last updated"** per page from git.
- [ ] **Versioning disclosure** — page-level "Applies to" banner + deprecation badges.
- [ ] **Semantic headings** (one H1, no skipped levels).
- [ ] **WCAG 2.2 AA**: contrast, keyboard, focus rings, reduced motion.
- [ ] **`llms.txt` + `llms-full.txt`** at root.
- [ ] **"Copy as Markdown"** on every page (Prisma/Clerk pattern).
- [ ] **`.md` endpoint** per page (`/docs/x` → `/docs/x.md`).
- [ ] **Algolia DocSearch** or Pagefind or Orama for search.
- [ ] **Persistent language/stack tabs** — select once, entire site remembers.
- [ ] **Changelog** in Linear/Raycast format (reverse-chron + screenshots + emoji categories).
- [ ] **Prerequisites box** + **estimated time** on tutorials.
- [ ] **Diátaxis split** — Tutorials / How-to / Reference / Concepts clearly delineated in nav.

---

## 6. Distinguishing Moves (wow-factor)

Pick 2–3 signatures — more dilutes:

- **Stripe-style personalized code samples** (signed-in users see their keys injected)
- **Anthropic cream + Styrene aesthetic** — brand-forward, ignores black-default orthodoxy
- **Vercel paired light/dark asset variants** — small detail, huge quality signal
- **Supabase in-page AI that writes SQL against YOUR data** — docs that execute
- **Clerk persistent framework switcher** — one selector reshapes every snippet on every page
- **Fumadocs Twoslash** — hover a type, see TS inference inline
- **Cloudflare "Run in Playground"** inline next to every snippet
- **Prisma / Clerk "Copy as Markdown"** — explicit LLM export per page
- **Resend `<Prompt>` component** — ship prompts as first-class docs content for AI agents
- **Raycast emoji-led changelog** (✨💎🐞🧪) with inline GIFs
- **Linear `/method` essay series** — docs as thought leadership
- **Tailwind live-preview utility pages** — the doc IS the demo

---

## 7. Direct Recommendations for `sybra-website`

**Sybra's context**: desktop app orchestrating Claude Code agents — markdown task management, tmux + headless modes, Wails v2 GUI. Nearest design references: **Linear** (prose-first app docs), **Raycast** (native-feel changelog + dev docs), **Anthropic** (agent-tooling brand aesthetic).

### 7.1 Information architecture (Diátaxis-based)
```
/
├── /docs/
│   ├── /getting-started/       # Tutorial (single page, 5-min path)
│   │   ├── install
│   │   ├── first-task
│   │   └── first-agent
│   ├── /concepts/              # Explanation
│   │   ├── tasks-and-agents
│   │   ├── execution-modes     # interactive vs headless
│   │   ├── projects-and-worktrees
│   │   ├── orchestrator-brain
│   │   └── per-machine-routing
│   ├── /how-to/                # How-to (goal-oriented)
│   │   ├── triage-workflow
│   │   ├── configure-github-sync
│   │   ├── set-up-todoist-intake
│   │   ├── fix-renovate-prs
│   │   └── deploy-headless-server
│   ├── /reference/             # Reference
│   │   ├── /cli/               # sybra-cli commands
│   │   ├── /task-format/       # YAML frontmatter
│   │   ├── /config/            # ~/.sybra/config.yaml
│   │   ├── /skills/            # .claude/skills/
│   │   └── /errors/            # E_AGENT_TIMEOUT etc.
│   └── /guides/                # Long-form deep dives
├── /changelog/                 # Reverse-chron, Linear/Raycast style
├── /llms.txt                   # root
├── /llms-full.txt              # root
└── /docs/*.md                  # markdown endpoint per page
```

### 7.2 Design direction
- **Aesthetic**: borrow Anthropic's cream (#F5F0E8) + near-black + warm-tan (#D4A27F) accent — differentiates from the Vercel-black orthodoxy and signals the Claude Code affinity. Alternative: pure Linear-style calm dark with indigo accent.
- **Type**: Geist Sans + Geist Mono (default, free, matches dev-tool idiom). If going warm: pair Inter with JetBrains Mono or use Sohne if budget allows.
- **Accent**: one color only. Pick ONE: warm tan (Anthropic-aligned), Sybra signature (TBD), or Raycast-pink (if leaning native-mac feel).
- **Motion**: sub-150ms transitions. Respect `prefers-reduced-motion`.

### 7.3 Signatures to ship (pick 2–3, not all)
1. **Mode switcher** for `interactive tmux` vs `headless claude -p` — Clerk's framework-switcher pattern. Pick once; every snippet on every page reshapes. Natural fit for Sybra's two-mode architecture.
2. **`<Prompt>` / "Agent Instructions" cards** in skills docs — Resend pattern. Ship ready-to-copy prompts that configure Sybra-aware agents in Claude Code.
3. **Raycast-style changelog** — emoji sections, inline GIFs of the Wails GUI, pageable (not infinite-scroll).
4. **Copy-as-Markdown + `llms.txt` + `.md` endpoints** — LLM-first; baseline for agent-era docs tool.
5. **Asciinema embed** for `sybra-cli` demos — cheap, high-signal. Cloudflare's "Run in Playground" at a much lower cost.

### 7.4 Content rules
- Every tutorial: prerequisites box + estimated time ("5 minutes") at top
- Every snippet: no `$` prefix, language tag, filename label when relevant
- Every page: auto "Last updated" from git + "Edit on GitHub" link
- Every parameter: table with `name | type | required | default | description`
- Every error: stable anchor, exact text match in title for search
- Active voice ≥90%; sentences ≤20 words avg; Grade 8–10 reading level
- Diátaxis purity: never blend types on one page

### 7.5 CI / docs-as-code
- Vale for style linting (config with Google + Microsoft + custom rules)
- Lychee for link checking
- Pa11y for accessibility regression
- Preview per PR via Vercel / Cloudflare Pages
- Pre-commit screenshot regen hook when `app.go` methods change

---

## 8. Starter-Kit Stack Proposal

**Recommendation: Fumadocs on Next.js.** Rationale:
- Three-column + dark-mode + Cmd-K out of box
- Twoslash for inline TS types (useful if `sybra-cli` gets TS SDK)
- MDX + RSC — DB-driven docs possible (e.g., pull live config schema)
- Geist default — matches the aesthetic
- Strong LLM-export story (built-in `.md` endpoints, `llms.txt` generation)

**Alternative: Astro Starlight.**
- Zero-JS by default → fastest
- Cloudflare-proven at enterprise scale
- Weaker MDX ergonomics than Fumadocs, no Twoslash by default

**Not recommended: Mintlify.**
- Great polish, but hosted/SaaS — less control; costs; vendor lock-in
- Fine if time-to-ship matters more than ownership

**Content pipeline**
- MDX in the repo next to Sybra code (`sybra-website/` as a sibling to `/Users/marcin.skalski/sideprojects/synapse`)
- Markdown files under `content/` mirroring the IA tree
- Frontmatter schema: `title`, `description`, `updated` (auto), `applies_to`, `type` (tutorial/how-to/reference/concept), `related: []`
- Search: Orama (local) or Algolia DocSearch (free for OSS)
- AI chat: Kapa.ai free tier or DIY against Anthropic API with `llms-full.txt` as context

**Hosting**
- Vercel (Fumadocs path) or Cloudflare Pages (Starlight path)
- Custom domain via Cloudflare DNS (aligns with existing Synapse deployment stack)

---

## 9. Source Index

**Awards & recognition**
- [DevPortal Awards Winners](https://devportalawards.org/winners)
- [Pronovix — Best Developer Portals](https://pronovix.com/articles/best-developer-portals)
- [Write the Docs Conferences](https://www.writethedocs.org/conf/)
- [Nielsen Norman Group Reports](https://www.nngroup.com/reports/)
- [HN: Best documentation sites 2024](https://news.ycombinator.com/item?id=41538743)

**Exemplar sites**
- [Stripe Docs](https://docs.stripe.com) · [Stripe API Reference](https://docs.stripe.com/api)
- [Tailwind Docs](https://tailwindcss.com/docs) · [Tailwind Play](https://play.tailwindcss.com)
- [Linear Docs](https://linear.app/docs) · [Linear Method](https://linear.app/method) · [Linear Changelog](https://linear.app/changelog)
- [Vercel Docs](https://vercel.com/docs) · [Geist Font](https://vercel.com/font)
- [Supabase Docs](https://supabase.com/docs) · [Supabase AI Assistant](https://supabase.com/features/ai-assistant)
- [Prisma Docs](https://www.prisma.io/docs)
- [Raycast Docs](https://developers.raycast.com) · [Raycast Changelog](https://www.raycast.com/changelog)
- [Cloudflare Developer Docs](https://developers.cloudflare.com/) · [Cloudflare → Starlight migration](https://blog.cloudflare.com/open-source-all-the-way-down-upgrading-our-developer-documentation/)
- [Anthropic Docs](https://docs.anthropic.com) · [Platform Claude Docs](https://platform.claude.com/docs)
- [Resend Docs](https://resend.com/docs/introduction)
- [Clerk Docs](https://clerk.com/docs)
- [Fumadocs](https://fumadocs.dev) · [Fumadocs comparisons](https://www.fumadocs.dev/docs/comparisons)

**Teardowns**
- [Stripe API reference teardown (Oxford Comma)](https://medium.com/the-oxford-comma/stripes-new-api-reference-documentation-e6b1fc46896d)
- [Moesif — Stripe DX teardown](https://www.moesif.com/blog/best-practices/api-product-management/the-stripe-developer-experience-and-docs-teardown/)
- [Raycast changelog review (Ducalis)](https://hi.ducalis.io/changelog/examples/raycast-changelog)

**Frameworks & guides**
- [Diátaxis](https://diataxis.fr) · [Ubuntu on Diátaxis](https://ubuntu.com/blog/diataxis-a-new-foundation-for-canonical-documentation)
- [Google Developer Style Guide](https://developers.google.com/style)
- [Microsoft Writing Style Guide](https://learn.microsoft.com/style-guide)
- [Write the Docs](https://writethedocs.org)
- [Plain Language](https://plainlanguage.gov)
- [WCAG 2.2](https://www.w3.org/WAI/WCAG22/quickref/)
- Ginny Redish, *Letting Go of the Words*, 2nd ed.

**AI-era**
- [llms.txt spec](https://llmstxt.org) · [Jeremy Howard proposal](https://www.answer.ai/posts/2024-09-03-llmstxt.html)
- [llms.txt adoption state 2025](https://llms-txt.io/blog/is-llms-txt-dead)
- [Mintlify on llms.txt](https://www.mintlify.com/blog/simplifying-docs-with-llms-txt)
- [Algolia Ask AI](https://www.algolia.com/blog/product/ask-ai-smarter-search-for-docs-and-beyond)
- [Algolia DocSearch](https://docsearch.algolia.com)
- [Sandpack](https://sandpack.codesandbox.io) · [CodeSandbox embeds](https://codesandbox.io/docs/embedding)
- [Infrasity: Best docs tools 2025](https://www.infrasity.com/blog/best-documentation-tools-for-developers)
- [Type Today — Anthropic typography](https://type.today/en/journal/anthropic)
- [Loftlyy — Anthropic brand colors](https://www.loftlyy.com/en/anthropic)

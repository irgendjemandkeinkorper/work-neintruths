# work.neintruths.com — product plan & issue backlog

## Baseline and assumptions

This project started without an existing repository brief or frontend codebase in the request, so the audit is for the new greenfield portfolio archive created alongside this document. The source of truth for the initial content is the local workspace: selected repositories, their READMEs, and their existing GitHub remotes.

The primary audience is a potential collaborator, employer, or curious technical person who needs to understand the *use* of a project quickly, then inspect the source or try a public build. The primary journey is:

`land → understand the point of the archive → search or filter project cards → open repo or live build`

### Definition of done for the MVP

- The complete 53-project archive has a card for every authenticated owner repository plus the two local companion projects retained from the original portfolio set, with a clear use case, visibility/status cue, technology cue, and repository link.
- Public-build links are present only where the project has a known deployed experience.
- The site works at narrow mobile widths and desktop widths without horizontal scroll.
- Keyboard users can reach all navigation, filters, and project links with a visible focus state.
- The page has a meaningful document structure, usable contrast, descriptive metadata, and a successful static deployment.
- The GitHub Pages project URL resolves to the deployment and is ready to share.

Out of scope for the first release: a CMS, authenticated editing, a contact form, a full case-study page for every project, analytics that require cookies, and an automated GitHub API sync. Those are valuable only after the curated presentation proves useful.

## Phase 1 — Recovery & Stabilization Milestones

### Milestone 1: Foundation & Content Integrity

**Strategic goal:** Establish a trustworthy content model and a clearly bounded MVP so the archive feels edited rather than scraped.

**Product/technical impact:** A visitor can understand what each project is for, and future updates can be made in one place without hunting through markup. Broken or speculative links are prevented from undermining credibility.

**Key deliverables:**

- A reviewed list of featured projects and categories.
- One normalized project object shape in `data.js`.
- Verified GitHub URLs and explicit handling for optional live builds.
- Copy review for summaries, use cases, statuses, and tags.
- README documentation explaining the content and deployment model.

**Exit criteria:** Every visible card answers “what is it?”, “why does it exist?”, and “where can I inspect or use it?” within a few seconds.

### Milestone 2: Design System & Responsive Gallery

**Strategic goal:** Replace one-off presentation decisions with a small, legible visual system that makes the gallery feel intentional.

**UX/UI impact:** The page gains consistent hierarchy, spacing, color roles, card anatomy, filter behavior, and mobile composition. Visitors can compare projects without relearning the interface on every card.

**Key deliverables:**

- CSS custom properties for color, type, spacing, borders, and motion.
- Reusable card, tag, link, filter, and status patterns.
- Responsive behavior documented and tested at 360px, 768px, and desktop widths.
- Empty/no-result behavior and resilient long-content handling.
- Visual QA pass across supported browsers.

**Exit criteria:** No horizontal overflow, no clipped card content, no inconsistent control styling, and no layout shift when filtering.

### Milestone 3: Accessibility, Performance & Release Confidence

**Strategic goal:** Make the archive dependable for keyboard, screen-reader, low-bandwidth, and reduced-motion users before sharing it professionally.

**Business/technical impact:** Removes avoidable barriers, reduces reputational risk, and creates a stable baseline for future content additions. A static site should be fast and low-maintenance; this milestone protects that advantage.

**Key deliverables:**

- Semantic landmarks, heading hierarchy, link names, visible focus, and keyboard filter support.
- WCAG contrast and reduced-motion checks.
- Metadata for search/social previews and a favicon.
- Link-check and HTML smoke checks in CI.
- GitHub Pages workflow and deployment verification.

**Exit criteria:** A manual keyboard pass and automated checks pass; the live URL loads from a clean browser session with no console errors or dead primary links.

### Milestone 4: Launch Operations & Iteration

**Strategic goal:** Turn the one-page launch into a maintainable publishing habit instead of a one-time handoff.

**Product impact:** The archive stays current, and future improvements are driven by real questions from visitors rather than speculative feature growth.

**Key deliverables:**

- A lightweight update checklist for adding or retiring projects.
- A decision on privacy-respecting analytics or no analytics.
- A post-launch feedback capture method.
- A prioritized list of case studies and next enhancements.
- A quarterly content freshness review.

**Exit criteria:** Updating a project takes less than 15 minutes, the owner knows what “featured” means, and post-launch work is tracked as explicit issues.

## Phase 2 — Post-cleanup strategic enhancements

### 1. Case-study detail pages

**Why:** A card is excellent for scanning but not enough to show judgment, constraints, or outcomes for the strongest projects. Detail pages create a credible bridge from “interesting” to “hireable/collaborative.”

**What:** Add a content-driven detail route with problem, role, approach, notable decisions, screenshots, and links. Start with two projects; do not create ten thin pages.

### 2. Content-as-data with generated pages

**Why:** As the archive grows, hand-authored HTML becomes a consistency risk. A single schema can power cards, details, metadata, and a sitemap.

**What:** Move project data to validated JSON or Markdown frontmatter, add a small build step, validate required fields, and generate static pages. Keep the current no-database deployment model.

### 3. Automated repository health signals

**Why:** Visitors benefit from accurate status and links, while the owner benefits from less manual drift between this archive and GitHub.

**What:** Add an optional build-time GitHub API fetch for stars, last updated date, language, and Pages availability. Cache the result, fail gracefully, and never block deployment on a non-critical API response.

### 4. Privacy-respecting evidence loop

**Why:** The archive’s job is to learn which work is legible and useful, not to collect a surveillance profile. A tiny evidence loop can guide curation and copy improvements.

**What:** Decide whether anonymous, cookieless analytics are appropriate. Track only aggregate outbound link clicks or use a simple contact/feedback path. Document the decision in the README.

### 5. Visual system expansion

**Why:** The current system is deliberately small. A shared token layer becomes valuable when case studies, project screenshots, or a light theme are introduced.

**What:** Formalize tokens into a design-system note, add component states and contrast-tested semantic colors, then introduce theme or layout variants only where a real content need exists.

## Phase 3 — Issue backlog

The issues below are deliberately sized for direct GitHub entry. Routine, boilerplate, or simple cleanup work carries `Delegated-to-Jules` as requested. Suggested priorities use P0 (blocker), P1 (before launch), P2 (next), and P3 (later).

### Issue 01 — Confirm the featured-project content contract

* **Issue Title:** Confirm the featured-project content contract
* **Type:** Product / Refactor
* **Milestone:** Foundation & Content Integrity
* **Labels:** P1, product, content
* **Current State vs. Goal:** The archive currently has a hand-curated data object, but the required/optional fields are implicit. Define a stable contract so new cards do not silently omit the sentence, status, tag, repo, or optional demo behavior.
* **Acceptance Criteria:**
  - [ ] Required fields are documented in `README.md` or a content note.
  - [ ] Optional `demoUrl` behavior is documented.
  - [ ] A missing required field is easy to catch during review.
  - [ ] The contract is used for every current project.

### Issue 02 — Verify every repository and live-build URL

* **Issue Title:** Verify every repository and live-build URL
* **Type:** Refactor
* **Milestone:** Foundation & Content Integrity
* **Labels:** P1, content, links, Delegated-to-Jules
* **Current State vs. Goal:** Links are sourced from local remotes and README evidence, but some public builds may change or be unavailable. Every link should resolve to the intended repository or deployed experience.
* **Acceptance Criteria:**
  - [ ] All repository links resolve to the correct GitHub project.
  - [ ] Live links are retained only for confirmed public builds.
  - [ ] Any unavailable build is removed or marked as a known limitation.
  - [ ] Link verification is recorded in the issue or release checklist.

### Issue 03 — Add a copy and taxonomy review pass

* **Issue Title:** Make project summaries consistent in voice and specificity
* **Type:** Design Debt
* **Milestone:** Foundation & Content Integrity
* **Labels:** P1, content, design
* **Current State vs. Goal:** Cards mix product, technical, and narrative language. The goal is a consistent “what it is / what it enables” pattern that makes unlike projects comparable.
* **Acceptance Criteria:**
  - [ ] Every summary is one or two concise sentences.
  - [ ] Every use case names a concrete user or workflow benefit.
  - [ ] Status labels use a consistent vocabulary.
  - [ ] Tags describe useful disciplines or technologies, not filler.

### Issue 04 — Standardize card metadata and link anatomy

* **Issue Title:** Consolidate project-card metadata, tags, and actions
* **Type:** Refactor
* **Milestone:** Design System & Responsive Gallery
* **Labels:** P1, design-system, cleanup, Delegated-to-Jules
* **Current State vs. Goal:** The card pattern is already shared in the renderer, but its anatomy is not documented as a reusable pattern. Make the order and semantics explicit so later detail cards do not fork the UI.
* **Acceptance Criteria:**
  - [ ] Card anatomy is documented: art, metadata, title, summary, use case, tags, actions.
  - [ ] Repo is always primary and Live is always secondary when present.
  - [ ] Long statuses and tags wrap without breaking the footer.
  - [ ] No card-specific markup exceptions remain.

### Issue 05 — Replace remaining literal visual values with semantic tokens

* **Issue Title:** Expand the CSS token layer for color, spacing, and type
* **Type:** Design Debt
* **Milestone:** Design System & Responsive Gallery
* **Labels:** P1, CSS, design-system, Delegated-to-Jules
* **Current State vs. Goal:** The stylesheet has foundational variables but still contains one-off values for some surfaces, borders, and spacing. Consolidate those values into semantic tokens.
* **Acceptance Criteria:**
  - [ ] Repeated color, border, and spacing values use custom properties.
  - [ ] Tokens are named by role rather than component or page location.
  - [ ] The visual output remains unchanged after the refactor.
  - [ ] A short token map is added to the project documentation.

### Issue 06 — Normalize spacing and typography rhythm

* **Issue Title:** Establish one spacing and type rhythm across the page
* **Type:** Design Debt
* **Milestone:** Design System & Responsive Gallery
* **Labels:** P1, CSS, cleanup, Delegated-to-Jules
* **Current State vs. Goal:** Sections and cards use visually related but manually chosen values. The goal is a small rhythm that makes the page feel deliberate at every viewport.
* **Acceptance Criteria:**
  - [ ] Section, card, and control spacing use the documented rhythm.
  - [ ] Heading, body, eyebrow, and metadata styles have clear roles.
  - [ ] No new one-off spacing value is added without a documented reason.

### Issue 07 — Add a skip link and confirm landmark structure

* **Issue Title:** Add skip navigation and semantic page landmarks
* **Type:** Accessibility
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P1, a11y, WCAG, Delegated-to-Jules
* **Current State vs. Goal:** The page has a main landmark, but keyboard users should be able to bypass the repeated header and land directly in the archive.
* **Acceptance Criteria:**
  - [ ] A visually hidden skip link appears on focus.
  - [ ] It targets the main content or archive section.
  - [ ] Header, main, sections, and footer landmarks are meaningful.
  - [ ] Keyboard testing confirms the first useful destination is reachable.

### Issue 08 — Audit contrast for every semantic color role

* **Issue Title:** Resolve contrast failures in accent cards and muted text
* **Type:** Accessibility
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P1, a11y, visual-QA, Delegated-to-Jules
* **Current State vs. Goal:** Bright decorative art is safe when text is absent, but muted copy, dark-on-acid, and accent links need an explicit WCAG check rather than visual intuition.
* **Acceptance Criteria:**
  - [ ] Body text and controls meet WCAG AA contrast.
  - [ ] Decorative art is not relied on to communicate project meaning.
  - [ ] Accent links remain distinguishable without color alone.
  - [ ] Contrast results are recorded for the chosen tokens.

### Issue 09 — Strengthen keyboard focus and filter semantics

* **Issue Title:** Make project filters fully keyboard-operable and stateful
* **Type:** Accessibility
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P1, a11y, interaction, Delegated-to-Jules
* **Current State vs. Goal:** Filter buttons work with click and have a focus style, but the selected state and result update should be made explicit for assistive technology.
* **Acceptance Criteria:**
  - [ ] Filters are reachable and operable with Tab and Enter/Space.
  - [ ] The active filter exposes a clear selected state.
  - [ ] The result region announces the filtered count without excessive noise.
  - [ ] Focus remains predictable after filtering.

### Issue 10 — Add reduced-motion behavior

* **Issue Title:** Respect prefers-reduced-motion for hover and scroll effects
* **Type:** Accessibility
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P1, a11y, CSS, Delegated-to-Jules
* **Current State vs. Goal:** Card lift, smooth scrolling, and transitions are subtle but unconditional. Users who request reduced motion should receive a calmer version.
* **Acceptance Criteria:**
  - [ ] A reduced-motion media query disables non-essential transforms and smooth scrolling.
  - [ ] No content or interaction becomes unavailable.
  - [ ] The setting is tested in at least one browser.

### Issue 11 — Improve the decorative project-art contract

* **Issue Title:** Ensure decorative artwork never becomes an accessibility dead end
* **Type:** Accessibility
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P1, a11y, markup, Delegated-to-Jules
* **Current State vs. Goal:** Project art is CSS-generated and marked decorative, which is correct today, but the contract should be explicit before real screenshots are introduced.
* **Acceptance Criteria:**
  - [ ] CSS art remains `aria-hidden` when it adds no information.
  - [ ] Any future screenshot gets meaningful alt text or an adjacent text equivalent.
  - [ ] Project name and use case remain available as text.

### Issue 12 — Add robust no-result and data-error states

* **Issue Title:** Design explicit empty, malformed-data, and rendering states
* **Type:** UI Bug
* **Milestone:** Design System & Responsive Gallery
* **Labels:** P1, UX, resilience, Delegated-to-Jules
* **Current State vs. Goal:** The no-result copy exists, but malformed content data would currently fail silently or render awkwardly. Make failure understandable and recoverable.
* **Acceptance Criteria:**
  - [ ] Empty filter state has a clear explanation and return path.
  - [ ] A malformed project object does not prevent valid cards from rendering.
  - [ ] A console-visible error is paired with a human-readable fallback in development.
  - [ ] The failure state has the same visual language as the rest of the page.

### Issue 13 — Fix narrow mobile overflow and long-content wrapping

* **Issue Title:** Make the gallery resilient at 320–390px widths
* **Type:** UI Bug
* **Milestone:** Design System & Responsive Gallery
* **Labels:** P1, responsive, CSS, Delegated-to-Jules
* **Current State vs. Goal:** The first responsive pass handles common mobile widths, but long project names, tags, and link rows need testing at the narrowest practical phones.
* **Acceptance Criteria:**
  - [ ] No horizontal scrollbar exists at 320px, 360px, or 390px.
  - [ ] Long titles and statuses wrap or scale without clipping.
  - [ ] Repo/Live actions remain reachable without overlap.
  - [ ] Hero art and footer do not exceed the viewport.

### Issue 14 — Test tablet and desktop grid transitions

* **Issue Title:** Tune responsive card density between mobile and wide desktop
* **Type:** Responsive Bug
* **Milestone:** Design System & Responsive Gallery
* **Labels:** P1, responsive, visual-QA, Delegated-to-Jules
* **Current State vs. Goal:** The gallery uses a two-column desktop grid and one-column mobile grid. Validate the intermediate widths so cards do not become too narrow or excessively tall.
* **Acceptance Criteria:**
  - [ ] Layout is reviewed at 768px, 1024px, 1280px, and 1440px.
  - [ ] Card text remains readable and balanced at each breakpoint.
  - [ ] Breakpoints are documented with the reason for each transition.

### Issue 15 — Add a visible active navigation treatment

* **Issue Title:** Clarify where the visitor is in the one-page archive
* **Type:** UI Polish
* **Milestone:** Design System & Responsive Gallery
* **Labels:** P2, interaction, cleanup, Delegated-to-Jules
* **Current State vs. Goal:** Header links are simple anchors. Add a restrained hover/focus/active treatment that reinforces the archive’s structure without turning the header into a dashboard.
* **Acceptance Criteria:**
  - [ ] Hover and focus states are visibly distinct.
  - [ ] The current section can be inferred while scrolling or after an anchor jump.
  - [ ] The treatment works in keyboard navigation and reduced-motion mode.

### Issue 16 — Add a deploy smoke test to CI

* **Issue Title:** Catch broken HTML, missing assets, and JavaScript syntax before Pages deploys
* **Type:** Infrastructure
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P1, CI, quality, Delegated-to-Jules
* **Current State vs. Goal:** The Pages workflow uploads the repository root, but it does not fail early on basic broken-file conditions. Add a cheap smoke check.
* **Acceptance Criteria:**
  - [ ] CI checks that `index.html`, `styles.css`, `app.js`, and `data.js` exist.
  - [ ] CI runs a JavaScript syntax check.
  - [ ] CI fails on a broken local asset reference.
  - [ ] The deploy job runs only after the check passes.

### Issue 17 — Add outbound-link verification

* **Issue Title:** Detect dead repository and live-demo links automatically
* **Type:** Infrastructure
* **Milestone:** Launch Operations & Iteration
* **Labels:** P2, CI, links, Delegated-to-Jules
* **Current State vs. Goal:** Link accuracy is currently manual. Add a non-blocking or scheduled check so the archive does not quietly age out.
* **Acceptance Criteria:**
  - [ ] A scheduled workflow checks external links.
  - [ ] Failures identify the project name and URL.
  - [ ] Transient external failures do not delete or rewrite content automatically.

### Issue 18 — Add search and social metadata

* **Issue Title:** Give the archive a useful preview when shared or indexed
* **Type:** Refactor
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P1, SEO, metadata, Delegated-to-Jules
* **Current State vs. Goal:** The page has a description and title but no social preview image or richer document metadata. Add the minimum needed for a professional share.
* **Acceptance Criteria:**
  - [ ] Open Graph and Twitter/X card metadata are present.
  - [ ] A stable social preview asset is added without bloating the page.
  - [ ] Title and description accurately describe the archive.
  - [ ] Metadata is checked with a preview/debugger or equivalent.

### Issue 19 — Add favicon and browser identity

* **Issue Title:** Add a lightweight favicon and app identity assets
* **Type:** Design Debt
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P2, polish, assets, Delegated-to-Jules
* **Current State vs. Goal:** The wordmark is strong in-page, but the browser tab has no project identity. Add a tiny asset derived from the mark.
* **Acceptance Criteria:**
  - [ ] Favicon renders on light and dark browser chrome.
  - [ ] Assets are small and committed to the repository.
  - [ ] No decorative asset is needed for the page to remain understandable.

### Issue 20 — Document GitHub Pages deployment ownership

* **Issue Title:** Write the GitHub Pages release runbook
* **Type:** Documentation
* **Milestone:** Launch Operations & Iteration
* **Labels:** P1, documentation, deployment, Delegated-to-Jules
* **Current State vs. Goal:** The workflow exists, but the project Pages URL and deployment ownership are not yet documented as a repeatable procedure.
* **Acceptance Criteria:**
  - [ ] README documents the project Pages URL and Pages source.
  - [ ] README identifies the repository owner responsible for deployment settings.
  - [ ] A clean-browser verification checklist is included.
  - [ ] The runbook notes that custom-domain setup is intentionally deferred.

### Issue 21 — Add a lightweight visual regression checkpoint

* **Issue Title:** Capture reference screenshots for the core viewport set
* **Type:** Infrastructure / Visual QA
* **Milestone:** Accessibility, Performance & Release Confidence
* **Labels:** P2, QA, visual-regression
* **Current State vs. Goal:** Visual quality is currently reviewed by eye. Establish reference captures for the hero, card grid, and mobile layout so content edits do not accidentally damage the system.
* **Acceptance Criteria:**
  - [ ] Reference screenshots exist for mobile, tablet, and desktop.
  - [ ] The capture process is documented.
  - [ ] A reviewer can distinguish intentional content changes from regressions.

### Issue 22 — Add two high-signal case-study pages

* **Issue Title:** Turn the strongest two projects into evidence-rich case studies
* **Type:** Product Enhancement
* **Milestone:** Launch Operations & Iteration
* **Labels:** P2, content, UX
* **Current State vs. Goal:** The archive communicates breadth, but cards do not show role, constraints, decisions, or outcomes. Add detail pages for two projects where the story is strongest.
* **Acceptance Criteria:**
  - [ ] Each case study names the problem, role, approach, and result/learning.
  - [ ] Each page links to the repository and any public build.
  - [ ] Detail pages reuse the same type, color, link, and focus tokens.
  - [ ] The archive card makes the detail path discoverable.

### Issue 23 — Decide whether the archive needs analytics

* **Issue Title:** Make an explicit privacy and evidence decision for outbound clicks
* **Type:** Product / Infrastructure
* **Milestone:** Launch Operations & Iteration
* **Labels:** P2, decision, privacy
* **Current State vs. Goal:** There is no analytics layer, which protects privacy but limits evidence about what visitors find useful. Decide intentionally before adding tracking.
* **Acceptance Criteria:**
  - [ ] The decision records no analytics, cookieless analytics, or another approach.
  - [ ] The choice names the questions the data would answer.
  - [ ] Any implementation documents retention and consent behavior.
  - [ ] The site remains useful without tracking enabled.

### Issue 24 — Define a low-friction content update checklist

* **Issue Title:** Make adding or retiring a project a repeatable publishing task
* **Type:** Documentation / Refactor
* **Milestone:** Launch Operations & Iteration
* **Labels:** P2, documentation, content, Delegated-to-Jules
* **Current State vs. Goal:** New cards require editing data directly, but there is no quality checklist. Create a short process so content freshness does not erode the visual system.
* **Acceptance Criteria:**
  - [ ] Checklist covers repo URL, demo URL, summary, use case, status, tags, and category.
  - [ ] Checklist includes mobile and link verification.
  - [ ] Checklist explains when a project should be removed from the featured set.
  - [ ] A new contributor can follow it without additional context.

## Phase 4 — Triage summary

The immediate risk is not technical complexity; it is credibility drift. The site’s core promise depends on a visitor trusting that the project links, summaries, and live builds are accurate. Verify those before adding features.

The next most important risks are accessibility and responsive resilience: muted text and accent combinations need a real contrast check, keyboard filter semantics need to be explicit, and the two-column card grid needs narrow-width testing. These are small fixes with a large reputational and usability payoff.

Recommended sequence:

1. Verify every repository/demo URL and finalize the content contract.
2. Run the responsive, contrast, and keyboard passes; fix P1 issues before sharing the URL.
3. Share the GitHub Pages project URL; defer custom-domain work until the archive needs it.

The smallest useful next review is a 15-minute pass on the live URL with a keyboard, a 360px viewport, and three representative project links. That will surface most launch-blocking issues before more strategic work is justified.

# work.neintruths.com

A small, static portfolio archive for Adam Roder's tools, games, experiments, and systems.

## Local preview

Because the site is plain HTML, CSS, and JavaScript, it has no install step:

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080> from this directory.

## Content model

Project cards live in `data.js`. Each card requires `number`, `name`, `type`, `kind`, `status`, `summary`, `useCase`, `tags`, `accent`, and `repoUrl`. `demoUrl` is optional and should only be present for a confirmed public build. The supported `type` values are `tool`, `game`, and `system`; `app.js` validates and renders the full 53-project archive, search, and category filters.

To add or retire a project, update `data.js`, confirm the repository and optional demo URLs, check the summary/use-case copy, and verify the All work and category counts at mobile and desktop widths. The first entries carry hand-edited summaries; metadata-based entries keep the long tail discoverable without pretending every repository is a case study.

## Deployment

The included workflow deploys the repository root to GitHub Pages on every push to `main`. The current release target is the project Pages URL: <https://irgendjemandkeinkorper.github.io/work-neintruths/>. A custom domain can be added later if the archive earns one.

## Project management

See [`PROJECT_PLAN.md`](PROJECT_PLAN.md) for the product definition, recovery milestones, strategic enhancements, and the initial 24-issue backlog. The issues are written to be copied into GitHub once the remote repository is created.

# work.neintruths.com

A small, static portfolio archive for Adam Roder's tools, games, experiments, and systems.

## Local preview

Because the site is plain HTML, CSS, and JavaScript, it has no install step:

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080> from this directory.

## Content model

Project cards live in `data.js`. Each card includes its GitHub repository, an optional public build, a short use case, and lightweight tags. `app.js` renders cards and handles the category filters.

## Deployment

The included workflow deploys the repository root to GitHub Pages on every push to `main`. The current release target is the project Pages URL: <https://irgendjemandkeinkorper.github.io/work-neintruths/>. A custom domain can be added later if the archive earns one.

## Project management

See [`PROJECT_PLAN.md`](PROJECT_PLAN.md) for the product definition, recovery milestones, strategic enhancements, and the initial 24-issue backlog. The issues are written to be copied into GitHub once the remote repository is created.

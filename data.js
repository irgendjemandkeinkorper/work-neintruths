const projects = [
  {
    "number": "01",
    "name": "Papaya Sector",
    "type": "tool",
    "kind": "Data & analysis",
    "status": "In active build",
    "summary": "A Formula One analysis platform for understanding why a race unfolded the way it did.",
    "useCase": "Turns raw race telemetry and upgrade data into a surface for better questions.",
    "tags": [
      "OpenF1",
      "Supabase",
      "Next.js"
    ],
    "accent": "orange",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/papaya-sector"
  },
  {
    "number": "02",
    "name": "Ætheric Transmuter",
    "type": "tool",
    "kind": "Creative tool",
    "status": "Playable prototype",
    "summary": "A browser workbench that turns images into constrained, elemental sprites for Godot.",
    "useCase": "Bridges visual exploration and game-ready asset export without leaving the browser.",
    "tags": [
      "Pixel art",
      "Godot",
      "Canvas"
    ],
    "accent": "violet",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/aetheric-transmuter"
  },
  {
    "number": "03",
    "name": "Semantic Lore Repurposer",
    "type": "tool",
    "kind": "AI utility",
    "status": "Local-first utility",
    "summary": "One raw lore document becomes a journal entry, GM reference sheet, and card-game flavor text.",
    "useCase": "Makes one piece of world-building legible to three different kinds of reader.",
    "tags": [
      "FastAPI",
      "OpenAI API",
      "Content"
    ],
    "accent": "lime",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/semantic-lore-repurposer"
  },
  {
    "number": "04",
    "name": "Aesthetic Bible Flow",
    "type": "system",
    "kind": "Art direction system",
    "status": "Curated build",
    "summary": "An AI-assisted workspace for aesthetic bibles, mood boards, UI tokens, and cohesion audits.",
    "useCase": "Turns a vague visual instinct into a shared language a team can actually reuse.",
    "tags": [
      "Gemini",
      "Vite",
      "Design ops"
    ],
    "accent": "blue",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/aesthetic-bible-flow-generator",
    "demoUrl": "https://irgendjemandkeinkorper.github.io/aesthetic-bible-flow-generator/"
  },
  {
    "number": "05",
    "name": "Photo Poetry",
    "type": "tool",
    "kind": "Creative tool",
    "status": "Client-side app",
    "summary": "A quiet composition tool for pairing photography with poetry, type, and a little atmosphere.",
    "useCase": "Lets a feeling become a shareable artifact without a backend, account, or workflow tax.",
    "tags": [
      "Angular",
      "Canvas 2D",
      "Export"
    ],
    "accent": "pink",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/angular-aphotorisms"
  },
  {
    "number": "06",
    "name": "Supe Pines",
    "type": "game",
    "kind": "Tabletop story game",
    "status": "Playable online",
    "summary": "A one-session, card-driven story game about street-level heroes and the flaws their cases exploit.",
    "useCase": "Uses a browser as a shared table: enough structure to start, enough room to invent.",
    "tags": [
      "Vanilla JS",
      "Firebase",
      "Game design"
    ],
    "accent": "red",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/supe-pines",
    "demoUrl": "https://irgendjemandkeinkorper.github.io/supe-pines/"
  },
  {
    "number": "07",
    "name": "Chordbound",
    "type": "game",
    "kind": "Card game prototype",
    "status": "Engine experiment",
    "summary": "A musical, ten-element digital card game where every spell changes the agreement between players.",
    "useCase": "Tests whether a rules engine can make an abstract relationship feel playable.",
    "tags": [
      "Node test",
      "Game engine",
      "Prototyping"
    ],
    "accent": "teal",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/chordbound"
  },
  {
    "number": "08",
    "name": "Dramgid Lore Gallery",
    "type": "system",
    "kind": "World-building system",
    "status": "Public gallery",
    "summary": "Generated lore art with stable metadata, image URLs, and cross-links back to the source vault.",
    "useCase": "Gives a living knowledge base a visual index without losing its provenance.",
    "tags": [
      "Python",
      "GitHub Pages",
      "Gemini"
    ],
    "accent": "gold",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/dramgid-lore-gallery",
    "demoUrl": "https://irgendjemandkeinkorper.github.io/dramgid-lore-gallery/"
  },
  {
    "number": "09",
    "name": "Bleakwood Vale",
    "type": "game",
    "kind": "Story game",
    "status": "Playable experiment",
    "summary": "A gothic murder-mystery re-skin of a one-session story engine, built for a table that likes secrets.",
    "useCase": "Explores how a strong content frame can make a familiar mechanic feel like a different game.",
    "tags": [
      "Game design",
      "Narrative",
      "Browser"
    ],
    "accent": "indigo",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/bleakwood-vale"
  },
  {
    "number": "10",
    "name": "Hexgame",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Hexgame — a working project repository in the archive.",
    "useCase": "A place to build, test, or document hexgame as the idea develops.",
    "tags": [
      "GDScript",
      "Private",
      "Game design"
    ],
    "accent": "indigo",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/hexgame"
  },
  {
    "number": "11",
    "name": "Idyllicdram",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Dramgid idle-game lore vault — Obsidian companion to dramgid-vault, built on the Khor/Nul harmony-vs-silence axis",
    "useCase": "A place to build, test, or document idyllicdram as the idea develops.",
    "tags": [
      "GDScript",
      "Private",
      "Experiment"
    ],
    "accent": "orange",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/idyllicdram"
  },
  {
    "number": "12",
    "name": "Squadtactics",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Squad-based tactics game (FFT-alike) in Godot 4",
    "useCase": "A place to build, test, or document squadtactics as the idea develops.",
    "tags": [
      "GDScript",
      "Private",
      "Game design"
    ],
    "accent": "violet",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/squadtactics"
  },
  {
    "number": "13",
    "name": "Site K",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "First-person audio-driven horror/puzzle prequel set in Dramgid's Age of Stars — SPINDLE-VI at Site K.",
    "useCase": "A place to build, test, or document site k as the idea develops.",
    "tags": [
      "GDScript",
      "Private",
      "Experiment"
    ],
    "accent": "lime",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/site-k"
  },
  {
    "number": "14",
    "name": "Dramgid Vault",
    "type": "system",
    "kind": "System / archive",
    "status": "Private repository",
    "summary": "Dramgid lore vault — Obsidian source of truth, one entity per file",
    "useCase": "A place to build, test, or document dramgid vault as the idea develops.",
    "tags": [
      "JavaScript",
      "Private",
      "World-building"
    ],
    "accent": "blue",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/dramgid-vault"
  },
  {
    "number": "15",
    "name": "Happy Sisyphus",
    "type": "system",
    "kind": "System / archive",
    "status": "Public repository",
    "summary": "A practical reparsing of Camus's The Myth of Sisyphus, forked from the Pedagogy Unbound template",
    "useCase": "A place to build, test, or document happy sisyphus as the idea develops.",
    "tags": [
      "HTML",
      "Public",
      "World-building"
    ],
    "accent": "pink",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/happy-sisyphus"
  },
  {
    "number": "16",
    "name": "Dev Obsidian Vault",
    "type": "system",
    "kind": "System / archive",
    "status": "Private repository",
    "summary": "Dev Obsidian Vault — a working project repository in the archive.",
    "useCase": "A place to build, test, or document dev obsidian vault as the idea develops.",
    "tags": [
      "Mixed stack",
      "Private",
      "World-building"
    ],
    "accent": "yellow",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/dev-obsidian-vault"
  },
  {
    "number": "17",
    "name": "work.neintruths",
    "type": "system",
    "kind": "System / archive",
    "status": "Public repository",
    "summary": "work.neintruths — a working project repository in the archive.",
    "useCase": "A place to build, test, or document work.neintruths as the idea develops.",
    "tags": [
      "JavaScript",
      "Public",
      "World-building"
    ],
    "accent": "red",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/work-neintruths"
  },
  {
    "number": "18",
    "name": "Glyph Tester",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Glyph Tester — a working project repository in the archive.",
    "useCase": "A place to build, test, or document glyph tester as the idea develops.",
    "tags": [
      "TypeScript",
      "Private",
      "Experiment"
    ],
    "accent": "teal",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/glyph-tester"
  },
  {
    "number": "19",
    "name": "Dramgidian Lexicon Name Generator",
    "type": "system",
    "kind": "System / archive",
    "status": "Private repository",
    "summary": "Dramgidian Lexicon Name Generator — a working project repository in the archive.",
    "useCase": "A place to build, test, or document dramgidian lexicon name generator as the idea develops.",
    "tags": [
      "TypeScript",
      "Private",
      "World-building"
    ],
    "accent": "gold",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/dramgidian-lexicon-name-generator"
  },
  {
    "number": "20",
    "name": "Soul Meter",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Soul Meter — a working project repository in the archive.",
    "useCase": "A place to build, test, or document soul meter as the idea develops.",
    "tags": [
      "GDScript",
      "Private",
      "Experiment"
    ],
    "accent": "indigo",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/soul-meter"
  },
  {
    "number": "21",
    "name": "Synthestheia",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "AI-assisted album workspace for Suno music and Midjourney visual prompt creation",
    "useCase": "A place to build, test, or document synthestheia as the idea develops.",
    "tags": [
      "TypeScript",
      "Private",
      "Experiment"
    ],
    "accent": "orange",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/synthestheia"
  },
  {
    "number": "22",
    "name": "Panoptycoon",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Observer Faction Simulator backend, authoring API, and Godot client",
    "useCase": "A place to build, test, or document panoptycoon as the idea develops.",
    "tags": [
      "PHP",
      "Private",
      "Game design"
    ],
    "accent": "violet",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/panoptycoon"
  },
  {
    "number": "23",
    "name": "Gutenberg Block Architect",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Gutenberg Block Architect — a working project repository in the archive.",
    "useCase": "A place to build, test, or document gutenberg block architect as the idea develops.",
    "tags": [
      "Mixed stack",
      "Private",
      "Experiment"
    ],
    "accent": "lime",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/gutenberg-block-architect"
  },
  {
    "number": "24",
    "name": "Four Season Syndicate",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Four Season Syndicate — a working project repository in the archive.",
    "useCase": "A place to build, test, or document four season syndicate as the idea develops.",
    "tags": [
      "Mixed stack",
      "Private",
      "Game design"
    ],
    "accent": "blue",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/four-season-syndicate"
  },
  {
    "number": "25",
    "name": "Wnba Kicks",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Wnba Kicks — a working project repository in the archive.",
    "useCase": "A place to build, test, or document wnba kicks as the idea develops.",
    "tags": [
      "Python",
      "Private",
      "Game design"
    ],
    "accent": "pink",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/wnba-kicks"
  },
  {
    "number": "26",
    "name": "Special Circumstances",
    "type": "system",
    "kind": "System / archive",
    "status": "Public repository",
    "summary": "A practical reparsing of three Culture novels by Iain M. Banks, forked from the Pedagogy Unbound template",
    "useCase": "A place to build, test, or document special circumstances as the idea develops.",
    "tags": [
      "HTML",
      "Public",
      "World-building"
    ],
    "accent": "yellow",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/special-circumstances"
  },
  {
    "number": "27",
    "name": "Wordbound Repo Starter",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Wordbound Repo Starter — a working project repository in the archive.",
    "useCase": "A place to build, test, or document wordbound repo starter as the idea develops.",
    "tags": [
      "JavaScript",
      "Private",
      "Game design"
    ],
    "accent": "red",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/wordbound-repo-starter"
  },
  {
    "number": "28",
    "name": "Template Library",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Template Library — a working project repository in the archive.",
    "useCase": "A place to build, test, or document template library as the idea develops.",
    "tags": [
      "PHP",
      "Private",
      "Experiment"
    ],
    "accent": "teal",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/template-library"
  },
  {
    "number": "29",
    "name": "Architect Dream",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Architect's Worldbuilding CMS",
    "useCase": "A place to build, test, or document architect dream as the idea develops.",
    "tags": [
      "TypeScript",
      "Private",
      "Experiment"
    ],
    "accent": "gold",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/architect-dream"
  },
  {
    "number": "30",
    "name": "Petalkeep Vault",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Petalkeep Vault — a working project repository in the archive.",
    "useCase": "A place to build, test, or document petalkeep vault as the idea develops.",
    "tags": [
      "Mixed stack",
      "Private",
      "Game design"
    ],
    "accent": "indigo",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/petalkeep-vault"
  },
  {
    "number": "31",
    "name": "Petalkeep",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Petalkeep — a working project repository in the archive.",
    "useCase": "A place to build, test, or document petalkeep as the idea develops.",
    "tags": [
      "Mixed stack",
      "Private",
      "Game design"
    ],
    "accent": "orange",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/petalkeep"
  },
  {
    "number": "32",
    "name": "Site K Vault",
    "type": "system",
    "kind": "System / archive",
    "status": "Private repository",
    "summary": "Lore vault for Site K — SPINDLE-VI, QUINE, Kronos/Maiiam, siloed from dramgid-vault for now.",
    "useCase": "A place to build, test, or document site k vault as the idea develops.",
    "tags": [
      "Python",
      "Private",
      "World-building"
    ],
    "accent": "violet",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/site-k-vault"
  },
  {
    "number": "33",
    "name": "Supe Pines Vault",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Public repository",
    "summary": "Supe Pines Vault — a working project repository in the archive.",
    "useCase": "A place to build, test, or document supe pines vault as the idea develops.",
    "tags": [
      "Mixed stack",
      "Public",
      "Game design"
    ],
    "accent": "lime",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/supe-pines-vault"
  },
  {
    "number": "34",
    "name": "Cookies Consent Confirmation",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "CLI auditor that detects placebo cookie-consent banners: Playwright 3-phase audit of cookies and tracker network calls before/after opting out",
    "useCase": "A place to build, test, or document cookies consent confirmation as the idea develops.",
    "tags": [
      "JavaScript",
      "Private",
      "Experiment"
    ],
    "accent": "blue",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/cookies-consent-confirmation"
  },
  {
    "number": "35",
    "name": "Taubstumm",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Taubstumm — a working project repository in the archive.",
    "useCase": "A place to build, test, or document taubstumm as the idea develops.",
    "tags": [
      "JavaScript",
      "Private",
      "Experiment"
    ],
    "accent": "pink",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/taubstumm"
  },
  {
    "number": "36",
    "name": "Re-encoded Vocab",
    "type": "system",
    "kind": "System / archive",
    "status": "Public repository",
    "summary": "terminology in  different contexts",
    "useCase": "A place to build, test, or document re-encoded vocab as the idea develops.",
    "tags": [
      "HTML",
      "Public",
      "World-building"
    ],
    "accent": "yellow",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/re-encoded-vocab"
  },
  {
    "number": "37",
    "name": "Irgendutils",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Public build",
    "summary": "Irgendutils — a working project repository in the archive.",
    "useCase": "A place to build, test, or document irgendutils as the idea develops.",
    "tags": [
      "JavaScript",
      "Public",
      "Experiment"
    ],
    "accent": "red",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/irgendutils",
    "demoUrl": "https://irgendjemandkeinkorper.github.io/irgendutils/"
  },
  {
    "number": "38",
    "name": "Dramgid Wiki",
    "type": "system",
    "kind": "System / archive",
    "status": "Private repository",
    "summary": "Dramgid lore wiki pipeline: Obsidian vault → WordPress sync, with git-tracked snapshots of everything published",
    "useCase": "A place to build, test, or document dramgid wiki as the idea develops.",
    "tags": [
      "HTML",
      "Private",
      "World-building"
    ],
    "accent": "teal",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/dramgid-wiki"
  },
  {
    "number": "39",
    "name": "Ruby Scripts",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Ruby CLI tools for Linux system administration and website hosting",
    "useCase": "A place to build, test, or document ruby scripts as the idea develops.",
    "tags": [
      "Ruby",
      "Private",
      "Experiment"
    ],
    "accent": "gold",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/ruby-scripts"
  },
  {
    "number": "40",
    "name": "Pedagolical Imperative",
    "type": "system",
    "kind": "System / archive",
    "status": "Public repository",
    "summary": "Pedagolical Imperative — a working project repository in the archive.",
    "useCase": "A place to build, test, or document pedagolical imperative as the idea develops.",
    "tags": [
      "HTML",
      "Public",
      "World-building"
    ],
    "accent": "indigo",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/pedagolical-imperative"
  },
  {
    "number": "41",
    "name": "WordPress Gutenberg Migration & Translation",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Public repository",
    "summary": "WordPress Gutenberg Migration & Translation — a working project repository in the archive.",
    "useCase": "A place to build, test, or document wordpress gutenberg migration & translation as the idea develops.",
    "tags": [
      "PHP",
      "Public",
      "Experiment"
    ],
    "accent": "orange",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/wp-gutenberg-migration-translation"
  },
  {
    "number": "42",
    "name": "Course App Image Resizer",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Public repository",
    "summary": "Course App Image Resizer — a working project repository in the archive.",
    "useCase": "A place to build, test, or document course app image resizer as the idea develops.",
    "tags": [
      "HTML",
      "Public",
      "Experiment"
    ],
    "accent": "violet",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/course-app-image-resizer"
  },
  {
    "number": "43",
    "name": "Migrationbotto",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Public repository",
    "summary": "Migrationbotto — a working project repository in the archive.",
    "useCase": "A place to build, test, or document migrationbotto as the idea develops.",
    "tags": [
      "Python",
      "Public",
      "Experiment"
    ],
    "accent": "lime",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/migrationbotto"
  },
  {
    "number": "44",
    "name": "Macroscope",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Macroscope — a working project repository in the archive.",
    "useCase": "A place to build, test, or document macroscope as the idea develops.",
    "tags": [
      "JavaScript",
      "Private",
      "Experiment"
    ],
    "accent": "blue",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/macroscope"
  },
  {
    "number": "45",
    "name": "WordPress Multisite Admin Dashboard",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "WordPress Multisite on Hetzner + GitHub Pages admin dashboard (site launches via GitHub Actions)",
    "useCase": "A place to build, test, or document wordpress multisite admin dashboard as the idea develops.",
    "tags": [
      "PHP",
      "Private",
      "Experiment"
    ],
    "accent": "pink",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/wp-multisite-admin-dashboard"
  },
  {
    "number": "46",
    "name": "Bleakwood Vault",
    "type": "system",
    "kind": "System / archive",
    "status": "Private repository",
    "summary": "Bleakwood Vault — a working project repository in the archive.",
    "useCase": "A place to build, test, or document bleakwood vault as the idea develops.",
    "tags": [
      "Mixed stack",
      "Private",
      "World-building"
    ],
    "accent": "yellow",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/bleakwood-vault"
  },
  {
    "number": "47",
    "name": "Muaddib's Way",
    "type": "system",
    "kind": "System / archive",
    "status": "Public repository",
    "summary": "A practical reparsing of Frank Herbert's first four Dune novels, forked from the Pedagogy Unbound template",
    "useCase": "A place to build, test, or document muaddib's way as the idea develops.",
    "tags": [
      "HTML",
      "Public",
      "World-building"
    ],
    "accent": "red",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/muaddibs-way"
  },
  {
    "number": "48",
    "name": "Trash",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Public repository",
    "summary": "Dump",
    "useCase": "A place to build, test, or document trash as the idea develops.",
    "tags": [
      "CSS",
      "Public",
      "Experiment"
    ],
    "accent": "teal",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/trash"
  },
  {
    "number": "49",
    "name": "Knowhow",
    "type": "tool",
    "kind": "Tool / experiment",
    "status": "Private repository",
    "summary": "Human-readable operating instructions for my projects — deploying sites, picking themes, running syncs.",
    "useCase": "A place to build, test, or document knowhow as the idea develops.",
    "tags": [
      "Mixed stack",
      "Private",
      "Experiment"
    ],
    "accent": "gold",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/knowhow"
  },
  {
    "number": "50",
    "name": "Wordbound",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "Wordbound — a working project repository in the archive.",
    "useCase": "A place to build, test, or document wordbound as the idea develops.",
    "tags": [
      "Mixed stack",
      "Private",
      "Game design"
    ],
    "accent": "indigo",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/wordbound"
  },
  {
    "number": "51",
    "name": "Dramgidian Bible",
    "type": "system",
    "kind": "System / archive",
    "status": "Private repository",
    "summary": "Dramgidian Bible — a working project repository in the archive.",
    "useCase": "A place to build, test, or document dramgidian bible as the idea develops.",
    "tags": [
      "Python",
      "Private",
      "World-building"
    ],
    "accent": "orange",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/dramgidian-bible"
  },
  {
    "number": "52",
    "name": "AI Subscription Tracker",
    "type": "tool",
    "kind": "Personal utility",
    "status": "Local-first dashboard",
    "summary": "A small dashboard for tracking AI quotas, usage, analytics, and portable backups.",
    "useCase": "Makes recurring tool costs visible before they turn into surprise costs.",
    "tags": [
      "Local storage",
      "Analytics",
      "Privacy"
    ],
    "accent": "yellow",
    "repoUrl": "https://github.com/irgendjemandkeinkorper/ai-subscription-usage-tracker"
  },
  {
    "number": "53",
    "name": "Avatar Gothic",
    "type": "game",
    "kind": "Game / prototype",
    "status": "Private repository",
    "summary": "A gothic game project exploring character, atmosphere, and systems through the Avatar Gothic ruleset.",
    "useCase": "A space to prototype a darker tabletop world and make its rules playable.",
    "tags": [
      "Godot",
      "Private",
      "Game design"
    ],
    "accent": "violet",
    "repoUrl": "https://github.com/NeinKrimes/avatar-gothic"
  }
];

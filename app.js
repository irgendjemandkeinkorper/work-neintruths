const grid = document.querySelector('#project-grid');
const noResults = document.querySelector('#no-results');
const filters = document.querySelectorAll('[data-filter]');
const filterStatus = document.querySelector('#filter-status');
const searchInput = document.querySelector('#project-search');
const viewButtons = document.querySelectorAll('[data-view]');
const dialog = document.querySelector('#project-dialog');
const dialogClose = document.querySelector('#dialog-close');
const dialogKind = document.querySelector('#dialog-kind');
const dialogTitle = document.querySelector('#dialog-title');
const dialogStatus = document.querySelector('#dialog-status');
const dialogSummary = document.querySelector('#dialog-summary');
const dialogUseCase = document.querySelector('#dialog-use-case');
const dialogTags = document.querySelector('#dialog-tags');
const dialogActions = document.querySelector('#dialog-actions');
const projectData = typeof projects === 'undefined' ? [] : projects;
let activeFilter = 'all';
let searchTerm = '';
let activeView = 'grid';
let lastTrigger = null;

const filterLabels = {
  all: 'all work',
  tool: 'tools',
  game: 'games',
  system: 'systems',
};

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function safeExternalUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' ? url.href : null;
  } catch {
    return null;
  }
}

function validProjects() {
  if (!Array.isArray(projectData)) {
    console.error('Portfolio data is unavailable.');
    return [];
  }

  return projectData.filter((project) => {
    const valid = project &&
      ['number', 'name', 'type', 'kind', 'status', 'summary', 'useCase', 'accent', 'repoUrl'].every((field) => project[field]) &&
      Array.isArray(project.tags) && project.tags.length > 0 &&
      safeExternalUrl(project.repoUrl);

    if (!valid) console.error('Skipping malformed portfolio project:', project);
    return valid;
  });
}

function projectArt(project) {
  return `<div class="project-art art-${escapeHtml(project.accent)}" aria-hidden="true">
    <span class="art-grid"></span><span class="art-ring art-ring-a"></span><span class="art-ring art-ring-b"></span>
    <span class="art-shape art-shape-a"></span><span class="art-shape art-shape-b"></span>
    <span class="art-number">${escapeHtml(project.number)}</span>
  </div>`;
}

function setView(view) {
  activeView = view === 'list' ? 'list' : 'grid';
  grid.classList.toggle('is-list', activeView === 'list');
  grid.classList.toggle('is-grid', activeView === 'grid');
  viewButtons.forEach((button) => {
    const isActive = button.dataset.view === activeView;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function openProject(projectNumber, trigger) {
  const project = validProjects().find((item) => item.number === projectNumber);
  if (!project || !dialog) return;

  lastTrigger = trigger;
  dialogKind.textContent = `${project.kind} · ${project.number}`;
  dialogTitle.textContent = project.name;
  dialogStatus.textContent = project.status;
  dialogSummary.textContent = project.summary;
  dialogUseCase.textContent = project.useCase;
  dialogTags.innerHTML = project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('');

  const repoUrl = safeExternalUrl(project.repoUrl);
  const demoUrl = safeExternalUrl(project.demoUrl);
  dialogActions.innerHTML = [
    repoUrl ? `<a class="button button-primary" href="${repoUrl}" target="_blank" rel="noreferrer">Open GitHub <span aria-hidden="true">↗</span></a>` : '',
    demoUrl ? `<a class="button" href="${demoUrl}" target="_blank" rel="noreferrer">Open live build <span aria-hidden="true">↗</span></a>` : '',
  ].join('');

  dialog.showModal();
}

function renderProjects(filter = activeFilter, query = searchTerm) {
  activeFilter = filter;
  searchTerm = query.trim().toLowerCase();
  const allProjects = validProjects();
  const visible = allProjects.filter((project) => {
    const matchesFilter = filter === 'all' || project.type === filter;
    const searchContent = [project.name, project.kind, project.status, project.summary, project.useCase, ...project.tags].join(' ').toLowerCase();
    return matchesFilter && (!searchTerm || searchContent.includes(searchTerm));
  });
  const label = filterLabels[filter] || filterLabels.all;

  setView(activeView);

  filters.forEach((button) => {
    const count = allProjects.filter((project) => button.dataset.filter === 'all' || project.type === button.dataset.filter).length;
    button.querySelector('[data-filter-count]').textContent = count;
  });

  filterStatus.textContent = `Showing ${visible.length} of ${allProjects.length} project${allProjects.length === 1 ? '' : 's'} in ${label}${searchTerm ? ` matching ${searchTerm}` : ''}.`;
  grid.innerHTML = visible.map((project) => `
    <article class="project-card">
      <div class="project-card-trigger" data-project-trigger="${escapeHtml(project.number)}" role="button" tabindex="0" aria-haspopup="dialog" aria-label="Open details for ${escapeHtml(project.name)}">
        ${projectArt(project)}
        <div class="project-content">
          <div class="project-meta"><span>${escapeHtml(project.kind)}</span><span>${escapeHtml(project.status)}</span></div>
          <h3>${escapeHtml(project.name)}</h3>
          <p>${escapeHtml(project.summary)}</p>
          <div class="project-use"><span class="use-label">Use case</span>${escapeHtml(project.useCase)}</div>
          <div class="tag-list">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
        </div>
      </div>
      <div class="project-footer">
        <span class="details-hint">Details <span aria-hidden="true">↗</span></span>
        <div class="project-links">
          <a href="${safeExternalUrl(project.repoUrl)}" target="_blank" rel="noreferrer">Repo <span aria-hidden="true">↗</span></a>
          ${safeExternalUrl(project.demoUrl) ? `<a class="demo-link" href="${safeExternalUrl(project.demoUrl)}" target="_blank" rel="noreferrer">Live <span aria-hidden="true">↗</span></a>` : ''}
        </div>
      </div>
    </article>
  `).join('');
  noResults.textContent = searchTerm ? `No projects match “${searchTerm}”.` : 'No projects in this corner of the archive yet.';
  noResults.hidden = visible.length !== 0;
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('is-active'));
    filters.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    button.classList.add('is-active');
    renderProjects(button.dataset.filter, searchInput.value);
  });
});

viewButtons.forEach((button) => {
  button.addEventListener('click', () => setView(button.dataset.view));
});

grid.addEventListener('click', (event) => {
  const trigger = event.target.closest('[data-project-trigger]');
  if (trigger) openProject(trigger.dataset.projectTrigger, trigger);
});

grid.addEventListener('keydown', (event) => {
  const trigger = event.target.closest('[data-project-trigger]');
  if (!trigger || !['Enter', ' '].includes(event.key)) return;
  event.preventDefault();
  openProject(trigger.dataset.projectTrigger, trigger);
});

searchInput.addEventListener('input', (event) => {
  renderProjects(activeFilter, event.target.value);
});

dialogClose.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener('close', () => {
  if (lastTrigger) lastTrigger.focus();
});

setView('grid');
renderProjects();

const grid = document.querySelector('#project-grid');
const noResults = document.querySelector('#no-results');
const filters = document.querySelectorAll('[data-filter]');
const filterStatus = document.querySelector('#filter-status');
const searchInput = document.querySelector('#project-search');
const projectData = typeof projects === 'undefined' ? [] : projects;
let activeFilter = 'all';
let searchTerm = '';

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

  filters.forEach((button) => {
    const count = allProjects.filter((project) => button.dataset.filter === 'all' || project.type === button.dataset.filter).length;
    button.querySelector('[data-filter-count]').textContent = count;
  });

  filterStatus.textContent = `Showing ${visible.length} of ${allProjects.length} project${allProjects.length === 1 ? '' : 's'} in ${label}${searchTerm ? ` matching ${searchTerm}` : ''}.`;
  grid.innerHTML = visible.map((project) => `
    <article class="project-card">
      ${projectArt(project)}
      <div class="project-content">
        <div class="project-meta"><span>${escapeHtml(project.kind)}</span><span>${escapeHtml(project.status)}</span></div>
        <h3>${escapeHtml(project.name)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <div class="project-use"><span class="use-label">Use case</span>${escapeHtml(project.useCase)}</div>
        <div class="project-footer">
          <div class="tag-list">${project.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
          <div class="project-links">
            <a href="${safeExternalUrl(project.repoUrl)}" target="_blank" rel="noreferrer">Repo <span aria-hidden="true">↗</span></a>
            ${safeExternalUrl(project.demoUrl) ? `<a class="demo-link" href="${safeExternalUrl(project.demoUrl)}" target="_blank" rel="noreferrer">Live <span aria-hidden="true">↗</span></a>` : ''}
          </div>
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

searchInput.addEventListener('input', (event) => {
  renderProjects(activeFilter, event.target.value);
});

renderProjects();

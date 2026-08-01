const grid = document.querySelector('#project-grid');
const noResults = document.querySelector('#no-results');
const filters = document.querySelectorAll('[data-filter]');

function projectArt(project) {
  return `<div class="project-art art-${project.accent}" aria-hidden="true">
    <span class="art-grid"></span><span class="art-ring art-ring-a"></span><span class="art-ring art-ring-b"></span>
    <span class="art-shape art-shape-a"></span><span class="art-shape art-shape-b"></span>
    <span class="art-number">${project.number}</span>
  </div>`;
}

function renderProjects(filter = 'all') {
  const visible = projects.filter((project) => filter === 'all' || project.type === filter);
  grid.innerHTML = visible.map((project) => `
    <article class="project-card">
      ${projectArt(project)}
      <div class="project-content">
        <div class="project-meta"><span>${project.kind}</span><span>${project.status}</span></div>
        <h3>${project.name}</h3>
        <p>${project.summary}</p>
        <div class="project-use"><span class="use-label">Use case</span>${project.useCase}</div>
        <div class="project-footer">
          <div class="tag-list">${project.tags.map((tag) => `<span>${tag}</span>`).join('')}</div>
          <div class="project-links">
            <a href="${project.repoUrl}" target="_blank" rel="noreferrer">Repo <span aria-hidden="true">↗</span></a>
            ${project.demoUrl ? `<a class="demo-link" href="${project.demoUrl}" target="_blank" rel="noreferrer">Live <span aria-hidden="true">↗</span></a>` : ''}
          </div>
        </div>
      </div>
    </article>
  `).join('');
  noResults.hidden = visible.length !== 0;
}

filters.forEach((button) => {
  button.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('is-active'));
    button.classList.add('is-active');
    renderProjects(button.dataset.filter);
  });
});

renderProjects();

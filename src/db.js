const projects = [];

function save(project) {
  if (projects[project.id] && projects[project.id].id) {
    const { tasks } = projects[project.id];
    project.tasks = tasks;
  }
  projects[project.id] = project;
  return projects[project.id];
}

function exclude(id) {
  projects.splice(id, 1);
}

function find(id) {
  if (!id) {
    return projects;
  }
  if (id && projects[id]) {
    return projects[id];
  }
}

module.exports = { save, find, exclude };
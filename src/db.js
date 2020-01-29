// let sequence = 1;


// function getSequence() {
//   return sequence++;
// }
const projects = [];

function save(project) {
  console.log('Acessou o salvar');
  console.log(project);

  if (projects[project.id] && projects[project.id].id) {
    const { tasks } = projects[project.id];
    console.log(project);

    project.tasks = tasks;
    console.log('Entrou na edicao');
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
  if (projects[id]) {
    return `Projeto com id ${id} nao encontrado`;
  }
  return projects[id];

}

module.exports = { save, find, exclude };
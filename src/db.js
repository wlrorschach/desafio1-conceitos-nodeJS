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

  console.log('Dentro do metodo find');
  console.log(`Lista de projetos: ${projects}`);

  if (!id) {
    console.log('Entrou no if 1');
    
    return projects;
  }
  if (id && projects[id]) {
    console.log('Entrou no if 2');

    return projects[id];
  }

}

module.exports = { save, find, exclude };
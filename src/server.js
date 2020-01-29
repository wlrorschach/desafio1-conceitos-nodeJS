const express = require('express');
const cors = require('cors');
const DB = require('./db');

const port = 3333;

const app = express();
app.use(cors());
app.use(express.json());
app.listen(port, () => console.log(`Executando na porta ${port}`));

/*----------MIDLEWARES----------*/
function verifyId(req, res, next) {
  const project = DB.find(req.params.id);
  if (!project) {
    res.status(400).json({ error: 'Project do not exist' });
  }
  req.project = project;
  return next();
}

function verifyParams(req, res, next) {
  if (req.body.title && req.body.id) {
    return next();
  }
  res.status(400).json({ error: 'Title and id are required' });
}

/*------------ROTAS------------*/
app.post('/projects', verifyParams, (req, res) => {
  const { title, id } = req.body;
  const newProject = { title, id, tasks: [] };
  res.json(DB.save(newProject));
});

app.get('/projects', (req, res) => {
  res.json(DB.find());
});

app.put('/projects/:id', verifyId, (req, res) => {
  const { title } = req.body;
  const project = req.project;

  project.title = title;
  res.json(DB.save(project));
});

app.delete('/projects/:id', verifyId, (req, res) => {
  const { id } = req.params;
  DB.exclude(id);
  res.status(200).json();
});

app.post('/projects/:id', verifyId, (req, res) => {
  const { tasks } = req.body;
  const { id } = req.params;

  const projectOld = DB.find(id);

  console.log(projectOld);
  projectOld.tasks.push(...tasks);

  res.json(DB.save(projectOld));
});





const express = require('express');
const { uuid } = require('uuidv4');


const app = express();

app.use(express.json());    

const projects = [];

// CRUD
// CREATE - READ - UPDATE - DELETE

/* 
    Query Params: Vamos usar principalemnte para filtros e paginação
    Route Params: Serve para identificar recursos na gora de atualizar(put) ou deletar(delete)(BUSCA OQ VAI ALTERAR)
    Request Body: 
*/

app.get('/projects', (request, response) => {
    
    return response.json(projects);
});

app.post('/projects', (request, response) => {

    const { title, owner } = request.body;
    
    const project = { id: uuid(), title, owner }

    projects.push(project); //joga a criação do nosso projeto para o nosso array de projetos

    return response.json(project); //sempre retorna o projeto recén criado e nunca exibir a lista
});

app.put('/projects/:id', (request, response) => {
    
    const { id } = request.params; 
    const { title, owner } = request.body;

    //aqui usamos o findIndex para pecorrer todo o array atrás do id
    //findIndex vai percorrer todos os projeto, e toda vez que ele percorrer na variavel project
    //caso ela satisfeita e retornar true, ela vai me retornar o id que estou passando (project => project.id)
    const projectIndex = projects.findIndex(project => project.id === id); 

    if(projectIndex < 0){
        return response.status(400).json({ error: 'Projeto não foi encontrado' });
    }

    //agora tenho indice vou criar uma nova informação do projeto
    const project = {
        id, 
        title,
        owner,
    }

    //dentro dos array de projetos, eu quero que altere oq tem o index especifico, quando alterar 
    //quero que atualize dentro de um projeto
    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {

    const { id } = request.params; 

    const projectIndex = projects.findIndex(project => project.id === id); 

    if(projectIndex < 0){
        return response.status(400).json({ error: 'Projeto não foi encontrado' });
    }

    projects.splice(projectIndex, 1);

    return response.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor rodando! 🚀')
});

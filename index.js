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
    
    const { title, owner } = request.query;
    console.log('=======================================');
    console.log(title);
    console.log(owner);

    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {

    const { title, owner } = request.body;
    
    const project = { id: uuid(), title, owner }

    projects.push(project); //joga a criação do nosso projeto para o nosso array de projetos

    return response.json(project); //sempre retorna o projeto recén criado e nunca exibir a lista
});

app.put('/projects/:id', (request, response) => {
    
    const params = request.params;
    console.log(params);

    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
        'Projeto 4',
        'Projeto 5',
    ]);
});

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});

app.listen(3000, () => {
    console.log('Servidor rodando! 🚀')
});

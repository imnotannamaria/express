const { json, request } = require('express');
const express = require('express');

const app = express();

// CRUD
// CREATE - READ - UPDATE - DELETE

app.get('/projects', (request, response) => {
    
    const query = request.query;
    console.log(query);
    
    return response.json([
        'Projeto 1',
        'Projeto 2',
    ]);
});

app.post('/projects', (request, response) => {
        return response.json([
            'Projeto 1',
            'Projeto 2',
            'Projeto 3',
            'Projeto 4',
        ]);
});

app.put('/projects/:id', (request, response) => {
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

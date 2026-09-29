const express = require('express');

const app = express();

app.use(express.json());

const livros = [
    { 
      id: 1,
      titulo: 'É assim que acaba',
      autor: 'Colleen Hoover',
      ano: 2018
    },
    { 
      id: 2,
      titulo: 'O diário de uma paixão',
      autor: 'Nicholas Sparks',
      ano: 2004
    },
    { 
      id: 3,
      titulo: 'A culpa é das estrelas',
      autor: 'John Green',
      ano: 2012
    },
    { 
    id: 4,
      titulo: 'Cidade de Papel',
      autor: 'John Green',
      ano: 2015
    }
];

app.get('/livros', (req, res) => {
    res.json(livros);
});

app.get('/livros/:id', (req, res) => {
    const id = Number(req.params.id);

    const livro = livros.find(livro => livro.id === id);

    res.json(livro);
});

app.post('/livros', (req, res) => {
    const novoLivro = req.body;

    livros.push(novoLivro);

    res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
    const id = Number(req.params.id);

    const livro = livros.find(livro => livro.id === id);

    if (!livro) {
        return res.status(404).json({ 
            message: 'Livro não encontrado' 
        });
    }

    livro.titulo = req.body.titulo;
    livro.autor = req.body.autor;
    livro.ano = req.body.ano;

    res.json(livro);

});

app.delete('/livros/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = livros.findIndex(livro => livro.id === id);

    if (indice === -1) {
        return res.status(404).json({ 
            message: 'Livro não encontrado' 
        });
    }

    livros.splice(indice, 1);

    res.json({ 
        message: 'Livro removido com sucesso' 
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


const express = require('express');
const app = express();
const port = 3000; // Porta em que o servidor será executado
// Rota para exibir a página HTML
app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');

});
app.use(express.static(__dirname+'/'));
// Iniciar o servidor
app.listen(port, () => {
console.log(`Servidor Express está rodando na porta ${port}`);
});

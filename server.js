import app from './src/app.js'
const PORT = 5500

// escutar a porta 
app.listen(PORT, () => {
    console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
})
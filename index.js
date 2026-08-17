const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

app.post("/aula" , (req, res) => {
 const aula = req.body
 try{
    const aula= fs.readFileSync('aulas.json', 'utf-8')
    aulas.push(aula)
    fs.writeFileSync('aulas.json', JSON.stringify(aulas), 'utf-8')
    res.status(201).json({message: "Aula criada com sucesso"})

}catch{
    res.status(500).json({message: "Erro ao criar aula"})
 }
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
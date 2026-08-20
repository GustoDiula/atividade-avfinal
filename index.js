const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const fs = require('fs')

let id = 0
function atualizarId() {
    id = id + 1
    fs.writeFileSync('id.json', JSON.stringify({ id: id }), 'utf-8')
}

app.post("/aula" , (req, res) => {
 const aula = req.body
 try{
    const aulas = JSON.parse(fs.readFileSync('aulas.json', 'utf-8'))
    aula.id = aulas.length + 1
    Console.log(aula)

    aulas.push(aula)
    fs.writeFileSync('aulas.json', JSON.stringify(aulas), 'utf-8')
    res.status(201).json({message: "Aula criada com sucesso"})

}catch{
    res.status(500).json({message: "Erro ao criar aula"})
 
}})

app.get("/aula", (req, res) => {
    try{
        const aulas = JSON.parse(fs.readFileSync('aulas.json', 'utf-8'))
        res.status(200).json(aulas)
    }catch{
        res.status(500).json({message: "Erro ao buscar aulas"})
}})

app.get("/aula/:id", (req, res) => {
    const id = parseInt(req.params.id)
    try{
        const aulas = JSON.parse(fs.readFileSync('aulas.json', 'utf-8'))
        const aula = aulas.find(aula => aula.id === id)
        if(aula){
            res.status(200).json(aula)
        }else{
            res.status(404).json({message: "Aula não encontrada"})
        }
    }catch{
        res.status(500).json({message: "Erro ao buscar aula"})
}})

app.delete("/aula/:id", (req, res) => {
    const id = parseInt(req.params.id)
    try{
        let aula = JSON.parce(fs.readFileSync('aulas.json', 'utf-8'))
        const index = aulas.findIndex(aula => aula.id === id)
        if(index == -1){
        return res.status(404).json({message: "Aula não encontrada"})
        }
        famosos.splice(index, 1)
        fs.writeFileSync('aulas.json', JSON.stringify(aulas, null, 2), 'utf-8')
        res.status(200).json({message: "Aula deletada com sucesso"})
    }catch(error){
        res.status(500).json({message: "Erro ao deletar aula"})
}})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

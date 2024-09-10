const express = require("express")
const book_router = require("./rotas/livro.js")
const student_router = require("./rotas/estudantes.js")
const rental_router = require("./rotas/aluguel.js")
const app = express()
const port = 7000

app.use(express.json())


app.use("/aluguel", rental_router)
app.use("/estudante", student_router)
app.use("/livro", book_router)



app.listen(port, () => {
    console.log(`Server running in ${port} port`)
})
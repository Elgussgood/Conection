const express=require('express')
const app= express()
const mysql=require('mysql')
var bodyParser=require('body-parser')

var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'n0m3l0',
    database:'prueba'

})
con.connect()
app.use(bodyParser.json())
app.user(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static('public'))

app.post('/agregarUsuario',(req,res)=>{
let nombre=req.body.nombre
con.query('insert into usuario values("'+nombre+'")',(err,respuesta,fields)=>{
    if(err) return console.log('Error', err)
})
})
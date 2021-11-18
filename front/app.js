const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'));
app.use(express.static('files'));
const http = require("http");
const cors=require("cors");
const multer=require("multer");


app.use(cors());
const storage = multer.diskStorage({
	destination:'uploads/',
	filename:function (req,file,cb){
		cb("",file.originalname);
	}
});
const upload=multer({
	storage:storage
});


app.get("/enviar",(req,res)=>{
	//res.sendFile(__dirname+"/public/producto.html");
	res.send("Todo mal");
});

app.post("/enviar",upload.single("files"),(req,res)=>{
	//res.send(__dirname);
	window.location.href = "Productos.html";
	res.writeHeader(200, {"Content-Type": "text/html"});  
	res.write("<head></head><body><p>Ingresaron los datos</p><a href='/Productos.html'>Volver</a></body>");  
    res.end();
});



app.listen(3000,() => {
        console.log('Servidor Inicia puerto 3000');
})
module.exports=app;
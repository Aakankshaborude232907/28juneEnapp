const express=require("express");
const cors=require("cors");
const nodemailer=require("nodemailer");

const app=express();
app.use(cors())
app.use(express.json())

function sendEmail(name,phone,query)
{
	let transporter=nodemailer.createTransport({
		service:"gmail",
		auth:{
			user:"borudeaakanksha@gmail.com",
			pass:"kczxldufgijgrcfy"
		}
	});
	
	let mailOptions={
		from:"borudeaakanksha@gmail.com",
		to:"Kunnalmore17@gmail.com",
		subject:"Enquiryfrom"+name,
		text:phone+""+query
	}
	
	transporter.sendMail(mailOptions,(err,info)=>{
		if(err)
			console.log("mail err",err);
		else
			console.log("mail send",info.response);
	})
}

app.post("/save",(req,res)=>{
	const name=req.body.name;
	const phone=req.body.phone;
	const query=req.body.query;
	console.log(name+ "" + phone + "" + query );
	sendEmail(name,phone,query);
	res.send("success");
})

app.listen(9000,()=>{console.log("ready @ 9000");});
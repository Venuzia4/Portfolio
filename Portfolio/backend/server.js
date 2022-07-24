
const express = require('express');
const bodyParser=require('body-parser');
const nodemailer=require('nodemailer');
const cors=require('cors');
const app = express();
const PORT =process.env.PORT|| 8080.





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res) => {
  res.send('welcomme venuzia!')
})


app.post('/api/form',(req,res)=>{
  let formData=req.body
  let smtpTransport=nodemailer.createTransport({
    host:"localhost",
    port: 1025,
    secure:false,
  
    auth:{
      user:'vbabonguimabika@gmail.com',
      pass:"vegas12334"
    }

  });
  let mailOptions={
    from:formData.email,
    to:"vbabonguimabika@gmail.com",
    subject:`Message from ${formData.firstname}`,
    html:`
    <h3>Infomations</h3>
    <ul>

    <li>Firtsname:${formData.firstname}</li>
    <li>Lastname:${formData.lastname}</li>
    <li>Email:${formData.email}</li>
    </ul>

    <h3>Message</>
    <p>${formData.message}</p>
    
    `
  };
  smtpTransport.sendMail(mailOptions,(error,response)=>{
    if(error){
      res.send(error)
    }else{
      res.send("succes")
    }

  });



})

app.listen(PORT, () => {
   console.log(`server listening at  port ${PORT}`)
 })
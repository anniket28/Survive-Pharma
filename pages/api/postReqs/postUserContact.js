const nodemailer=require('nodemailer')

export default async function handler(req,res){
    if(req.method=='POST'){
        var transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'newmailer001@gmail.com',
                pass:'aqmwhmjsmbonmppx'
            }
        });

        // Setting Mail Options
        var mailOptions={
            from: 'newmailer001@gmail.com',
            to: 'annibhalla2001@gmail.com',
            subject:'Contact Received',
            text: `A person with Contact Number : ${req.body.contactNumber} showed interest in a product with:\nProduct Name : ${req.query.productName}\nProduct Id : ${req.query.productId}`
        };

        // Sent Mail Confirmation
        transporter.sendMail(mailOptions,(err,send)=>{
            if(err){                        
                   console.log(err);
            }
            else{
                console.log('Email Sent: '+send.response)
            }
        });

        res.status(200).json("Ok")
    }
    else{
        res.status(401).json("Not Allowed")
    }
}
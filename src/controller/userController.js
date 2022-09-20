const userModel = require('../models/userModel');
//=====================================================createUser===========================================//
const createUser = async function (req,res) {
    let data = req.body
    let saveData = await userModel.create(data);
    res.status(201).send({status : true, data : saveData});
};
//============================================================userLogin================================================//

const userLogin = async function (req,res)  {
    try{
     const email = req.body.email;
     const password = req.body.password;
 
     let checkData = await userModel.findOne({email : email , password : password});
     console.log(checkData);
     if(!checkData) return res.status(400).send({status : false, msg: "This email and password is not exist"});
 
     let token = jwt.sign({
         authorId: checkData._id.toString(),
         group: "group-8",
       },"project3");
 
       res.status(200).send({status: true, message: "user Login Successful", token: { token }});
 
    }catch(err)
    {
     console.log(err)
    }
 
 }

module.exports = {createUser, userLogin}

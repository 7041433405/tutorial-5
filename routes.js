var express = require('express');
var router = express.Router();
var Pizza = require('./Models/Pizza')
var User = require('./Models/User')
var bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')

//to fetch movies
router.get('/Pizza',async(req,res)=>{
    const ipizza = await Pizza.find()
    res.send(ipizza)
})

//to add the movies
router.post("/Pizza",async(req,res)=>{
    const ipizza = new Pizza({
        name:req.body.name,
        rating:req.body.rating
    })

    await ipizza.save((err,msg)=>{
        if(err){
            res.status(500).json({
                "error":err
            })
        }
        else{
            res.status(200).json({
                "My-message":msg
            })
        }
    })

})


// api for updating movie

router.patch('/Pizza/:id',async (req,res)=>{
    const ipizza = await Movie.findOne({_id:req.params.id})
    ipizza.name = req.body.name
    ipizza.rating = req.body.rating
    await ipizza.save((err,msg)=>{
        if(err){
            res.status(500).json({
                error:err
            })
        }
        else{
            res.status(200).json({
                msg:msg
            })
        }
    })

})

//delete api

router.delete('/Pizza/:id', async (request, response) => {   // delete by id
    const _id = request.params.id;
    const iPizza = await AlgoStrategy.findByIdAndDelete(_id);
    response.send(strategy);
})


// // router.post('/users',async(req,res)=>{
    
//     //generate salt key
//     salt = await bcrypt.genSalt(10)
//     console.log(salt)

//     hashedpswd = await bcrypt.hash(req.body.password,salt)
//     console.log(hashedpswd)

//     const iuser = new User({
//         uname:req.body.uname,
//         password:hashedpswd
//     })  
//     await iuser.save((err,msg)=>{
//         if(err){
//             res.status(500).json({
//                 "error":err
//             })
//         }
//         else{
//             res.status(200).json({
//                 "My-message":msg
//             })
//         }
//     })

// })

module.exports = router 
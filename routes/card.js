const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const schema = mongoose.Schema;

const cardSchema = new schema({
    title: String,
    imageUrl: String,
    description: String,
    cardId: String
});

const CardModel = mongoose.model('Cards', cardSchema)

router.post('/addnewcard' , (req , res)=>{
   
    const newcard = new CardModel({
        title: req.body.title,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        cardId: req.body.cardId
    });
    newcard.save((err) => {
        if(!err) {
        
            res.send('New card added successfully')
        } else {
            res.send(err)
        }
    });

});

router.get('/getcards', (req, res) => {
    CardModel.find({}, (data,err) => {
        if (!err) {
            res.send(data)
        } else {
            res.send(err)
        }
    })
});

router.post('/getcarddata' , (req , res)=>{

    CardModel.find({cardId:req.body.cardId}, (data , err)=>{
        
        if(!err) {
        
            res.send(data)
        } else {
            res.send(err)
        }
    })
});

router.post('/updatecard', (req, res) => {
    CardModel.findOneAndUpdate({cardId:req.body.cardId}, {
        title:req.body.title,
        imageUrl:req.body.imageUrl,
        description:req.body.description
    },(err) => {
        if (!err) {
            res.send('Card Updated')
        } else {
            res.send(err)
        }
    })
})

router.post('/deletecard' , (req , res)=>{

    CardModel.findOneAndDelete({cardId:req.body.cardId} , (err)=>{
        
        if(!err)
        {
            res.send('Post Deleted Successfullyy')
        }
        else{
            res.send(err)
        }

    })

})

module.exports = router;
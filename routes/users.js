var express = require('express');
const Mongoose = require('mongoose');
var router = express.Router();
const quiz=Mongoose.model('Quiz');
const question=Mongoose.model('Question');
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.post('/api/quiz', function(req, res) {
  const {name,description}=req.body;
  const quizName=new quiz({name,description});
  quizName.save()
  .then(result=> {
    res.status(201).json({id:result._id,name:result.name,description:result.description})
  })
  .catch(err => {
    res.status(400).json({status:"failure",reason:err})
  })
  res.end();
});

router.get('/api/quiz/:quiz_id',(req,res)=>{
  quiz.findById(req.params.quiz_id).then(result=> {
    return res.status(200).json({id:result._id,name:result.name,description:result.description})
  }).catch(err => {
    res.status(400).json({status:"failure",reason:err})

  })
});

router.post('/api/questions',(req,res) => {
  const {name,options,correct_option,quiz,points}=req.body;
  const questionName=new question({name,options,correct_option,quiz,points});
  questionName.save()
  .then(result=> {
    res.status(201).json({id:result._id,name:result.name,options:result.options,correct_option:result.correct_option,quiz:result.quiz,points:result.points})
  })
  .catch(err => {
    res.status(400).json({status:"failure",reason:err})
  })
  res.end();
});


router.get('/api/questions/:question_id',(req,res)=>{
  question.findById(req.params.question_id).then(result=> {
    return res.status(200).json({id:result._id,name:result.name,options:result.options,correct_option:result.correct_option,quiz:result.quiz,points:result.points})
  }).catch(err => {
    res.status(400).json({status:"failure",reason:err})

  })
});

router.get("/api/quiz-questions/:quiz_id",(req,res)=>{
  question.find().then(result =>{
    return res.status(200).json(result)
  })

})

module.exports = router;

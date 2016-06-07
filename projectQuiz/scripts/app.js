var currentQuestions = [
  new Question(
    "What color banana is?",
    [{name:"Yellow", id:0}, {name:"Blue", id:1} ],
    0
  ),
  new Question(
    "Which holiday associated with pumpkin?",
    [{name:"Christmas", id:1}, {name:"Halloween", id:0} ],
    1
  ), 
  new Question(
  "How many species of raspberries we know about?",
  [{name:"only 2", id:0}, {name:"more then 200", id:1} ],
  1
  )
];

var quiz = new Quiz(currentQuestions);
quiz.startQuiz();
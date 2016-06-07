function Quiz(questions){
    this.questions = questions;
    this.currentQuestionIndex =0;
    this.rightAnswers = 0;
    this.totalOfQuestions=questions.length;
}

Quiz.prototype.startQuiz = function(){
  this.getCurrentQuestion().showQuestion();
};

Quiz.prototype.isFinished = function(){
  if(this.currentQuestionIndex < this.totalOfQuestions){
    return false;
  }
  else{
    return true;
  }  
};

Quiz.prototype.next = function(answerIndex){
  var isAnswerTrue = this.getCurrentQuestion().hideQuestion(answerIndex);
  if(isAnswerTrue){
    this.rightAnswers++;
  }
  this.currentQuestionIndex++;

  if(this.currentQuestionIndex < this.totalOfQuestions){
    this.getCurrentQuestion().showQuestion();
  }
  
};

Quiz.prototype.getCurrentQuestion = function(){
  return this.questions[this.currentQuestionIndex];
};

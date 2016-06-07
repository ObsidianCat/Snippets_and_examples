quiz_ui = {
  selectors:{
    question:document.getElementById('question'),
    answer0:document.getElementById('choice0'),
    answer1:document.getElementById('choice1'),
    progressQuestionsBar:document.getElementById('progress'),
    answersBox:document.getElementById('answersBox'),
    btn0:document.getElementById('guess0'),
    btn1:document.getElementById('guess1'),
  },
  clearElements: function(listOfEls){
    for(var i =0; i<listOfEls.length; i++){
      var currentEl = listOfEls[i];
      currentEl.innerHTML = "";
    }
  },
  renderInElement: function(){
    quiz_ui.clearElements([this.selectors.question, this.selectors.answer0, this.selectors.answer1, this.selectors.progressQuestionsBar]);

    var data = quiz.getCurrentQuestion().toHTML();
    this.selectors.question.innerHTML+= data.body;
    this.selectors.answer0.innerHTML = data.answer0;
    this.selectors.answer1.innerHTML = data.answer1;
    this.selectors.progressQuestionsBar.innerHTML = "Question " + (quiz.currentQuestionIndex+1) + " of  "+ quiz.totalOfQuestions;
  },
  showResults: function(){
    this.clearElements([this.selectors.question, this.selectors.answersBox, this.selectors.progressQuestionsBar]);
    this.selectors.question.innerHTML = "The quiz is finished. You gave " + quiz.rightAnswers + " right answers from possible total of  "+ quiz.totalOfQuestions + ".";
  },
  update:function (answerIndex) {
    quiz.next(answerIndex);

    if(quiz.isFinished()){
      this.showResults();
    }
    else{
      this.renderInElement();
    }
  },
  start:function(){
    this.renderInElement();
    quiz.startQuiz();
  }
};
quiz_ui.start();

quiz_ui.selectors.btn0.onclick = function(){
  quiz_ui.update(0);
};
quiz_ui.selectors.btn1.onclick = function(){
  quiz_ui.update(1);
};
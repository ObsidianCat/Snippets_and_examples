function Questinable (){
  this.type = "question";
}
function Question(qText, qAnswers, qRightAnswerId){
    Questinable.call(this);
    this.qText = qText;
    this.qAnswers = qAnswers;
    this.qRightAnswerId = qRightAnswerId;
    this.isVisible = false;

}
Question.prototype = Object.create(Questinable);

Question.prototype.toHTML = function(){
  var htmlString = '<p>';
    htmlString+= this.qText;
    htmlString+= '</p>';
    var questionText = {
      body:'<p>'+this.qText+'</p>',
        answer0:this.qAnswers[0].name,
        answer1:this.qAnswers[1].name
    };
    return questionText;
};
Question.prototype.showQuestion = function(){
    this.isVisible = true;
};
Question.prototype.hideQuestion = function(answerIndex){
    this.isVisible = false;
    var isTrue = answerIndex == this.qRightAnswerId;
    return isTrue;  
};
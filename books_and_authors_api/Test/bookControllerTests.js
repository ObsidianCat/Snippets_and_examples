/**
 * Created by Lula on 6/8/2016.
 */
var should = require("should"),
    sinon = require("sinon");

describe("Book Controller tests:", function(){
  describe("Post", function(){
    it("Should not allow empty title on post", function(){
      var Book = function(book){
        this.save = function(){};
      };
      var req = {
        body:{
          authir:"Jon"
        }
      };
      var res = {
        status:sinon.spy(),
        send:sinon.spy()
      };
      var bookController = require('../Controllers/bookController')(Book);
      bookController.post(req,res);
      
      res.status.calledWith(400).should.equal(true, "bad status "+res.status.args[0][0]);
      res.send.calledWith("Title is required").should.equal(true);
    });
  })
});
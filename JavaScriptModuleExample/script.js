//ideas with IIFE for creating publick and private variables and avoiding global scope pollution

var ray = (function(){
    var DEFAULTS = {
        say:'hello',
        speed:'normal'
    }

    return {
        speak:function(){
            var myArguments = arguments[0]||"";
            var statement = myArguments.say||DEFAULTS.say;
            console.log(statement);
            return this
        },
        run: function(){
            var myArguments = arguments[0]||"";
            var running = myArguments.speed||DEFAULTS.speed;
            console.log('running...'+running);
            return this;

        }
    }
})();

//only one function assigned to global scope;
(function(global){
            var numbers = [1,2,3];
            global.getNumbers = function returnNumbers(){
                console.log(numbers);
            };
})(window);
window.global.getNumbers();

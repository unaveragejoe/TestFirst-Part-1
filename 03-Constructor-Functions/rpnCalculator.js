function RPNCalculator(){
  this.stack = [];
}

RPNCalculator.prototype.push = function(num){
  this.stack.push(num);
};

RPNCalculator.prototype.popAndCompute = function(operation){
  var num1 = this.stack.pop();
  var num2 = this.stack.pop();

  this.push(operation(num1, num2));
};

RPNCalculator.prototype.plus = function(){
  return first + second;
};
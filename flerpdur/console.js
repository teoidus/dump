function Console(textOut, graphicsOut)
{
  this.tOut = textOut; // textarea
  this.gOut = graphicsOut; // canvas
  this.evaluator = new Evaluator({map: new StringMap("map", "this.bindings[\"{1}\"] = new StringMap(\"{1}\", {2});") });
}

Console.prototype.input = function(s)
{
  var results = this.evaluator.run(s);
  this.output("$ " + s + "\n");
  this.output(results.join("\n"));
  this.output("\n");
}

Console.prototype.output = function(s)
{
  var t = this.tOut;
  t.value = t.value + s;
  t.scrollTop = t.scrollHeight;
}

Console.prototype.draw = function(s) // like easier svg?
{
}
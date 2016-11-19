function StringMap(name, substitution)
{
  this.name = name;
  this.substitution = substitution;
  this.args = substitution.match(/({[0-9]})(?!.*\1)/gi).length; // finds last instance of each string of the form {n}, then returns match count
}

StringMap.prototype.substitute = function(arg)
{
  var s = this.substitution.replace(/\{1\}/gi, arg);
  for (var i = 2; i <= this.args; ++i) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "gi"), "{" + (i-1) + "}");
  }
  return (this.args == 1) ? s : new StringMap(this.name + "(" + arg + ")", s);
}

StringMap.prototype.apply = function(args)
{
  // if args.length > this.args, repeatedly apply mapping until no args remain
  // if args.length < this.args, return new mapping object (curried)
  var result = this;
  for (var i = 0; i < args.length; ++i) {
    if (typeof result == "string") { // no more args left to substitute
      if (this.args <= 1) return result; // will not reduce other args
      result = this.substitute(result); // -> reduce excess args
    }
    result = result.substitute(args[i]);
  }
  return result;
}
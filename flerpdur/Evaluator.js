function Evaluator(bindings)
{
  this.bindings = bindings;
}

Evaluator.prototype.tokenize = function(s) {
  var tokens = [""];
  var state = "default";
  for (var i = 0; i < s.length; ++i) {
    switch (state) {
      case "default":
        if (s[i] == "(" || s[i] == ")") {
          if (tokens[tokens.length-1] == "")
            tokens[tokens.length-1] = s[i];
          else tokens.push(s[i]);
          tokens.push("");
          break;
        }
        if (/\s/.test(s[i])) {
          if (tokens[tokens.length-1] != "") tokens.push("");
          break; // is whitespace
        }
        tokens[tokens.length-1] += s[i];
        if (s[i] == "\"") {
          state = "string";
          break;
        }
        break;
      case "string":
        tokens[tokens.length-1] += s[i];
        if (s[i] == "\\") state = "skip_string";
        if (s[i] == "\"") state = "default";
        break;
      default:
        tokens[tokens.length-1] += s[i];
        state = state.split("_")[1];
        break;
    }
  }
  return tokens;
}

Evaluator.prototype.replaceMappings = function(tokens) {
  for (var i = 0; i < tokens.length; ++i) {
    if (tokens[i] in this.bindings)
      tokens[i] = this.bindings[tokens[i]];
  }
  return tokens;
}

Evaluator.prototype.compile = function(s) {
  var tokens = this.replaceMappings(this.tokenize(s));
  var stack = [];
  var parens = [];
  var parensActive = false;
  console.log("Tokens:", tokens);
  for (var i = tokens.length-1; i >= 0; --i) {
    if (tokens[i] == ")")
      parens.push(stack.length);
    else if (tokens[i] == "(")
      parensActive = true;
    else if (typeof tokens[i] == "object") {// mapping
      var startIndex = (parensActive) ? parens.pop() : stack.length - tokens[i].args;
      parensActive = false;
      stack.push(tokens[i].apply(stack.splice(startIndex).reverse()));
    } else stack.push(tokens[i]);
  }
  return stack.reverse();
}

Evaluator.prototype.run = function(s) {
  var results = this.compile(s);
  for (var i = 0; i < results.length; ++i) {
    results[i] = eval(results[i]);
  }
  return results;
}
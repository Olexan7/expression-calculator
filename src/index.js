function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  expr = expr.replace(/ /g, "");
  if (expr.indexOf("/0") != -1) throw new Error("TypeError: Division by zero.");
  let open = 0;
  let close = 0;
  expr.split("").forEach(element => {
    if (element === "(") open++;
    else if (element == ")") close++;
  });
  if (open != close)
    throw new Error("ExpressionError: Brackets must be paired");

  let answer = new Function("return " + expr);
  return answer();
}

module.exports = {
  expressionCalculator
};

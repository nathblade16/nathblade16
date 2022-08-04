function AddTokens(){
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/gh/GlixzzyBlooketHacks/Glixzzy.github.io.@main/Global/Add-Tokens.js";
  script.type = "text/javascript";
  document.body.append(script);
}
function getAllAwnsersCorrect(){
  const script = document.createElement("script");;
  script.src = "https://cdn.jsdelivr.net/gh/GlixzzyBlooketHacks/Glixzzy.github.io.@main/Global/Get-All-Answers-Correct.js";
  script.type = "text/javascript";
  document.body.append(script);
}
const div = document.createElement("div");
div.id = "div";
div.setAttribute("style","background-color:black; border:5px outset lightblue; text-align: center; height:100px; width:302px; margin-left: auto; margin-right: auto");
const addtokens = document.createElement("button");
addtokens.onclick = function(){AddTokens();};
addtokens.innerHTML = "AddTokens";
const getallawnserscorrect = document.createElement("button");
getallawnserscorrect.onclick = function(){getAllAwnsersCorrect();};
getallawnserscorrect.innerHTML = "get all awnsers correct";
div.append(addtokens);
div.append(getallawnserscorrect);
document.body.append(div);
div.id = "div";
div.setAttribute("style","background-color:black; border:5px outset lightblue; text-align: center; height:100px; width:302px; margin-left: auto; margin-right: auto");
addtokens.onclick = function(){AddTokens();};
addtokens.innerHTML = "AddTokens";
div.append(addtokens);
document.body.append(div);
div.classList.add("popup");

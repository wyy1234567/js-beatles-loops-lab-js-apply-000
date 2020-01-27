// add solution here
function theBeatlesPlay(musicians, instruments) {
  var result = []
  for (var i = 0; i < musicians.length; i++) {
    var temp = ""
    temp = musicians[i] + " plays " + instruments[i];
    result.push(temp);
  }
  return result;
}

function johnLennonFacts(facts) {

  var result = [];
  var counter = 0;
  while (facts.length > 0) {
    var temp = "";
    temp = facts[counter];
    temp += "!!!";
    result.push(temp);
    facts.shift();
    counter++;
  }
  return result;
}
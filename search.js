var template = Handlebars.compile(document.getElementById('sfb-cards-template').innerHTML);
var urlParams = new URLSearchParams(window.location.search);
var tag = urlParams.get('tag');
var type = urlParams.get('type');
var core = urlParams.get('core');
var target = urlParams.get('target');
var movement = urlParams.get('movement');

var cards = [];
data.champions.forEach((champion) => {
  champion.cards.forEach((card, i) => {
    if (card.tags.includes(tag) 
        || card.type == type 
        || card.core == core 
        || (target && card.target == target) 
        || (movement && card.movement)
        || !(tag || type || core || target || movement)) {
      cards.push({
        "card": card,
        "index": i + 1,
        "champion_name": champion.name,
        "champion_code": champion.code
      });
    }
  });
});
Handlebars.registerHelper('ifEq', function(lvalue, rvalue, options) {
  if (lvalue != rvalue) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});
var html = template(cards);
document.getElementById('content').innerHTML = html;
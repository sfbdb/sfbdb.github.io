var template = Handlebars.compile(document.getElementById('sfb-cards-template').innerHTML);
var urlParams = new URLSearchParams(window.location.search);
var filters = {
  "tag": urlParams.get('tag'),
  "type": urlParams.get('type'),
  "core": urlParams.get('core'),
  "target": urlParams.get('target'),
  "movement": urlParams.get('movement'),
  "champion": urlParams.get('champion'),
}

var cards = [];
data.champions.forEach((champ) => {
  if (!filters.champion || champ.code == filters.champion) {
    champ.cards.forEach((card, i) => {
      if ((!filters.tag || card.tags.includes(filters.tag))
          && (!filters.type || card.type == filters.type)
          && (!filters.core || card.core == filters.core) 
          && (!filters.target || card.target == filters.target) 
          && (!filters.movement || card.movement)) {
        cards.push({
          "card": card,
          "index": i + 1,
          "champion_name": champ.name,
          "champion_code": champ.code
        });
      }
    });    
  }
});

Handlebars.registerHelper('ifEq', function(lvalue, rvalue, options) {
  if (lvalue != rvalue) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});
var html = template({"params": urlParams.toString(), "filters": filters, "cards": cards});
document.getElementById('content').innerHTML = html;

function search(key, value) {
  var urlParams = new URLSearchParams(window.location.search);
  urlParams.delete(key);
  urlParams.append(key, value);
  window.location.search = urlParams;
}

function removeSearch(key, value) {
  var urlParams = new URLSearchParams(window.location.search);
  urlParams.delete(key);
  window.location.search = urlParams;
}
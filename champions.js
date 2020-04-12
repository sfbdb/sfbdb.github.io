var template = Handlebars.compile(document.getElementById('sfb-champions-template').innerHTML);
var champions = [];
data.champions.forEach((champion) => {
  champions.push({
    "code": champion.code,
    "name": champion.name,
    "title": champion.title,
    "hitpoints": champion.hitpoints,
    "defence": champion.defence,
    "hitpoints_levelled": champion.hitpoints_levelled,
    "defence_levelled": champion.defence_levelled,
    "reactions": champion.cards.filter(c => c.type == 'reaction').length,
    "attacks": champion.cards.filter(c => c.type == 'attack').length,
    "skills": champion.cards.filter(c => c.type == 'skill').length,
    "movement": champion.cards.filter(c => c.movement).map(c => c.movement).reduce((a, b) => a + b, 0),
    "strength": champion.cards.filter(c => c.strength).map(c => c.strength).reduce((a, b) => a + b, 0),
    "ranged": champion.cards.filter(c => c.max_range).length,
    "tags": champion.cards.flatMap(c => c.tags)
  });
});
var html = template(champions);
document.getElementById('champions').innerHTML = html;
$('#champions-table').DataTable({
  "paging": false,
  "searching": false,
  "info": false
});
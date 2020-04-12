Handlebars.registerHelper("inc", function(value, options)
{
  return parseInt(value) + 1;
});
Handlebars.registerHelper('ifEq', function(lvalue, rvalue, options) {
  if (lvalue != rvalue) {
    return options.inverse(this);
  } else {
    return options.fn(this);
  }
});
Handlebars.registerPartial('sfb-card', Handlebars.compile(document.getElementById('sfb-card-template').innerHTML));
Handlebars.registerPartial('sfb-champion-cards', Handlebars.compile(document.getElementById('sfb-champion-cards-template').innerHTML));
var urlParams = new URLSearchParams(window.location.search);
var arrange_by = urlParams.get('arrange_by');
var template;
if (arrange_by == 'type') {
  template = Handlebars.compile(document.getElementById('sfb-cards-by-type-template').innerHTML);
} else if (arrange_by == 'core') {
  template = Handlebars.compile(document.getElementById('sfb-cards-by-core-template').innerHTML);
} else if (arrange_by == 'numeric') {
  template = Handlebars.compile(document.getElementById('sfb-cards-numeric-template').innerHTML);
} else {
  template = Handlebars.compile(document.getElementById('sfb-cards-by-core-template').innerHTML);
}
var html = template(data);
document.getElementById('content').innerHTML = html;
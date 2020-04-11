var data = {
  "cores": ["red","yellow","blue"],
  "champions":[
    {
      "name":"Akhet",
      "code":"akhet",
      "title":"Light of Creation",
      "defence":1,
      "hitpoints":7,
      "defence_levelled":1,
      "hitpoints_levelled":8,
      "levelled_tags":["discard","strength-boost"],
      "cards":[
        {
          "name":"Take Flight",
          "core":"blue",
          "type":"skill",
          "tags":["swoop","adjacent"]
        },
        {
          "name":"Wingstorm",
          "core":"red",
          "type":"attack",
          "movement":1,
          "max_range":2,
          "target":"direct-shot",
          "strength":1,
          "tags":["post-attack","push"]
        },
        {
          "name":"From the Ashes",
          "core":"red",
          "type":"reaction",
          "tags":["post-attack","out-of-action","adjacent"]
        },
        {
          "name":"Healing Tears",
          "core":"yellow",
          "type":"skill",
          "movement":2,
          "tags":["heal","discard","adjacent"]
        },
        {
          "name":"Inner Fire",
          "core":"yellow",
          "type":"skill",
          "movement":3,
          "tags":["return-card","strength-boost"]
        },
        {
          "name":"Death From Above",
          "core":"blue",
          "type":"attack",
          "target":"AOE",
          "strength":2,
          "tags":["pre-attack","swoop"]
        }
      ]
    },
    {
      "name":"Deryn",
      "code":"deryn",
      "title":"Huntress of the Eastwood",
      "defence":0,
      "hitpoints":7,
      "defence_levelled":0,
      "hitpoints_levelled":7,
      "levelled_tags":["defence","trap"],
      "cards":[
        {
          "name":"Heavy Shot",
          "core":"red",
          "type":"attack",
          "movement":2,
          "min_range":2,
          "max_range":3,
          "target":"direct-shot",
          "strength":2,
          "tags":["strength-boost","trap","post-attack","push"]
        },
        {
          "name":"Hunter's Quarry",
          "core":"red",
          "type":"skill",
          "movement":2,
          "max_range":4,
          "target":"direct-shot",
          "tags":["defence","strength-boost"]
        },
        {
          "name":"Prowl",
          "core":"blue",
          "type":"skill",
          "movement":2,
          "tags":["draw","plan","trap"]
        },
        {
          "name":"Ambush",
          "core":"yellow",
          "type":"reaction",
          "defence":1,
          "tags":["post-attack","adjacent"]
        },
        {
          "name":"Spring the Trap",
          "core":"blue",
          "type":"attack",
          "movement":2,
          "max_range":4,
          "target":"indirect-shot",
          "strength":2,
          "tags":["trap","strength-boost","post-attack","stun"]
        },
        {
          "name":"Hit and Run",
          "core":"yellow",
          "type":"attack",
          "movement":3,
          "max_range":2,
          "target":"indirect-shot",
          "strength":2,
          "tags":["post-attack","dash"]
        }
      ]
    },
    {
      "name":"Dugrun",
      "code":"dugrun",
      "title":"Warden of the North",
      "defence":2,
      "hitpoints":6,
      "defence_levelled":2,
      "hitpoints_levelled":7,
      "levelled_tags":["adjacent","target"],
      "cards":[
        {
          "name":"Hold Ground",
          "core":"red",
          "type":"reaction",
          "tags":["push","pull","force","fear"]
        },
        {
          "name":"Knock Down",
          "core":"yellow",
          "type":"attack",
          "movement":2,
          "target":"melee",
          "strength":2,
          "tags":["post-attack","strength-boost"]
        },
        {
          "name":"Mighty Blow",
          "core":"blue",
          "type":"attack",
          "movement":1,
          "target":"melee",
          "strength":1,
          "tags":["post-attack","push","stun"]
        },
        {
          "name":"Shield Slam",
          "core":"blue",
          "type":"skill",
          "movement":1,
          "tags":["dash","adjacent","push"]
        },
        {
          "name":"Blizzard",
          "core":"red",
          "type":"attack",
          "movement":2,
          "target":"melee",
          "strength":2,
          "tags":["post-attack","damage"]
        },
        {
          "name":"Onwards!",
          "core":"yellow",
          "type":"skill",
          "movement":1,
          "tags":["draw","dash"]
        }
      ]
    },
    {
      "name":"Gold'arr",
      "code":"goldarr",
      "title":"Scourge of the Several Seas",
      "defence":1,
      "hitpoints":8,
      "defence_levelled":1,
      "hitpoints_levelled":8,
      "levelled_tags":["push"],
      "cards":[
        {
          "name":"Me Hearties",
          "core":"yellow",
          "type":"skill",
          "movement":2,
          "tags":["draw","strength-boost","movement-boost"]
        },
        {
          "name":"Harpoon Strike",
          "core":"red",
          "type":"attack",
          "movement":2,
          "min_range":2,
          "max_range":3,
          "target":"direct-shot",
          "strength":1,
          "tags":["post-attack","pull"]
        },
        {
          "name":"Plundarr!",
          "core":"yellow",
          "type":"attack",
          "movement":2,
          "target":"melee",
          "strength":2,
          "tags":["post-attack","draw"]
        },
        {
          "name":"Intimidation",
          "core":"red",
          "type":"reaction",
          "defence":1,
          "tags":["post-attack","fear"]
        },
        {
          "name":"Anchors Aweigh!",
          "core":"blue",
          "type":"attack",
          "movement":2,
          "target":"AOE",
          "strength":1,
          "tags":["post-attack","push"]
        },
        {
          "name":"Set Sail!",
          "core":"blue",
          "type":"skill",
          "movement":1,
          "tags":["dash","damage"]
        }
      ]
    },
    {
      "name":"Gwaien",
      "code":"gwaien",
      "title":"The Gathering Storm",
      "defence":0,
      "hitpoints":6,
      "defence_levelled":0,
      "hitpoints_levelled":6,
      "levelled_tags":["range"],
      "cards":[
        {
          "name":"Fireball",
          "core":"red",
          "type":"attack",
          "movement":1,
          "min_range":2,
          "max_range":3,
          "target":"indirect-shot",
          "strength":3,
          "tags":["post-attack","damage","adjacent"]
        },
        {
          "name":"Flamespear",
          "core":"red",
          "type":"attack",
          "movement":1,
          "min_range":3,
          "max_range":5,
          "target":"direct-shot",
          "strength":3,
          "tags":["post-attack","push"]
        },
        {
          "name":"Chain Lightning",
          "core":"yellow",
          "type":"attack",
          "movement":2,
          "min_range":2,
          "max_range":3,
          "target":"direct-shot",
          "strength":3,
          "tags":["post-attack","damage"]
        },
        {
          "name":"Ignite",
          "core":"blue",
          "type":"attack",
          "movement":2,
          "max_range":2,
          "target":"indirect-shot",
          "strength":2,
          "tags":["post-attack","strength-boost"]
        },
        {
          "name":"Arcane Shield",
          "core":"yellow",
          "type":"reaction",
          "defence":1,
          "tags":["adjacent","defence-boost"]
        },
        {
          "name":"Teleport",
          "core":"blue",
          "type":"skill",
          "tags":["jump"]
        }
      ]
    },
    {
      "name":"Killgore",
      "code":"killgore",
      "title":"The Ravager",
      "defence":1,
      "hitpoints":7,
      "defence_levelled":1,
      "hitpoints_levelled":8,
      "levelled_tags":["stun"],
      "cards":[
        {
          "name":"Relentless Advance",
          "core":"red",
          "type":"skill",
          "movement":1,
          "max_range":2,
          "target":"direct-shot",
          "tags":["force"]
        },
        {
          "name":"Darksteel Armour",
          "core":"red",
          "type":"reaction",
          "defence":1,
          "tags":["post-attack","defence-boost"]
        },
        {
          "name":"Throw",
          "core":"blue",
          "type":"skill",
          "movement":2,
          "tags":["adjacent","jump"]
        },
        {
          "name":"Maul Thrash",
          "core":"blue",
          "type":"attack",
          "movement":1,
          "target":"melee",
          "strength":2,
          "tags":["post-attack","push"]
        },
        {
          "name":"Fury",
          "core":"yellow",
          "type":"attack",
          "movement":2,
          "target":"AOE",
          "strength":2,
          "tags":["post-attack","heal"]
        },
        {
          "name":"Appetite for Destruction",
          "core":"yellow",
          "type":"attack",
          "target":"melee",
          "strength":1,
          "tags":["lifesteal","strength-boost"]
        }
      ]
    },
    {
      "name":"Ko'lel",
      "code":"kolel",
      "title":"The Jungle Typhoon",
      "defence":0,
      "hitpoints":8,
      "defence_levelled":0,
      "hitpoints_levelled":8,
      "levelled_tags":["defence"],
      "cards":[
        {
          "name":"Double Jump",
          "core":"yellow",
          "type":"attack",
          "target":"melee",
          "strength":2,
          "tags":["pre-attack","post-attack","jump"]
        },
        {
          "name":"Mighty Jump",
          "core":"red",
          "type":"attack",
          "movement":1,
          "target":"AOE",
          "strength":2,
          "tags":["pre-attack","jump","post-attack","push"]
        },
        {
          "name":"Poisoned Dart",
          "core":"red",
          "type":"attack",
          "movement":1,
          "max_range":3,
          "target":"indirect-shot",
          "strength":2,
          "tags":["poison"]
        },
        {
          "name":"Blinding Dart",
          "core":"blue",
          "type":"reaction",
          "defence":1,
          "tags":["post-attack","stun"]
        },
        {
          "name":"Scout Ahead",
          "core":"yellow",
          "type":"skill",
          "movement":2,
          "tags":["draw","plan"]
        },
        {
          "name":"Tongue Lash",
          "core":"blue",
          "type":"attack",
          "movement":1,
          "max_range":3,
          "target":"direct-shot",
          "strength":1,
          "tags":["post-attack","pull","stun"]
        }
      ]
    },
    {
      "name":"Korvash",
      "code":"korvash",
      "title":"Wielder of Scornblade",
      "defence":0,
      "hitpoints":8,
      "defence_levelled":0,
      "hitpoints_levelled":9,
      "levelled_tags":["defence","bloodied"],
      "cards":[
        {
          "name":"Hell Hath No Fury",
          "core":"red",
          "type":"attack",
          "movement":2,
          "max_range":2,
          "target":"indirect-shot",
          "strength":3,
          "tags":["post-attack","bloodied","force"]
        },
        {
          "name":"Chop",
          "core":"red",
          "type":"attack",
          "target":"AOE",
          "strength":0,
          "tags":["strength-boost"]
        },
        {
          "name":"Shockwave",
          "core":"blue",
          "type":"skill",
          "movement":1,
          "target":"melee",
          "tags":["push","stun"]
        },
        {
          "name":"Leaping Strike",
          "core":"yellow",
          "type":"attack",
          "movement":1,
          "target":"melee",
          "strength":3,
          "tags":["pre-attack","jump"]
        },
        {
          "name":"Bloodcurdling Roar",
          "core":"blue",
          "type":"reaction",
          "defence":2,
          "tags":["post-attack","bloodied"]
        },
        {
          "name":"Sap Strength",
          "core":"yellow",
          "type":"attack",
          "movement":2,
          "max_range":2,
          "target":"direct-shot",
          "strength":2,
          "tags":["bloodied","strength-boost"]
        }
      ]
    },
    {
      "name":"Loralei",
      "code":"loralei",
      "title":"Fable of the Fey",
      "defence":2,
      "hitpoints":4,
      "defence_levelled":2,
      "hitpoints_levelled":4,
      "levelled_tags":["draw"],
      "cards":[
        {
          "name":"Clairvoiance",
          "core":"blue",
          "type":"skill",
          "movement":3,
          "tags":["draw","plan"]
        },
        {
          "name":"Grasping Vines",
          "core":"red",
          "type":"skill",
          "movement":1,
          "max_range":2,
          "target":"direct-shot",
          "tags":["place","adjacent"]
        },
        {
          "name":"Healing Rain",
          "core":"yellow",
          "type":"skill",
          "movement":3,
          "tags":["discard","heal"]
        },
        {
          "name":"Intervention",
          "core":"blue",
          "type":"reaction",
          "defence":1,
          "tags":["post-attack","heal"]
        },
        {
          "name":"Nature's Wrath",
          "core":"red",
          "type":"attack",
          "movement":1,
          "min_range":3,
          "max_range":4,
          "target":"indirect-shot",
          "strength":3,
          "tags":["ignore-defence"]
        },
        {
          "name":"Winding Paths",
          "core":"yellow",
          "type":"attack",
          "movement":2,
          "max_range":2,
          "target":"direct-shot",
          "strength":2,
          "tags":["post-attack"]
        }
      ]
    },
    {
      "name":"Mariusz",
      "code":"mariusz",
      "title":"The Cursed",
      "defence":0,
      "hitpoints":7,
      "defence_levelled":0,
      "hitpoints_levelled":7,
      "levelled_tags":["lifesteal","bloodied"],
      "cards":[
        {
          "name":"Ravenous Bite",
          "core":"blue",
          "type":"attack",
          "target":"melee",
          "strength":3,
          "tags":["pre-attack","dash","lifesteal"]
        },
        {
          "name":"Stalk the Prey",
          "core":"blue",
          "type":"skill",
          "tags":["place","adjacent","bloodied","stun"]
        },
        {
          "name":"Closing In",
          "core":"red",
          "type":"attack",
          "movement":2,
          "target":"melee",
          "strength":2,
          "tags":["pre-attack","dash","bloodied","double"]
        },
        {
          "name":"Overpower",
          "core":"yellow",
          "type":"attack",
          "movement":1,
          "target":"melee",
          "strength":2,
          "tags":["pre-attack","dash","post-attack","bloodied","force"]
        },
        {
          "name":"Bone to Pick",
          "core":"red",
          "type":"attack",
          "movement":1,
          "target":"melee",
          "strength":2,
          "tags":["pre-attack","bloodied","dash","strength-boost"]
        },
        {
          "name":"A Cornered Beast",
          "core":"yellow",
          "type":"reaction",
          "tags":["post-attack","adjacent","damage"]
        }
      ]
    },
    {
      "name":"Nevamor",
      "code":"nevamor",
      "title":"The Shade",
      "defence":1,
      "hitpoints":8,
      "defence_levelled":1,
      "hitpoints_levelled":8,
      "levelled_tags":["adjacent","reaction"],
      "cards":[
        {
          "name":"Dark Envoy",
          "core":"blue",
          "type":"attack",
          "movement":2,
          "min_range":2,
          "max_range":3,
          "target":"direct-shot",
          "strength":1,
          "tags":["post-attack","plan"]
        },
        {
          "name":"Nightmare",
          "core":"blue",
          "type":"skill",
          "movement":1,
          "tags":["swoop","damage","fear"]
        },
        {
          "name":"Guiding Light",
          "core":"yellow",
          "type":"skill",
          "movement":2,
          "tags":["place","adjacent","strength-boost"]
        },
        {
          "name":"Murder of Crows",
          "core":"red",
          "type":"reaction",
          "defence":1,
          "tags":["post-attack"]
        },
        {
          "name":"Soul Reave",
          "core":"yellow",
          "type":"attack",
          "movement":2,
          "max_range":2,
          "target":"indirect-shot",
          "strength":2,
          "tags":["lifesteal"]
        },
        {
          "name":"Grim Harvest",
          "core":"red",
          "type":"attack",
          "movement":2,
          "target":"melee",
          "strength":2,
          "tags":["strength-boost"]
        }
      ]
    },
    {
      "name":"Rath",
      "code":"rath",
      "title":"Stalker Beneath",
      "defence":0,
      "hitpoints":6,
      "defence_levelled":0,
      "hitpoints_levelled":7,
      "levelled_tags":["poison"],
      "cards":[
        {
          "name":"Double Dealing",
          "core":"blue",
          "type":"attack",
          "movement":2,
          "max_range":2,
          "target":"indirect-shot",
          "strength":2,
          "tags":["double"]
        },
        {
          "name":"Nightshade",
          "core":"blue",
          "type":"skill",
          "movement":2,
          "tags":["draw","plan","ignore-defence"]
        },
        {
          "name":"Stalk Beneath",
          "core":"red",
          "type":"skill",
          "target":"melee",
          "tags":["damage","adjacent","place"]
        },
        {
          "name":"Burrow",
          "core":"yellow",
          "type":"attack",
          "target":"melee",
          "strength":3,
          "tags":["pre-attack","post-attack","jump"]
        },
        {
          "name":"Sneak Attack",
          "core":"red",
          "type":"attack",
          "movement":2,
          "target":"melee",
          "strength":2,
          "tags":["reaction"]
        },
        {
          "name":"Go to Ground",
          "core":"yellow",
          "type":"reaction",
          "defence":1,
          "tags":["post-attack","jump"]
        }
      ]
    },
    {
      "name":"Sulka",
      "code":"sulka",
      "title":"The Poisoned Mind",
      "defence":0,
      "hitpoints":7,
      "defence_levelled":0,
      "hitpoints_levelled":8,
      "levelled_tags":["draw","plan"],
      "cards":[
        {
          "name":"Darting Strikes",
          "core":"red",
          "type":"attack",
          "max_range":3,
          "target":"indirect-shot",
          "strength":2,
          "tags":["double"]
        },
        {
          "name":"Life Drain",
          "core":"blue",
          "type":"attack",
          "movement":2,
          "max_range":3,
          "target":"direct-shot",
          "strength":2,
          "tags":["lifesteal","heal"]
        },
        {
          "name":"Effigy",
          "core":"blue",
          "type":"skill",
          "movement":2,
          "max_range":2,
          "target":"direct-shot",
          "tags":["force","stun"]
        },
        {
          "name":"Spirit Slither",
          "core":"yellow",
          "type":"skill",
          "movement":3,
          "tags":["ignore-defence"]
        },
        {
          "name":"Mind Control",
          "core":"red",
          "type":"skill",
          "movement":2,
          "tags":["force"]
        },
        {
          "name":"Curse",
          "core":"yellow",
          "type":"reaction",
          "defence":2,
          "tags":["post-attack","root"]
        }
      ]
    },
    {
      "name":"Taze",
      "code":"taze",
      "title":"The Thundering Thriller",
      "defence":0,
      "hitpoints":9,
      "defence_levelled":0,
      "hitpoints_levelled":9,
      "levelled_tags":["dash","adjacent"],
      "cards":[
        {
          "name":"Rodeo",
          "core":"red",
          "type":"skill",
          "movement":2,
          "tags":["damage"]
        },
        {
          "name":"Charge",
          "core":"yellow",
          "type":"attack",
          "movement":1,
          "target":"melee",
          "strength":1,
          "tags":["pre-attack","dash","strength-boost"]
        },
        {
          "name":"Momentum",
          "core":"blue",
          "type":"reaction",
          "defence":1,
          "tags":["post-attack","dash"]
        },
        {
          "name":"Bludgeon",
          "core":"blue",
          "type":"attack",
          "movement":2,
          "max_range":2,
          "target":"indirect-shot",
          "strength":2,
          "tags":["post-attack","stun"]
        },
        {
          "name":"Finishing Blow",
          "core":"red",
          "type":"attack",
          "target":"melee",
          "strength":3,
          "tags":["pre-attack","dash","bloodied","ignore-defence"]
        },
        {
          "name":"Rush",
          "core":"yellow",
          "type":"skill",
          "movement":2,
          "tags":["dash"]
        }
      ]
    },
    {
      "name":"Tzu Xiao",
      "code":"tzu-xiao",
      "title":"The Jade Claw",
      "defence":0,
      "hitpoints":9,
      "defence_levelled":0,
      "hitpoints_levelled":9,
      "levelled_tags":["defence","adjacent"],
      "cards":[
        {
          "name":"Challenge",
          "core":"blue",
          "type":"attack",
          "movement":1,
          "max_range":2,
          "target":"direct-shot",
          "strength":2,
          "tags":["post-attack","pull"]
        },
        {
          "name":"Focus",
          "core":"yellow",
          "type":"skill",
          "movement":1,
          "tags":["strength-boost","movement-boost"]
        },
        {
          "name":"Double Strike",
          "core":"red",
          "type":"attack",
          "target":"melee",
          "strength":2,
          "tags":["pre-attack","dash","double"]
        },
        {
          "name":"Flash of Jade",
          "core":"red",
          "type":"skill",
          "movement":2,
          "target":"AOE",
          "tags":["damage","bloodied"]
        },
        {
          "name":"Revenge",
          "core":"blue",
          "type":"reaction",
          "tags":["post-attack","out-of-action","damage"]
        },
        {
          "name":"Pounce",
          "core":"yellow",
          "type":"attack",
          "target":"melee",
          "strength":1,
          "tags":["pre-attack","jump","post-attack","push"]
        }
      ]
    }
  ]
};

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
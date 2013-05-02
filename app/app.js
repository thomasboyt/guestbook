window.Guestbook = Ember.Application.create();

marked.setOptions({
  sanitize: true
});

// Default load order. Override as you see fit.
require("store");
require("modules/*/model");
require("modules/*/controller");
require("modules/*/view");
require("helpers/*");
require("router");
require("modules/*/route");

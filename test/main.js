Guestbook.rootElement = "#ember";
Guestbook.setupForTesting();
Guestbook.injectTestHelpers();

// stub out the start() and stop() qunit methods ember-testing tries to use
window.start = function() {};
window.stop = function() {};

require("spec/*");

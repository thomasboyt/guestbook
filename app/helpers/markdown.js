Ember.Handlebars.registerBoundHelper('markdown', function(value, options) {
  return new Handlebars.SafeString(marked(value));
});

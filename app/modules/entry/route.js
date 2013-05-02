Guestbook.IndexRoute = Ember.Route.extend({
  renderTemplate: function(controller, model) {
    controller = this.controllerFor("entries");
    controller.set("content", Guestbook.Entry.find());
    this.render("entries", {
      controller: controller
    });
  }
});

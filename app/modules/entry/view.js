Guestbook.EntriesView = Ember.View.extend({
  save: function() {
    var author = this.$("#author").val(),
        body = this.$("#body").val();

    if (author && body) {
      this.get("controller").save({
        author: author,
        body: body
      });
      this.$("form").hide();
      this.$("#success").show();
    }
    else {
      this.$(".control-group").addClass("error");
    }
  }
});

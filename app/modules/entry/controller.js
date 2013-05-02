Guestbook.EntriesController = Ember.ArrayController.extend({
  loaded: function() {
    var first;
    // naive loaded check - if one object is loaded, they all are
    // does require at least one object in there at all times. HACKY~
    if (first = this.get("content").objectAt(0)) {
      return !!first.get("author");
    }
    return false;
  }.property("content.@each"),

  save: function(properties) {
    Guestbook.Entry.createRecord(properties);
    Guestbook.store.commit();
  }
});

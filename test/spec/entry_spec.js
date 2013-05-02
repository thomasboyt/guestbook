describe("Entry", function() {
  beforeEach(function () {
    Ember.run(Guestbook, Guestbook.advanceReadiness);
  });
  afterEach(function () {
    Guestbook.reset();
  });

  it("does something", function(done) {
    // put your assertions here
    done();
  });
});

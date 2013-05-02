Guestbook.store = DS.Store.create({
  revision: 12,
  adapter: DS.Firebase.Adapter.create({
    dbName: "guestbook"
  })
});

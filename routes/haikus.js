WorkLife.HaikusRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('haiku')
  }
});

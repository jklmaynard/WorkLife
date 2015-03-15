WorkLife.HaikuRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('haiku', params.haiku_id)
  }
});

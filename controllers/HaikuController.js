WorkLife.HaikuController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('Uh, yeah?')) {
        this.get('model').destroyRecord();
      };
      this.transitionToRoute('haikus')
    }
  }
});

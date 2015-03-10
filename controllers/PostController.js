WorkLife.PostController = Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    delete: function() {
      if (confirm('Sure about this?')) {
        this.get('model').destroyRecord();
      };
      this.transitionToRoute('posts')
    },
    edit: function() {
      this.set('isEditing', true);
    },

    save: function() {
      this.set('isEditing', false);
    }
  }
});

WorkLife.NewPostController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newPost = this.store.createRecord('post', {
        name: this.get('name'),
        body: this.get('body')
      });

      newPost.save();
      this.transitionToRoute('posts')
    }
  }
});

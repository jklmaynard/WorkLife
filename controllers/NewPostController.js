WorkLife.NewPostController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newPost = this.store.createRecord('post', {
        name: this.get('name'),
        author: this.get('author'),
        body: this.get('body')
      });

      newPost.save();
      this.transitionToRoute('posts')
    }
  }
});

WorkLife.NewHaikuController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newHaiku = this.store.createRecord('haiku', {
        author: this.get('author'),
        firstLine: this.get('firstLine'),
        secondLine: this.get('secondLine'),
        thirdLine: this.get('thirdLine')
      });

      newHaiku.save();
      this.transitionToRoute('haikus')
    }
  }
})

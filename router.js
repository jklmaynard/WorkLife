WorkLife.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('new-post');
  this.resource('posts');
  this.resource('post', {path: '/:post_id'});
  this.resource('haikus');
  this.resource('haiku', {path: '/:haiku_id'});
});

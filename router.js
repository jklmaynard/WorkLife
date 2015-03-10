WorkLife.Router.map(function() {
  this.resource('home', {path: '/'});
  this.resource('new-post');
  this.resource('posts');
  this.resource('post', {path: '/:post_id'})
});

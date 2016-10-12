import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('artists', function() {
  //colon means a dynamic segment: a variable in our URL
    this.route('artist', {path: ':id' });
  });
});

export default Router;

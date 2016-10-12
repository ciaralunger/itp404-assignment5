import Ember from 'ember';

export default Ember.Route.extend({
	model: function (params) {
		//URL with dynamic segment
		var url = 'http://itp-api.herokuapp.com/api/artists/' + params.id + '/songs';
		//This is returning a promise (don't need the var promise = and return promise for it to be a promise)
		var promise = $.getJSON(url);

		//testing:
		//console.log (promise);
		return promise.then(function (data) {
			return data.songs;
		});
	},
	afterModel: function(model) {
		console.log(model);
	}
});

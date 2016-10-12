import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNames: ['song'],

	isPopular: Ember.computed('song.playCount', function (){
		if (this.get('song.playCount') > 20) {
			return true;
		} else {
			return false;
		}
	}),
	priceIsHigh: Ember.computed('song.price', function (){
		if (this.get('song.price') >= 1) {
			return true;
		} else {
			return false;
		}
	})
});

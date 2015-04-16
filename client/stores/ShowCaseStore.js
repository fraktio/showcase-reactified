var Reflux = require('reflux');
var Actions = require('../actions');
var Immutable = require('immutable');

let _showcases = Immutable.List(); 

export default Reflux.createStore({

    init: function() {

    },

    loadShowcases(showcases) {
        
	this.trigger(_showcases);
    },

    getShowcases() {
        return _showcases;
    }

});

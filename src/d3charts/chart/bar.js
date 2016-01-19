// 柱状图模块
define(function (require) {
	var self = {
		mod_num: 1,
		info: function () {
			console.log('bar');
		}
	}
	
	var chart = require('../chart');
	chart.Bar = self;
	return self;
});
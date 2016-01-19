// 饼状模块
define(function (require) {
	var self = {
		mod_num: 3,
		info: function () {
			console.log('pie');
		}
	}
	
	var chart = require('../chart');
	chart.Pie = self;
	return self;
});
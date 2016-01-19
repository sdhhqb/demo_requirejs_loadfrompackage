// 线图模块
define(function (require) {
	var self = {
		mod_num: 2,
		info: function () {
			console.log('pie');
		}
	}
	
	var chart = require('../chart');
	chart.Line = self;
	return self;
});
// 图例模块
define('d3charts/common/legend',['require'],function (require) {
	var self = {
		mod_num: 4,
		info: function () {
			console.log('legend');
		}
	}
	return self;
});
// 核心模块
define('d3charts/chart',['require'],function (require) {
	var self = {};
	return self;
});
define('d3charts/d3charts',['require','./common/legend','./chart'],function (require) {
	// 内部使用模块,legend,tip,...
	var legend = require('./common/legend');
	// 图表组件
	var chart = require('./chart');

	console.log(legend);
	console.log(chart);
	
	// 暴露的模块,连线图，柱形图，...
	var self = {
		chart: chart
	};

	return self;
});
define('d3charts', ['d3charts/d3charts'], function (main) { return main; });

// 线图模块
define('d3charts/chart/line',['require','../chart'],function (require) {
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
// 柱状图模块
define('d3charts/chart/bar',['require','../chart'],function (require) {
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

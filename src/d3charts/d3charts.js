define(function (require) {
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
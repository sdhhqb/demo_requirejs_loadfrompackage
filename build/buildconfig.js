// r.js打包配置
({
	appDir: '../src',
	baseUrl: './',
	optimize: 'none',
	name: 'd3charts',
	packages: [
		{
			name: 'd3charts',
			location: './d3charts',
			main: 'd3charts'
		}
	],
	include:[	//默认包含的模块
        'd3charts/chart/line',
        'd3charts/chart/bar'
    ],
	dir: '../dist'
})
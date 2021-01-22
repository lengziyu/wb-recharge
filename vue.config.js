const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsWebpackPlugin = require("uglifyjs-webpack-plugin");

function resolve(dir){
    return path.join(__dirname, dir)//path.join(__dirname)设置绝对路径
}

module.exports = {
  lintOnSave: false,
  publicPath: '/recharge/',
  productionSourceMap: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 37.5,
            mediaQuery: true, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 0 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          }),
        ]
     },
	// sass: {
	// 	prependData: `
	// 	@import "@/assets/styles/common/__variable.scss";
	// 	`
	// 	}
    }
  },
  chainWebpack: (config) =>{
	config.resolve.alias
	.set('@', resolve('src'))
	.set('~styles', resolve('src/assets/styles'))

	config.externals({
		'vue': 'Vue',
		'vuex': 'Vuex',
		'vue-router': 'VueRouter',
		'Vant': 'Vant'
	})
	// 解决ie11兼容ES6
	config.entry("main").add("babel-polyfill");
	// 打包文件分析
		config.optimization.minimizer('terser').tap((args) => {
			// 注释console.*
			args[0].terserOptions.compress.drop_console = true
			// remove debugger
			args[0].terserOptions.compress.drop_debugger = true
			// 移除 console.log
			args[0].terserOptions.compress.pure_funcs = ['console.log']
			return args
       })
	// config
		// .plugin('webpack-bundle-analyzer')
		// .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
	// 移除prefetch插件
	config.plugins.delete('preload') 
	config.plugins.delete('prefetch') 
	config.optimization.splitChunks({
	  chunks: 'all'
	})
  },
    configureWebpack: {  //webpack的相关配置在这里
			output: {
				filename: `js/[name].[hash].js`,
				chunkFilename: `js/[name].[hash].js`
			},
			plugins: [
			new FileManagerPlugin({
				onEnd: {
					delete: [
						'./dist-'+ process.env.VUE_APP_URL +'.zip',
					],
					archive: [
						{source: './dist', destination: './dist-'+process.env.VUE_APP_URL+'.zip'},
					]
				}
			})  
        ],
	}
}

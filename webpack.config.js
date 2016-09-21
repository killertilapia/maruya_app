var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ManifestRevisionPlugin = require('manifest-revision-webpack-plugin');

var rootAssetPath = './assets';

var lessLoader = ExtractTextPlugin.extract("css?sourceMap!less?sourceMap");

module.exports = {
    entry: {
        app_js: [
            rootAssetPath + '/scripts/entry.js'
        ],
        app_css: [
            rootAssetPath + '/styles/main.less'
        ]
    },
    output: {
        path: './build/public',
        publicPath: 'http://localhost:2992/assets/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js','.less']
    },
    module: {
        loaders: [
            {
                test: /\.less$/, 
                loader: lessLoader,
                exclude: /node_modules/
            },            
            {
                test: /\.js$/i, 
                loader: 'script-loader',
                exclude: /node_modules/
            },
            /*
            {
                test: /\.css$/i,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            */
            {
                test: /\.(jpe?g|png|gif|svg([\?]?.*))$/i,
                exclude: /node_modules/,
                loaders: [
                    'file?context=' + rootAssetPath + '&name=[path][name].[hash].[ext]',
                    'image?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].[chunkhash].css'),
        new ManifestRevisionPlugin(path.join('build', 'manifest.json'), {
            rootAssetPath: rootAssetPath,
            ignorePaths: ['/styles', '/scripts']
        })
    ]
};
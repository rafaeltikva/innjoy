var path = require('path');
var webpack = require('webpack');
//const isProd = process.env.NODE_ENV === 'production';
//const isDev = process.env.NODE_ENV === 'dev';

const addPlugin = (add, plugin) => add ? plugin : undefined;
//const ifProd = plugin => addPlugin(env.prod, plugin);
const removeEmpty = array => array.filter(i => !!i);

module.exports = {

    debug: true,
    devtool: 'cheap-module-eval-source-map',
    context: __dirname + '/src',
    entry: {
        app: './main',
        lib: ['lodash', 'jquery']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.[name].js',
        publicPath: '/build/' // Serve from memory
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css/, // for external css like bootstrap
                loader: 'style-loader?singleton!css-loader'
            },
            {
                test: /\.scss/,
                exclude: /node_modules/,
                loader: 'style-loader?singleton!css-loader!sass-loader'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/static/styles")]
    },
    plugins: [
        // minify bundle
        new webpack.optimize.UglifyJsPlugin({ // useful for building for production
            compress: {
                warnings: false, // hide warnings
                screw_ie8: true // eslint-disable-line
            },
            output: {
                comments: false
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'bundle.commons.js',
            chunks: ['app']
        }),
        /*removeEmpty([
         ifProd(new webpack.optimize.DedupePlugin()) // remove duplicate dependencies/code
         ]),*/
        new webpack.optimize.DedupePlugin(),

        /*new webpack.DefinePlugin({ //create global variables/constants later available for reference
         'process.env': {
         NODE_ENV: '"production"'
         }
         })*/
    ],
    devServer: {
        contentBase: './src/templates',
        port: 7001,
        inline: true,
        hot: true,
        historyApiFallback: true
    }
};

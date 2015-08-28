var path    = require('path');
var webpack = require('webpack');

module.exports = {
    target: 'web',

    devtool: 'eval-source-map',

    entry: [
        'webpack-dev-server/client?:8080',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'src/js/App.jsx')
    ],

    output: {
        path:       path.join(__dirname, '../build'),
        filename:   'bundle.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.styl']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test:   /\.(png|woff|woff2|eot|ttf|svg)/,
                loader: 'file-loader'
            },
            {
                test:   /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            {
                test:    /\.jsx?$/,
                loaders: ['react-hot-loader', 'babel-loader'],
                include: path.join(__dirname, 'src/js')
            }
        ],

        noParse: /\.min\.js/
    }
};

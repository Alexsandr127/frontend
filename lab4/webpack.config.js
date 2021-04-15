// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        compress: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/pages/index.html',
            filename: "index.html"
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/pages/news.html',
            filename: "news.html"
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/pages/photo.html',
            filename: "photo.html"
        }),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/pages/rozklad.html',
            filename: "rozklad.html"
        }),


        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
    },
    plugins: [
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
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: 'src/pages/img',
                    to: 'img',
                },

            ],
        }),
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: 'src/pages/print',

                },

            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })

        // Add your plugins here
        // Learn more obout plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader', 'less-loader'],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader',],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

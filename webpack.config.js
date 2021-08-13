const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        compress: true,
        port: 3000,
    },
    devtool: 'source-map',
    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/,
                use: ["babel-loader"] 
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: {
                    loader: 'url-loader',
                }
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: false,
        }),
    ],
};
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.html$/i, use: "html-loader"}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/calc.html'
        }
        )
      ]
}
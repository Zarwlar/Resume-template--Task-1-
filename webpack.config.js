var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); 
var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
            {
            test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader",'stylus-loader']
        })},     
        {
          test: /\.(pug|jade)$/, loaders: ['html-loader', 'pug-html-loader']
        },
        { test: /\.svg$/, use: 'url-loader?limit=5000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
        { test: /\.woff$/, use: 'url-loader?limit=5000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
        { test: /\.woff2$/, use: 'url-loader?limit=5000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
        { test: /\.[ot]tf$/, use: 'url-loader?limit=5000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
        { test: /\.eot$/, use: 'url-loader?limit=5000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' },

        {test: /\.(jpe?g|png|gif|svg)$/i, exclude: [/fonts/], use: "file-loader?outputPath=images/"},
        {test: /\.(ico)$/i, use: "file-loader?name=[name].[ext]"}
]
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.pug"
    }), new ExtractTextPlugin({
        filename: 'app.css'
    })]


}
const path = require('path');

module.exports = {
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    entry: path.join(__dirname, './app.js'),
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                },
                exclude: /(node_modules)/,
            },
            // {
            //     test: /\.(mp3|wav|wma|ogg)$/,
            //     use: {
            //       loader: 'file-loader',
            //       options: {
            //         name: '[name].[contenthash].[ext]',
            //         outputPath: 'assets/audio/',
            //         publicPath: 'assets/audio/'
            //       }
            //     }

        ],
    },
};
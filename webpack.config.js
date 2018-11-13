const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname, '/lib/app.js'),
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'bundle.dev.js',
        path: path.join(__dirname, '/build'),
    },
};

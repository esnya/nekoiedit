import path from 'path';
import webpack from 'webpack';

const DEBUG = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export default {
    debug: DEBUG,
    cache: DEBUG,
    devtool: '#source-map',
    entry: './src/browser',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/',
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: DEBUG ? 'browser.js' : 'browser.min.js',
    },
    plugins: DEBUG ? [] : [
        new webpack.optimize.UglifyJsPlugin(),
    ],
};

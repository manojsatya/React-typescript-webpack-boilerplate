const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
    },
    devtool: 'cheap-module-source-map', // controls generation of source maps
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Manoj')
        }),
        new ReactRefreshWebpackPlugin(),
    ]
}
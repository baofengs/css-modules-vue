const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, './index.js')
    },
    output: {
        filename: './[name].js'
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]-[local]-[hash:base64:5]'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                oneOf: [
                    {
                        resourceQuery: /module/,
                        use: [
                            'vue-style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: true,
                                    localIdentName: '[path][name]-[local]-[hash:base64:5]'
                                }
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    },
                    {
                        use: [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ]
                    },
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

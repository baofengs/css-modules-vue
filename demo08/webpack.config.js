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
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

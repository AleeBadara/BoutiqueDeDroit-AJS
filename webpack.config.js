var webpack = require('webpack');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            Main: 'app/components/Main.jsx',
            Nav: 'app/components/Nav.jsx',
            Connexion: 'app/components/Connexion.jsx',
            Nouveau: "app/components/Nouveau.jsx",
            SuiviCas: "app/components/SuiviCas.jsx",
            Cas: "app/components/Cas.jsx",
            Filtre: "app/widgets/Filtre.jsx",
            PrivateRoute: "app/components/router/PrivateRoute.jsx",
            PublicRoute: "app/components/router/PublicRoute.jsx",
            CasApi: "app/api/CasApi.jsx",
            ReferentielsApi: "app/api/ReferentielsApi.js",
            ApplicationStyles: 'app/styles/app.scss'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }

        ]
    }
};
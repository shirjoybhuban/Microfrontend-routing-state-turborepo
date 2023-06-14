const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

module.exports = () => ({
  webpack: {
    configure: {
      output: {
        publicPath: "auto",
      },
    },
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "remotetwo",
          filename: "remoteEntry.js",
          remotes: {
            remoteone: "remoteone@http://localhost:3001/remoteEntry.js",
            movies: "movies@http://localhost:3000/remoteEntry.js",
          },
          exposes: {
            './Card': './src/components/Card/Card.tsx'
          },
          shared: {
            ...deps,
            "store": {
              singleton: true,
            },
            tsconfig: {
              singleton: true,
            },
            ui: {
              singleton: true,
            },
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
        }),
      ],
    },
  },
});

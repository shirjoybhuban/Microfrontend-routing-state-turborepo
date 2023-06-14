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
          name: "remoteone",
          filename: "remoteEntry.js",
          remotes: {
            remotetwo: "remotetwo@http://localhost:3002/remoteEntry.js",
            movies: "movies@http://localhost:3000/remoteEntry.js",
          },
          exposes: {
            './Button': './src/components/Button.tsx'
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

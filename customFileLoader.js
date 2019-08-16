const customFileLoader = stage => {
  const test = /\.file\.(png|jpe?g|gif|svg)$/;
  // const exclude = [/\.svg$/, /\.js$/, /\.html$/, /\.json$/];
  return {
    test,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'static/[name].[hash:8].[ext]',
          emitFile: stage !== 'node',
        }
      }
    ]
  };
};

export default customFileLoader;

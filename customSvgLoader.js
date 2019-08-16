const customSvgLoader = () => ({
  test: /\.svg$/,
  use: [
    {
      loader: 'babel-loader'
    },
    {
      loader: 'react-svg-loader',
      options: {
        jsx: true
      }
    }
  ]
});

export default customSvgLoader;

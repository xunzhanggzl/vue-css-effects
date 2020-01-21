/*eslint-disable */
const cssRequire = require.context('!raw-loader!./', true, /.css$/);

// console.log(cssRequire.keys())

let exported = {}
cssRequire.keys().forEach((cssFilePath) => {
  // console.log(cssRequire(cssFilePath))
  exported[cssFilePath.replace('./', '').replace('.css', '')] = cssRequire(cssFilePath);
});

// console.log(exported)
export default exported

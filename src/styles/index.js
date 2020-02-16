/*eslint-disable */
const cssRequire = require.context('!raw-loader!./', true, /.css$/);
console.log(cssRequire)

let exported = {}
cssRequire.keys().forEach((cssFilePath) => {
  // console.log(cssFilePath)
  // console.log(cssFilePath.replace('./', '').replace('.css', ''))
  // 这里要加上default，源代码中没有default也能运行
  // console.log(cssRequire(cssFilePath))
  // console.log(cssRequire(cssFilePath).default)
  exported[cssFilePath.replace('./', '').replace('.css', '')] = cssRequire(cssFilePath).default;
});
console.log(typeof(exported))

export default exported

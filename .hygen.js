const path = require("path");
const inflection = require("inflection");

module.exports = {
  helpers: {
    path: path,
    dir: dir,
    importPath: (name, target, skipName = false) => {
      // console.log('-->name', name, '--->tagert', target);
      // console.log('-->path.dirname(name)', path.dirname(name));
      // console.log('-->dir(name)', dir(name));
      // console.log('-->path.relative(dir(name), target)', path.relative(dir(name), target));
      // console.log(path.relative(dir(name), target).split('\\'));
      // console.log(path.relative(dir(name), target).split('\\').join('/'));
      console.log(
        "-->path.posix.relative(dir(name), target)",
        path.posix.relative(dir(name, skipName), target)
      );
      return path.posix.relative(dir(name, skipName), target);
    },
    name: (name, lowFirstLetter = false) => {
      // Hàm này viết xong dùng h.name để viết hoa
      return inflection.camelize(path.basename(name), lowFirstLetter);
    },
  },
};

//prefix default nó ở thư mục nào
function dir(name, skipName = false, prefix = "src/modules") {
  let result;
  if (skipName) {
    result = path.posix.normalize(
      path.posix.join(prefix, `${path.posix.dirname(name)}`)
    );
  } else {
    result = path.posix.normalize(
      path.posix.join(
        prefix,
        `${path.posix.dirname(name)}/${inflection.camelize(
          path.posix.basename(name),
          true
        )}`
      )
    );
  }
  return result;
}

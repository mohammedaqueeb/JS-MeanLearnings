class promise {
  testPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(3), 1000;
      });
    }).then((result) => {
      return result * 3;
    });
  }
}

module.exports = promise;

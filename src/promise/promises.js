function fetchData(status = true) {
  const res = 'hello'
  const rej = 'some error'
  return new Promise((resolve, reject) => {
    if (status) {
      resolve(res);
    } else {
      reject(rej)
    }
  })
}

module.exports = fetchData
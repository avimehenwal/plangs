// BUGs

function test123() {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  console.log(3);
}

test123()

/**
 * Pyramid of doom
 * Promises are retuen values
 */
function complex() {
  task1().then(result1 => {
    task2(result1).then(result2 => {
      task3(result2).catch(err => {
        errorHandler(err);
      });
    });
  });
}

function complex() {
  return task1().then(result1 => {
    return task2(result1).then(result2 => {
      return task3(result2).catch(err => {
        return errorHandler(err);
      });
    });
  });
}

// refactor 1
function complex() {
  return task1().then(result1 => {
    return task2(result1);
  }).then(result2 => {
    return task3(result2);
  }).catch(err => {
    return errorHandler(err);
  });
}

// refactor 2
async function complex()  {
  try {
    const result1 = await task1();
    const result2 = await task2(result1);
    return task3(result2);
  } catch (err) {
    return errorHandler(err);
  }
}


const map = (array, fn) => {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    output.push(fn(array[i]));
  }
  return output;
};

const filter = (array, fn) => {
  const output = [];
  for (let i = 0; i < array.length; i += 1) {
    const currentElement = array[i];
    if (fn(currentElement)) output.push(currentElement);
  }

  return output;
};

module.exports = { map };

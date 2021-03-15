function toMatrix(list = [], insertedValue) {
  return list.reduce(
    (rows, key, index) =>
      rows.push([key]) && rows[index].unshift(insertedValue) && rows,
    []
  );
}

module.exports = {
  toMatrix,
};

function searchIndex(collection = [], id) {
  const result = collection.findIndex((item) => {
    return Object.values(item).includes(parseInt(id));
  });

  return result;
}

function evaluateIndex(res, id, succesfullSearchProcedure, statement = []) {
  if (id === -1) {
    res.sendStatus(404);
  } else {
    succesfullSearchProcedure;
    res.send(statement);
  }
}

function reduceObject(collection, keys) {
  const result = collection.map((item) =>
    keys.reduce((acc, key) => {
      acc[key] = item[key];
      return acc;
    }, {})
  );
  return result;
}

module.exports = { searchIndex, evaluateIndex };

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

module.exports = { searchIndex, evaluateIndex };

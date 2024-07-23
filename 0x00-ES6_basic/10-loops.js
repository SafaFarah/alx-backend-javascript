export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const value of array) {
    nresult.push(appendString + value);
  }

  return result;
}

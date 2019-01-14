export const errorClear = (action, i, j, state, error) => {
  var index = state.dictionaries.findIndex(item => item.dictionaryName === action.name);
  var copyOfDictionaries = state.dictionaries.slice();
  var targetDictionary = copyOfDictionaries[index];
  targetDictionary.values[action.i][error] = false;
  return {
    ...state,
    dictionaries: [...state.dictionaries.slice(0,index), targetDictionary, ...state.dictionaries.slice(index + 1)]
  }
}

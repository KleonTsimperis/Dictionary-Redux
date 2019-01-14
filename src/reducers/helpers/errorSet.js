export const errorSet = (action, i, j, state, error) => {
  let index = state.dictionaries.findIndex(item => item.dictionaryName === action.name);
  let copyOfDictionaries = state.dictionaries.slice();
  let targetDictionary = copyOfDictionaries[index];
  targetDictionary.values[action.i][error] = true;
  targetDictionary.values[action.j][error] = true;
  return {
    ...state,
    dictionaries: [...state.dictionaries.slice(0,index), targetDictionary, ...state.dictionaries.slice(index + 1)]
  }
}

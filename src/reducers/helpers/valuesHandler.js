export const valuesHandler = (value,action,state) => {
  let index = state.dictionaries.findIndex(dictionary => dictionary.dictionaryName === action.name);
  let copyOfDictionaries = state.dictionaries.slice();
  let targetDictionary = copyOfDictionaries[index];
  let handleProp = targetDictionary.values.map(item => item.id === action.id ? {...item, [value]: value === "isEditingValues" ? !item.isEditingValues : action.text} : item);
  targetDictionary.values = handleProp;
  return {...state, dictionaries: [...state.dictionaries.slice(0, index), targetDictionary, ...state.dictionaries.slice(index + 1)]}
}

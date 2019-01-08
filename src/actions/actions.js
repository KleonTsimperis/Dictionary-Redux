import * as ACTION from './actionTypes';

export const fetchList = list => ({
  type: ACTION.FETCHLIST,
  list
});

function makeActionCreator(type, ...argNames) {
  return function(...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

const ADDDICTIONARY = 'ADDDICTIONARY';
export const addDictionary = makeActionCreator(ADDDICTIONARY);

const HANDLEINPUT = 'HANDLEINPUT';
export const handleInput = makeActionCreator(HANDLEINPUT, 'value', 'name');

// export const addDictionary = () => ({
//   type: ACTION.ADDDICTIONARY
// });

export const closeForm = () => ({
  type: ACTION.CLOSEFORM
});

// export const handleInput = (value,name) => ({
//   type: ACTION.HANDLEINPUT,
//   value,
//   name
// });

export const handleMultiplePairValues = () => ({
  type: ACTION.HANDLEMULTIPLEPAIRVALUES
});

export const dictionarySubmitHandler = () => {
  return (dispatch, getState) => {
    let index = getState().mainReducer.dictionaries.findIndex(item => item.dictionaryName === getState().mainReducer.dictionaryName);
    console.log(index)
    let isError = false;
    const errors = {
      dictionaryNameError:"",
      domainTermError:"",
      rangeTermError:"",
    };
    if(getState().mainReducer.dictionaryName.length === 0){
      isError = true;
      errors.dictionaryNameError = "Field must not be empty";
    }
    if(getState().mainReducer.domainTerm.length < 1){
      isError = true;
      errors.domainTermError =  "Insert more than 2 characters";
    }
    if(getState().mainReducer.rangeTerm.length < 2){
      isError = true;
      errors.rangeTermError = "Insert more than 3 characters";
    }
    if(isError) dispatch({type: ACTION.FORMERRORS, errors});
    if(!isError && index === -1) dispatch({type: ACTION.DICTIONARYSUBMITHANDLER});
    if(!isError && index !== -1) dispatch({type: ACTION.ADDTOEXISTINGDICTIONARY, payload: index});
  }
}

export const showDictionary = id => ({
  type: ACTION.SHOWDICTIONARY,
  id
});

export const removeDictionary = id => ({
  type: ACTION.REMOVEDICTIONARY,
  id
});

export const removeValuePairs = (name, id) => ({
  type: ACTION.REMOVEVALUEPAIRS,
  name,
  id
});

export const addValuesToDictionary = id => ({
  type: ACTION.ADDVALUESTODICTIONARY,
  id
});

export const editValues = (name, id) => ({
  type: ACTION.EDITVALUES,
  name,
  id
});

export const handleValuePairs = (text, name, id, range) => {
  // console.log(text,name,id,range) // the domain/range text, dictionary name, row id,

  return (dispatch, getState) => {
    let index = getState().mainReducer.dictionaries.findIndex(item => item.dictionaryName === name);

    if (range === "domain") dispatch({type: ACTION.HANDLEDOMAIN, text, name, id});
    if (range === "range") dispatch({type: ACTION.HANDLERANGE, text, name, id});
    var dic = getState().mainReducer.dictionaries[index];
    console.log(dic)
  }
}

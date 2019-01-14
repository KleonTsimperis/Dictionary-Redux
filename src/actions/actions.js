import * as ACTION from './actionTypes';
import { createAction } from 'redux-actions';
import { validateAll } from './helpers/validateAll';

export const closeForm                = createAction(ACTION.CLOSEFORM);
export const fetchList                = createAction(ACTION.FETCHLIST);
export const editValues               = createAction(ACTION.EDITVALUES);
export const handleInput              = createAction(ACTION.HANDLEINPUT);
export const addDictionary            = createAction(ACTION.ADDDICTIONARY);
export const removeDictionary         = createAction(ACTION.REMOVEDICTIONARY);
export const normalizeDictionary      = createAction(ACTION.NORMALIZEDICTIONARY);
export const addValuesToDictionary    = createAction(ACTION.ADDVALUESTODICTIONARY);
export const handleMultiplePairValues = createAction(ACTION.HANDLEMULTIPLEPAIRVALUES);

export const removeValuePairs = (name, id) => {
  return (dispatch, getState) => {
    let index = getState().mainReducer.dictionaries.findIndex(item => item.dictionaryName === name);
    let dictionary = getState().mainReducer.dictionaries[index];
    dispatch({type: ACTION.REMOVEVALUEPAIRS, payload:{id,name}})
    validateAll(dictionary.values, name);
  }
}

export const showDictionary = id => {
  return (dispatch, getState) => {
    let index = getState().mainReducer.dictionaries.findIndex(item => item.id === id);
    let dictionary = getState().mainReducer.dictionaries[index];
    let name = dictionary.dictionaryName;
    validateAll(dictionary.values, name);
    dispatch({type: ACTION.SHOWDICTIONARY, payload:id})
  }
}

export const dictionarySubmitHandler = () => {
  return (dispatch, getState) => {
    let index = getState().mainReducer.dictionaries.findIndex(item => item.dictionaryName === getState().mainReducer.dictionaryName);
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
      errors.domainTermError =  "Insert 2 or more characters";
    }
    if(getState().mainReducer.rangeTerm.length < 2){
      isError = true;
      errors.rangeTermError = "Insert 3 or more characters";
    }
    if(isError) dispatch({type: ACTION.FORMERRORS, errors});
    if(!isError && index === -1) dispatch({type: ACTION.DICTIONARYSUBMITHANDLER});
    if(!isError && index !== -1) dispatch({type: ACTION.ADDTOEXISTINGDICTIONARY, payload: index});
  }
}

export const handleValuePairs = (text, name, id, range) => {
  return (dispatch, getState) => {
    let index = getState().mainReducer.dictionaries.findIndex(item => item.dictionaryName === name);
    if (range === "domain") dispatch({type: ACTION.HANDLEDOMAIN, text, name, id});
    if (range === "range") dispatch({type: ACTION.HANDLERANGE, text, name, id});
    let dictionary = getState().mainReducer.dictionaries[index];
    validateAll(dictionary.values, name);
  }
}

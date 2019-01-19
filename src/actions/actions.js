// @flow
import * as ACTION from './actionTypes';
import { createAction } from 'redux-actions';
import { validateAll } from './helpers/validateAll';
import type { Action, Dispatch, GetState, ThunkAction, Dictionary } from '../flow';


export const closeForm                = createAction<Action, Promise<Action>>(ACTION.CLOSEFORM);
export const fetchList                = createAction<Action, Promise<Action>>(ACTION.FETCHLIST);
export const editValues               = createAction<Action, Promise<Action>>(ACTION.EDITVALUES);
export const handleInput              = createAction<Action, Promise<Action>>(ACTION.HANDLEINPUT);
export const addDictionary            = createAction<Action, Promise<Action>>(ACTION.ADDDICTIONARY);
export const removeDictionary         = createAction<Action, Promise<Action>>(ACTION.REMOVEDICTIONARY);
export const normalizeDictionary      = createAction<Action, Promise<Action>>(ACTION.NORMALIZEDICTIONARY);
export const addValuesToDictionary    = createAction<Action, Promise<Action>>(ACTION.ADDVALUESTODICTIONARY);
export const handleMultiplePairValues = createAction<Action, Promise<Action>>(ACTION.HANDLEMULTIPLEPAIRVALUES);

export const removeValuePairs = (name: string, id: string): ThunkAction => {
         return (dispatch: Dispatch, getState: GetState) => {
           console.log(getState())
           let index = getState().mainReducer.dictionaries.findIndex((item) => item.dictionaryName === name);
           let dictionary = getState().mainReducer.dictionaries[index];
           dispatch({
             type: ACTION.REMOVEVALUEPAIRS,
             payload: { id, name }
           });
           validateAll(dictionary.values, name);
         };
       };

export const showDictionary = (id: string): ThunkAction => {
         return (dispatch: Dispatch, getState: GetState) => {
           let index = getState().mainReducer.dictionaries.findIndex(item => item.id === id);
           let dictionary = getState().mainReducer.dictionaries[index];
           let name = dictionary.dictionaryName;
           validateAll(dictionary.values, name);
           dispatch({ type: ACTION.SHOWDICTIONARY, payload: id });
         };
       };

export const dictionarySubmitHandler = (): ThunkAction => {
         return (dispatch: Dispatch, getState: GetState) => {
           let index: number = getState().mainReducer.dictionaries.findIndex(item => item.dictionaryName === getState().mainReducer.dictionaryName);
           if (index !== -1) {
             var dictionary: Dictionary = getState().mainReducer.dictionaries[index];
           }         
           let isError = false;
           const errors = { dictionaryNameError: "", domainTermError: "", rangeTermError: "" };
           console.log(index);
           if (getState().mainReducer.dictionaryName.length === 0) {
             isError = true;
             errors.dictionaryNameError = "Field must not be empty";
           }
           if (getState().mainReducer.domainTerm.length < 1) {
             isError = true;
             errors.domainTermError = "Insert 2 or more characters";
           }
           if (getState().mainReducer.rangeTerm.length < 2) {
             isError = true;
             errors.rangeTermError = "Insert 3 or more characters";
           }
           if (isError) dispatch({ type: ACTION.FORMERRORS, errors });
           if (!isError && index === -1) dispatch({
               type: ACTION.DICTIONARYSUBMITHANDLER
             });
           if (!isError && index !== -1) {
             dispatch({
               type: ACTION.ADDTOEXISTINGDICTIONARY,
               payload: index
             });
             //$FlowFixMe
             validateAll(dictionary.values, dictionary.dictionaryName);
           }
         };
       };

export const handleValuePairs = (text: string | number, name: string | number, id: string, range: string) => {
  return (dispatch: Dispatch, getState: GetState) => {
    let index = getState().mainReducer.dictionaries.findIndex(item => item.dictionaryName === name);
    if (range === "domain") dispatch({type: ACTION.HANDLEDOMAIN, text, name, id});
    if (range === "range") dispatch({type: ACTION.HANDLERANGE, text, name, id});
    let dictionary = getState().mainReducer.dictionaries[index];
    validateAll(dictionary.values, name);
  }
}

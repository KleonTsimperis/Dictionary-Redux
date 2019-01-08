import * as ACTION from '../actions/actionTypes';
import uuid from 'uuid';

const initialState = {
      list:[],
      dictionaries:[],
      openForm:false,
      dictionaryName:"",
      dictionaryNameError:"",
      domainTerm:"",
      domainTermError:"",
      rangeTerm:"",
      rangeTermError:"",
      snackBarOpen:false,
      multiplePairValues:true,
      isAddingValuesAfterCreation:false,
      editingKeyValue:[],
      snackBarMessage:""
}

const valuesHandler = (value,action,state) => {
  var index = state.dictionaries.findIndex(dictionary => dictionary.dictionaryName === action.name);
  var copyOfDictionaries = state.dictionaries.slice();
  var targetDictionary = copyOfDictionaries[index];
  var handleProp = targetDictionary.values.map(item => item.id === action.id ? {...item, [value]: value === "isEditingValues" ? !item.isEditingValues : action.text} : item);
  targetDictionary.values = handleProp;
  return {...state, dictionaries: [...state.dictionaries.slice(0, index), targetDictionary, ...state.dictionaries.slice(index + 1)]}
}

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case ACTION.FETCHLIST:
      return {...state, list: [action.list]}
    case ACTION.ADDDICTIONARY:
      return {
        ...state,
        openForm:true,
        dictionaryNameError:"",
        domainTermError:"",
        rangeTermError:""
      }
    case ACTION.CLOSEFORM:
      return {...state, openForm:false}
    case ACTION.HANDLEINPUT:
      return {...state, [action.name]: action.value}
    case ACTION.HANDLEMULTIPLEPAIRVALUES:
      return {...state, multiplePairValues:!state.multiplePairValues }
    case ACTION.DICTIONARYSUBMITHANDLER:
      return {
        ...state,
        openForm: state.multiplePairValues ? true : false,
        domainTerm:"",
        rangeTerm:"",
        dictionaries: [{
           dictionaryName:state.dictionaryName,
           isShowing:false,
           id:Date.now(),
           values:[{
             id:uuid(),
             domainTerm: state.domainTerm,
             rangeTerm: state.rangeTerm,
             isEditingValues: false,
             error1: false,
             error2: false,
             error3: false,
             error4: false
           }]
         },
         ...state.dictionaries
       ]
      }
    case ACTION.FORMERRORS:
      return {
        ...state,
        dictionaryNameError:action.errors.dictionaryNameError,
        domainTermError:action.errors.domainTermError,
        rangeTermError:action.errors.rangeTermError
      }
    case ACTION.ADDTOEXISTINGDICTIONARY:
      let index = action.payload;
      let copiedDictionary = state.dictionaries.slice();
      let updatedDictionary = copiedDictionary[index];
      updatedDictionary.values.push({
        id:uuid(),
        domainTerm: state.domainTerm,
        rangeTerm: state.rangeTerm,
        isEditingValues: false,
        error1: false,
        error2: false,
        error3: false,
        error4: false
      });
      return {
        ...state,
        openForm: state.multiplePairValues ? true : false,
        domainTerm:"",
        rangeTerm:"",
        dictionaries:[
          ...state.dictionaries.slice(0, index),
          updatedDictionary,
          ...state.dictionaries.slice(index + 1)
        ]
      }
    case ACTION.SHOWDICTIONARY:
      return {
        ...state,
        dictionaries: state.dictionaries.map(dictionary => {
          if (dictionary.id === action.id){
            return { ...dictionary, isShowing: true }
          }
          return { ...dictionary, isShowing: false }
        })
      }
    case ACTION.REMOVEDICTIONARY:
      return { ...state, dictionaries: state.dictionaries.filter(dictionary => dictionary.id !== action.id)}
    case ACTION.REMOVEVALUEPAIRS:
      var index1 = state.dictionaries.findIndex(dictionary => dictionary.dictionaryName === action.name);
      var copyOfDictionaries = state.dictionaries.slice();
      var targetDictionary = copyOfDictionaries[index1];
      var filteredValues = targetDictionary.values.filter(item => item.id !== action.id);
      targetDictionary.values = filteredValues;
      return {
        ...state,
        dictionaries: [...state.dictionaries.slice(0, index1), targetDictionary, ...state.dictionaries.slice(index1 + 1)]
      }
    case ACTION.ADDVALUESTODICTIONARY:
      return {
        ...state,
        isAddingValuesAfterCreation:true,
        openForm:true,
      }
    case ACTION.EDITVALUES:
      return valuesHandler('isEditingValues', action, state);
    case ACTION.HANDLEDOMAIN:
      return valuesHandler('domainTerm', action, state);
    case ACTION.HANDLERANGE:
      return valuesHandler('rangeTerm', action, state);
    default:
      return state
  }
}


export default mainReducer;

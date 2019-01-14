import * as ACTION from '../actions/actionTypes';
import uuid from 'uuid';
import { valuesHandler } from './helpers/valuesHandler';
import { errorSet } from './helpers/errorSet';
import { errorClear } from './helpers/errorClear';

const initialState = {
      list:[],
      dictionaries:[
        {
           dictionaryName:'Dictionary',
           isShowing:false,
           id:'a',
           values:[
             {
             id:'12^$^&',
             domainTerm: '111',
             rangeTerm: 'ddd',
             isEditingValues: false,
             error1: false,
             error2: false,
             error3: false,
             error4: false
           },
           {
           id:'*&^&!$$',
           domainTerm: 'ddd',
           rangeTerm: '111',
           isEditingValues: false,
           error1: false,
           error2: false,
           error3: false,
           error4: false
         },
         {
         id:'1233222',
         domainTerm: '111',
         rangeTerm: 'dd',
         isEditingValues: false,
         error1: false,
         error2: false,
         error3: false,
         error4: false
       },
         ]

    }],
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
      snackBarMessage:""
}

const mainReducer = (state = initialState, action) => {
  switch(action.type){
    case ACTION.FETCHLIST:
      return {...state, list: action.payload}
    case ACTION.NORMALIZEDICTIONARY:
      let findDictionary = state.dictionaries.findIndex(item => item.id === action.payload);
      let copyDictionary = state.dictionaries[findDictionary].values.map(item => ({domainTerm: item.domainTerm, rangeTerm: item.rangeTerm}));
      let copyList = state.list.slice();
      for (let i = 0; i < copyDictionary.length; i++){
        for (let j = 0; j < copyList.length; j++){
          if (copyDictionary[i].domainTerm === copyList[j].product){
              copyList[j].color = copyDictionary[i].rangeTerm
          }
        }
      }
      return {
        ...state,
        list:copyList
      }

    case ACTION.ADDDICTIONARY:
      return {
        ...state,
        openForm:true,
        isAddingValuesAfterCreation:false,
        dictionaryNameError:"",
        domainTermError:"",
        rangeTermError:""
      }
    case ACTION.CLOSEFORM:
      return {...state, openForm:false}
    case ACTION.HANDLEINPUT:
      return {...state, [action.payload.name]: action.payload.value}
    case ACTION.HANDLEMULTIPLEPAIRVALUES:
      return {...state, multiplePairValues:!state.multiplePairValues }
    case ACTION.DICTIONARYSUBMITHANDLER:
      return {
        ...state,
        openForm: state.multiplePairValues ? true : false,
        dictionaryNameError:"",
        domainTerm:"",
        domainTermError:"",
        rangeTerm:"",
        rangeTermError:"",
        dictionaries: [{
           dictionaryName:state.dictionaryName,
           isShowing:false,
           id:uuid(),
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
        dictionaryNameError:"",
        domainTermError:"",
        rangeTermError:"",
        dictionaries:[
          ...state.dictionaries.slice(0, index),
          updatedDictionary,
          ...state.dictionaries.slice(index + 1)
        ]
      }
    case ACTION.SHOWDICTIONARY:
      return {
        ...state,
        dictionaries: state.dictionaries.map(dictionary => dictionary.id === action.payload ? { ...dictionary, isShowing: true } : { ...dictionary, isShowing: false })
      }
    case ACTION.REMOVEDICTIONARY:
      return { ...state, dictionaries: state.dictionaries.filter(dictionary => dictionary.id !== action.payload)}
    case ACTION.REMOVEVALUEPAIRS:
      var index1 = state.dictionaries.findIndex(dictionary => dictionary.dictionaryName === action.payload.name);
      var copyOfDictionaries = state.dictionaries.slice();
      var targetDictionary = copyOfDictionaries[index1];
      console.log(index1)
      var filteredValues = targetDictionary.values.filter(item => item.id !== action.payload.id);
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
      return valuesHandler('isEditingValues', action.payload, state);
    case ACTION.HANDLEDOMAIN:
      return valuesHandler('domainTerm', action, state);
    case ACTION.HANDLERANGE:
      return valuesHandler('rangeTerm', action, state);
    case ACTION.ERROR1:
      return errorSet(action, action.i, action.j, state, "error1");
    case ACTION.ERROR1CLEAR:
      return errorClear(action, action.i, action.j, state, "error1");
    case ACTION.ERROR2:
      return errorSet(action, action.i, action.j, state, "error2");
    case ACTION.ERROR2CLEAR:
      return errorClear(action, action.i, action.j, state, "error2");
    case ACTION.ERROR3:
      return errorSet(action, action.i, action.j, state, "error3");
    case ACTION.ERROR3CLEAR:
      return errorClear(action, action.i, action.j, state, "error3");
    case ACTION.ERROR4:
      return errorSet(action, action.i, action.j, state, "error4");
    case ACTION.ERROR4CLEAR:
      return errorClear(action, action.i, action.j, state, "error4");
    default:
      return state
  }
}


export default mainReducer;

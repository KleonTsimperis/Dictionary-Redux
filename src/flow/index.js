// @flow

export interface List {
  list: Array<{
    id: number,
    product: string,
    color: string,
    price: string
  }>;
}

export interface DictionaryValues {
  values: Array<{
    id: string,
    domainTerm: string | number,
    rangeTerm: string | number,
    isEditingValues: boolean,
    error1: boolean,
    error2: boolean,
    error3: boolean,
    error4: boolean
  }>;
}

export interface Dictionary {
    dictionaryName: string | number,
    id: string,
    isShowing: boolean,
    values: DictionaryValues
}

export interface Dictionaries {
  dictionaries: Array<Dictionary>
}

export interface State {
  mainReducer: {
    list: Array<List>;
    dictionaries: Array<Dictionary>;
    openForm: boolean;
    dictionaryName: string;
    dictionaryNameError: string;
    domainTerm: string;
    domainTermError: string;
    rangeTerm: string;
    rangeTermError: string;
    multiplePairValues: boolean;
    isAddingValuesAfterCreation: boolean;
  }
  
}

export type P = Array<List> |
                Class<{}> |
                { name: string | number, id: string } |
                { value: string | number, name: string | number } 

 


export type Action = 
  | {type: "FETCHLIST", payload?: Array<List>}
  | {type: "CLOSEFORM", payload?: Class<{}>}
  | {type: "ADDDICTIONARY", payload?: Class<{}>}
  | {type: "EDITVALUES", payload?: {name: string | number, id: string}}
  | {type: "HANDLEINPUT", payload?: {value: string | number, name: string | number}}
  | {type: "REMOVEDICTIONARY", payload?: string}
  | {type: "NORMALIZEDICTIONARY", payload?: string}
  | {type: "ADDVALUESTODICTIONARY", payload?: string}
  | {type: "HANDLEMULTIPLEPAIRVALUES"}


/* eslint-disable no-use-before-define */
 export type GetState = () => State;
 export type PromiseAction = Promise<Action>;
 export type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;
 export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
 /* eslint-enable no-use-before-define */
 



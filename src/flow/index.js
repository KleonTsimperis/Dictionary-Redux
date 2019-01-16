export interface DictionaryValues {
  values: Array<{
    id: string,
    domainTerm: string | number,
    rangeTerm: string | number,
    isEditingValues: boolean,
    error1: boolean,
    error2: boolean,
    error3: boolean,
    error4: boolean,
  }>
}

export interface State {
  dictionaries: Array<{
    dictionaryName: string | number,
    id: string,
    isShowing: boolean,
    values: DictionaryValues
  }>
}

export interface List {
  list: Array<{
    id: number,
    product: string,
    color: string,
    price: string
  }>
}

import { createSelector } from 'reselect';

const dictionaries = state => state.mainReducer.dictionaries;
const list = state => state.mainReducer.list;

export const makeGetDictionaries = () => {
  return createSelector(
    [dictionaries],
    (dictionaries) => dictionaries
  );
}

export const makeGetList = () => {
  return createSelector(
    [list],
    (list) => list
  );
}

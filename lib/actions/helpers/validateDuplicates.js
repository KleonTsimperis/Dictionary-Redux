import store from '../../store';
import * as ACTION from '../actionTypes';

export const validateDuplicates = (array, name) => {
  // Adding Error
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].domainTerm === array[j].domainTerm && i !== j && array[i].rangeTerm === array[j].rangeTerm && i !== j) {
        store.dispatch({ type: ACTION.ERROR1, name, i, j });
      }
    }
  }

  // Removing Error
  for (var i = 0; i < array.length; i++) {
    var hasDuplicate = false;
    for (var j = 0; j < array.length; j++) {
      if (array[i].domainTerm === array[j].domainTerm && i !== j && array[i].rangeTerm === array[j].rangeTerm && i !== j) {
        hasDuplicate = true;
      }
    }
    if (!hasDuplicate || array.length <= 1) store.dispatch({ type: ACTION.ERROR1CLEAR, name, i, j });
  }
};
import store from '../../store';
import * as ACTION from '../actionTypes';

export const validateForks = (array, name) => {
  // Adding Error
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].domainTerm === array[j].domainTerm && i !== j) {
        store.dispatch({ type: ACTION.ERROR2, name, i, j });
      }
    }
  }

  // Removing Error
  for (var i = 0; i < array.length; i++) {
    var hasFork = false;
    for (var j = 0; j < array.length; j++) {
      if (array[i].domainTerm === array[j].domainTerm && i !== j) {
        hasFork = true;
      }
    }
    if (!hasFork || array.length <= 1) store.dispatch({ type: ACTION.ERROR2CLEAR, name, i, j });
  }
};
import store from '../../store';
import * as ACTION from '../actionTypes';

export const validateChains = (array, name) => {
  // Adding Error
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if ((array[i].rangeTerm === array[j].domainTerm || array[j].domainTerm === array[i].rangeTerm) && i !== j) {
        store.dispatch({ type: ACTION.ERROR3, name, i, j });
      }
    }
  }

  // Removing Error
  for (let i = 0; i < array.length; i++) {
    let unique = array.every(item => item.domainTerm !== array[i].rangeTerm && item.rangeTerm !== array[i].domainTerm);
    if (unique || array.length <= 1) {
      store.dispatch({ type: ACTION.ERROR3CLEAR, name, i });
    }
  }
}; //End
import store from '../../store';
import * as ACTION from '../actionTypes';

export const validateCycles = (array, name) => {
  // Adding Error
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].domainTerm === array[j].rangeTerm && array[i].rangeTerm === array[j].domainTerm && i !== j) {
        store.dispatch({ type: ACTION.ERROR4, name, i, j });
      }
    }
  }

  // Removing error
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].domainTerm === array[j].rangeTerm && array[i].rangeTerm !== array[j].domainTerm && i !== j || array[i].rangeTerm === array[j].domainTerm && array[i].domainTerm !== array[j].rangeTerm && i !== j || array[i].rangeTerm !== array[j].domainTerm && array[i].domainTerm === array[j].rangeTerm && i !== j || array[i].rangeTerm !== array[j].domainTerm && array[i].domainTerm === array[j].rangeTerm && i !== j || array[i].rangeTerm === array[j].domainTerm || array[i].rangeTerm !== array[j].domainTerm || array.length <= 1) {
        store.dispatch({ type: ACTION.ERROR4CLEAR, name, i, j });
      }
    }
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].domainTerm === array[j].rangeTerm && array[i].rangeTerm === array[j].domainTerm && i !== j) {
        store.dispatch({ type: ACTION.ERROR4, name, i, j });
      }
    }
  }
};
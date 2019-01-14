import {validateForks} from './validateForks';
import {validateDuplicates} from './validateDuplicates';
import {validateChains} from './validateChains';
import {validateCycles} from './validateCycles';

export const validateAll = (array,name) => {
  validateCycles(array,name);
  validateDuplicates(array,name);
  validateForks(array,name);
  validateChains(array,name);
}

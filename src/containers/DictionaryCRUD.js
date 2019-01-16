import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { styles } from './styles/dictionarycrud';
import { connect } from 'react-redux';
import { showDictionary, removeDictionary, addValuesToDictionary, normalizeDictionary} from '../actions/actions';
import { makeGetDictionaries } from '../selectors';
import { State, DictionaryValues } from '../flow';

type Props = {
  showDictionary: () => State,
  addValuesToDictionary: () => State,
  normalizeDictionary: () => State,
  removeDictionary: () => State,
  values: DictionaryValues
}

const DictionaryCRUD = (props: Props) => {
  const { classes } = props;
  return(
    <li className={classes.container}>
      <h3 className={classes.item1}>{props.dictionaryName}</h3>
      <Button className={classes.item2} variant="contained" color="primary" size="large" onClick={()=>props.showDictionary(props.id)}>
          Display
      </Button>
      <Button className={classes.item2} variant="contained" color="primary" size="large" onClick={()=>props.addValuesToDictionary(props.id)}>
          Add Values
      </Button>
      <Button className={classes.item2} disabled={!props.values.every(entry => entry.error1 === false && entry.error2 === false && entry.error3 === false && entry.error4 === false)} variant="contained" color="primary" size="large" onClick={()=>props.normalizeDictionary(props.id)}>
          Normalize
      </Button>
      <Button className={classes.item3} variant="contained" color="secondary" size="large" onClick={()=>props.removeDictionary(props.id)}>
          <DeleteIcon className={classes.item4} />
      </Button>
    </li>
  )
};


const makeMapStateToProps = (): State => {
  const getDictionaries = makeGetDictionaries();
  const mapStateToProps = (state: State): State => {
    return {
      dictionaries: getDictionaries(state)
    }
  }
  return mapStateToProps;
}

const mapDispatchToProps = dispatch => ({
  showDictionary: id => dispatch(showDictionary(id)),
  removeDictionary: id => dispatch(removeDictionary(id)),
  addValuesToDictionary: id => dispatch(addValuesToDictionary(id)),
  normalizeDictionary: id => dispatch(normalizeDictionary(id))
});

export default connect(makeMapStateToProps, mapDispatchToProps)(withStyles(styles)(DictionaryCRUD));

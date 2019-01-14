import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { styles } from './styles/dictionarycrud';
import { connect } from 'react-redux';
import { showDictionary, removeDictionary, addValuesToDictionary, normalizeDictionary} from '../actions/actions';
import { makeGetDictionaries } from '../selectors';

const DictionaryCRUD = props => {
  const permitValidation = props => props.values.every(entry => entry.error1 === false && entry.error2 === false && entry.error3 === false && entry.error4 === false);
  const permit = permitValidation; // Note: workaround to remove warning. Inserting disabled={!props.permitValidation} at line 24 will throw a warning of unused variable
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
      <Button className={classes.item2} disabled={!permit} variant="contained" color="primary" size="large" onClick={()=>props.normalizeDictionary(props.id)}>
          Normalize
      </Button>
      <Button className={classes.item3} variant="contained" color="secondary" size="large" onClick={()=>props.removeDictionary(props.id)}>
          <DeleteIcon className={classes.item4} />
      </Button>
    </li>
  )
};


DictionaryCRUD.propTypes = {
  classes: PropTypes.object,
  showDictionary: PropTypes.func,
  addValuesToDictionary: PropTypes.func,
  normalizeDictionary: PropTypes.func,
  removeDictionary: PropTypes.func
};

const makeMapStateToProps = () => {
  const getDictionaries = makeGetDictionaries();
  const mapStateToProps = state => {
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

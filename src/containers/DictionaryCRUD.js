import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { styles } from './styles/dictionarycrud';
import { connect } from 'react-redux';
import { showDictionary, removeDictionary, addValuesToDictionary} from '../actions/actions';

const DictionaryCRUD = props => {
  const { classes } = props;
  return(
    <li className={classes.container}>
      <h3 className={classes.item1}>{props.dictionaryName}</h3>
      <Button className={classes.item2} variant="contained" color="primary" size="small" onClick={()=>props.showDictionary(props.id)}>
          Display
      </Button>
      <Button className={classes.item2} variant="contained" color="primary" size="small" onClick={()=>props.addValuesToDictionary(props.id)}>
          Add Values
      </Button>
      <Button className={classes.item2} variant="contained" color="primary" size="small" onClick={props.normalizeDictionary}>
          Normalize
      </Button>
      <Button className={classes.item3} variant="contained" color="secondary" size="small" onClick={()=>props.removeDictionary(props.id)}>
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

const mapDispatchToProps = dispatch => ({
  showDictionary: id => dispatch(showDictionary(id)),
  removeDictionary: id => dispatch(removeDictionary(id)),
  addValuesToDictionary: id => dispatch(addValuesToDictionary(id))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(DictionaryCRUD));

import React from 'react';
import PropTypes from 'prop-types';
import ValuePairsError from '../components/ValuePairsError';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';
import { connect } from 'react-redux';
import { removeValuePairs, editValues, handleValuePairs } from '../actions/actions';

const ValuePairs = props => {
  return(
    <tr key={props.id}>
      <td>{props.isEditingValues? <input type="text" value={props.domainTerm} onChange={e => props.handleValuePairs(e.target.value, props.dictionaryName, props.id, "domain")}/> : <span>{props.domainTerm}</span>}</td>
      <td>{props.isEditingValues? <input type="text" value={props.rangeTerm} onChange={e => props.handleValuePairs(e.target.value, props.dictionaryName, props.id, "range")}/> : <span>{props.rangeTerm}</span>}</td>
      <td>{props.error1? <ValuePairsError value={1}/>:''}</td>
      <td>{props.error2? <ValuePairsError value={2}/>:''}</td>
      <td>{props.error3? <ValuePairsError value={3}/>:''}</td>
      <td>{props.error4? <ValuePairsError value={4}/>:''}</td>
    <td>
      <IconButton  aria-label="Delete" onClick={() => props.editValues(props.dictionaryName, props.id)} color="primary">
        {props.isEditingValues ? <Save />:<Edit />}
      </IconButton>
    </td>
    <td>
      <IconButton  aria-label="Delete" onClick={() => props.removeValuePairs(props.dictionaryName, props.id)} color="secondary">
        <DeleteIcon />
      </IconButton>
    </td>
    </tr>
  )
}

ValuePairs.propTypes = {
  id: PropTypes.string,
  isEditingValues: PropTypes.bool,
  editingDomainTerm: PropTypes.string,
  editingRangeTerm: PropTypes.string,
  inputeDomain: PropTypes.func,
  inputeRange: PropTypes.func,
  domainTerm: PropTypes.string,
  rangeTerm: PropTypes.string,
  error1: PropTypes.bool,
  error2: PropTypes.bool,
  error3: PropTypes.bool,
  error4: PropTypes.bool
};

const mapDispatchToProps = dispatch => ({
  removeValuePairs: (name, id) => dispatch(removeValuePairs(name, id)),
  editValues: (name, id) => dispatch(editValues({name, id})),
  handleValuePairs: (text, name, id, range) => dispatch(handleValuePairs(text, name, id, range))
});

export default connect(null,mapDispatchToProps)(ValuePairs);

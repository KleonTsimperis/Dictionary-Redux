import React from 'react';
import ValuePairsError from '../components/ValuePairsError';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';
import { connect } from 'react-redux';
import { removeValuePairs, editValues, handleValuePairs } from '../actions/actions';
import '../components/Components.css';

type Props = {
  isEditingValues: boolean,
  error1: boolean,
  error2: boolean,
  error3: boolean,
  error4: boolean,
  handleValuePairs: () => void,
  editValues: () => void,
  removeValuePairs: () => void,
}

const ValuePairs = (props: Props) => {
  return(
    <tr key={props.id}>
      <td>{props.isEditingValues? <input className="indent" type="text" value={props.domainTerm} onChange={e => props.handleValuePairs(e.target.value, props.dictionaryName, props.id, "domain")}/> : <span>{props.domainTerm}</span>}</td>
      <td>{props.isEditingValues? <input className="indent" type="text" value={props.rangeTerm} onChange={e => props.handleValuePairs(e.target.value, props.dictionaryName, props.id, "range")}/> : <span>{props.rangeTerm}</span>}</td>
      <td>{props.error1? <ValuePairsError value={1}/>:''}</td>
      <td>{props.error2? <ValuePairsError value={2}/>:''}</td>
      <td>{props.error3? <ValuePairsError value={3}/>:''}</td>
      <td>{props.error4? <ValuePairsError value={4}/>:''}</td>
    <td style={{marginLeft:"20px"}}>
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

const mapDispatchToProps = dispatch => ({
  removeValuePairs: (name, id) => dispatch(removeValuePairs(name, id)),
  editValues: (name, id) => dispatch(editValues({name, id})),
  handleValuePairs: (text, name, id, range) => dispatch(handleValuePairs(text, name, id, range))
});

export default connect(null,mapDispatchToProps)(ValuePairs);

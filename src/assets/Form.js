import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../components/Components.css';
import { connect } from 'react-redux';
import { handleInput, dictionarySubmitHandler, handleMultiplePairValues } from '../actions/actions';

const Form = props =>

  <form onSubmit={props.dictionarySubmitHandler} autoComplete="off">
    <fieldset>
      <label><strong>Dictionary Name</strong></label>
      {props.formState.isAddingValuesAfterCreation ? <h2>{props.formState.dictionaryName}</h2> :
      <input type="text" id="name" name="dictionaryName" value={props.formState.dictionaryName} onChange={e => props.handleInput(e.target.value, e.target.name)} autoFocus/>}
      <label className="errorLabel" style={{color:"red"}}>{props.formState.dictionaryName === "" ? props.formState.dictionaryNameError : ""}</label>

      <label htmlFor="email">Domain Term</label>
      <input type="text" id="email" name="domainTerm" value={props.formState.domainTerm} onChange={e => props.handleInput(e.target.value, e.target.name)}/>
      <label className="errorLabel" style={{color:"red"}}>{props.formState.domainTerm.length <= 1 ? props.formState.domainTermError : ""}</label>

      <label htmlFor="password">Range Term</label>
      <input type="text" id="password" name="rangeTerm" value={props.formState.rangeTerm} onChange={e => props.handleInput(e.target.value, e.target.name)}/>
      <label className="errorLabel" style={{color:"red"}}>{props.formState.rangeTerm.length <= 2 ? props.formState.rangeTermError : ""}</label>

      <label>
        Add multiple domain/range pairs
      </label>
      <Checkbox
          checked={props.formState.multiplePairValues}
          onChange={props.handleMultiplePairValues}
          value="checkedF"
          color="primary"
          className="balance"
        />
      <Button style={{marginTop: "1rem"}} variant="contained" color="primary" type="submit" onSubmit={props.dictionarySubmitHandler} className="submit">
          Submit
      </Button>
    </fieldset>
  </form>;

  Form.propTypes = {
    dictionarySubmitHandler: PropTypes.func,
    dictionaryName: PropTypes.string,
    domainTerm: PropTypes.string,
    rangeTerm: PropTypes.string,
    dictionaryNameError: PropTypes.string,
    domainTermError: PropTypes.string,
    rangeTermError: PropTypes.string,
    handleInput: PropTypes.func,
    multiplePairValues: PropTypes.bool,
    handleMultiplePairValues: PropTypes.func
  };

const mapStateToProps = state => ({
  formState: state.mainReducer
});

const mapDispatchToProps = dispatch => ({
  handleInput: (value,name) => dispatch(handleInput(value,name)),
  handleMultiplePairValues: () => dispatch(handleMultiplePairValues()),
  dictionarySubmitHandler: e => {
    e.preventDefault();
    dispatch(dictionarySubmitHandler())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);

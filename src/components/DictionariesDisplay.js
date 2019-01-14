import React from 'react';
import PropTypes from 'prop-types';
import DictionaryPairValues from './DictionaryPairValues';
import './Components.css';
import { connect } from 'react-redux';
import { makeGetDictionaries } from '../selectors';

const DictionariesDisplay = props =>
  <div className="displayDictionary">
    {props.dictionaries.filter(dictionary => dictionary.isShowing===true).map(dictionary =>
      <DictionaryPairValues key={dictionary.id} {...dictionary}/>
    )}
  </div>;

DictionariesDisplay.propTypes = {
  dictionaries: PropTypes.array.isRequired,

};

const makeMapStateToProps = () => {
  const getDictionaries = makeGetDictionaries();
  const mapStateToProps = state => {
    return {
      dictionaries:getDictionaries(state)
    }
  }
  return mapStateToProps;
}

export default connect(makeMapStateToProps)(DictionariesDisplay);

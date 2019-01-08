import React from 'react';
import PropTypes from 'prop-types';
import DictionaryPairValues from './DictionaryPairValues';
import './Components.css';
import { connect } from 'react-redux';



const DictionariesDisplay = props =>
  <div className="displayDictionary">
    {props.dictionaries.filter(dictionary => dictionary.isShowing===true).map(dictionary =>
      <DictionaryPairValues key={dictionary.id} {...dictionary}/>
    )}
  </div>;

DictionariesDisplay.propTypes = {
  dictionaries: PropTypes.array.isRequired,

};

const mapStateToProps = state => ({
  dictionaries: state.mainReducer.dictionaries
});

export default connect(mapStateToProps)(DictionariesDisplay);

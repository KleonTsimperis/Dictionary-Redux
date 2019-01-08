import React from 'react';
import PropTypes from 'prop-types';
import DictionaryCRUD from '../containers/DictionaryCRUD';
import './Components.css';
import { connect } from 'react-redux';

const ListOfDictionaries = props =>
  <ul>
    {props.dictionaries.map(dictionary =>
      <DictionaryCRUD key={dictionary.id} {...dictionary} />
    )}
  </ul>;

ListOfDictionaries.propTypes = {
  dictionaries: PropTypes.array
};

const mapStateToProps = state => ({
  dictionaries: state.mainReducer.dictionaries
});

export default connect(mapStateToProps)(ListOfDictionaries);

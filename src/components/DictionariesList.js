import React from 'react';
import PropTypes from 'prop-types';
import DictionaryCRUD from '../containers/DictionaryCRUD';
import './Components.css';
import { connect } from 'react-redux';
import { makeGetDictionaries } from '../selectors';

const ListOfDictionaries = props =>
  <ul>
    {props.dictionaries.map(dictionary =>
      <DictionaryCRUD key={dictionary.id} {...dictionary} />
    )}
  </ul>;

ListOfDictionaries.propTypes = {
  dictionaries: PropTypes.array
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

export default connect(makeMapStateToProps)(ListOfDictionaries);

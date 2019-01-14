// @flow
import React from 'react';
import DictionaryCRUD from '../containers/DictionaryCRUD';
import './Components.css';
import { connect } from 'react-redux';
import { makeGetDictionaries } from '../selectors';

type Props = {
  dictionaries: Array<any>
}

type State = {
  dictionaries: Array<any>
}

const ListOfDictionaries = ({dictionaries}: Props) =>
  <ul>
    {dictionaries.map(dictionary =>
      <DictionaryCRUD key={dictionary.id} {...dictionary} />
    )}
  </ul>;


const makeMapStateToProps = (): function => {
  const getDictionaries: function = makeGetDictionaries();
  const mapStateToProps: function = (state): State => {
    return {
      dictionaries:getDictionaries(state)
    }
  }
  return mapStateToProps;
}

export default connect(makeMapStateToProps)(ListOfDictionaries);

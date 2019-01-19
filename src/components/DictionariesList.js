
import React from 'react';
import DictionaryCRUD from '../containers/DictionaryCRUD';
import './Components.css';
import { connect } from 'react-redux';
import { makeGetDictionaries } from '../selectors';
import { State, Dictionaries } from '../flow';


const ListOfDictionaries = ({ dictionaries }: Dictionaries) => (
  <ul>
    {dictionaries.map(dictionary => (
      <DictionaryCRUD key={dictionary.id} {...dictionary} />
    ))}
  </ul>
);


const makeMapStateToProps = (): State => {
  const getDictionaries = makeGetDictionaries();
  const mapStateToProps = (state: State): State => {
    return {
      dictionaries:getDictionaries(state)
    }
  }
  return mapStateToProps;
}

export default connect(makeMapStateToProps)(ListOfDictionaries);

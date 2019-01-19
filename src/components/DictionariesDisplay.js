
import React from 'react';
import DictionaryPairValues from './DictionaryPairValues';
import './Components.css';
import { connect } from 'react-redux';
import { makeGetDictionaries } from '../selectors';
import { State, Dictionaries } from '../flow';


const DictionariesDisplay = ({ dictionaries }: Dictionaries) => (
  <div className="displayDictionary">
    {dictionaries
      .filter(dictionary => dictionary.isShowing === true)
      .map(dictionary => (
        <DictionaryPairValues key={dictionary.id} {...dictionary} />
      ))}
  </div>
);


const makeMapStateToProps = (): State => {
  const getDictionaries = makeGetDictionaries();
  const mapStateToProps = (state: State): Dictionaries => {
    return {
      dictionaries:getDictionaries(state)
    }
  }
  return mapStateToProps;
}


export default connect(makeMapStateToProps)(DictionariesDisplay);

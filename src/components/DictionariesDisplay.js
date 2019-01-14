// @flow
import React from 'react';
import DictionaryPairValues from './DictionaryPairValues';
import './Components.css';
import { connect } from 'react-redux';
import { makeGetDictionaries } from '../selectors';

type Props = {
  dictionaries: Array<any>
}

type State = {
  dictionaries: Array<any>
}

const DictionariesDisplay = ({dictionaries}: Props) =>
  <div className="displayDictionary">
    {dictionaries.filter(dictionary => dictionary.isShowing===true).map(dictionary =>
      <DictionaryPairValues key={dictionary.id} {...dictionary}/>
    )}
  </div>




const makeMapStateToProps = (): function => {
  const getDictionaries: function = makeGetDictionaries();
  const mapStateToProps: function = (state): State => {
    return {
      dictionaries:getDictionaries(state)
    }
  }
  return mapStateToProps;
}


export default connect(makeMapStateToProps)(DictionariesDisplay);

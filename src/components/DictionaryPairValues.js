
import React from 'react';
import ValuePairs from '../containers/ValuePairs';
import './Components.css';
import { DictionaryValues } from '../flow';

type Props = {
  dictionaryName: string | number,
  values: DictionaryValues
}

const DictionaryPairValues = ({dictionaryName, values}: Props) =>
  <table>
    <thead>
      <tr>
        <th colSpan="8" className="text-center">Dictionary {dictionaryName} properties</th>
      </tr>
      <tr>
        <th>Domain Term</th>
        <th>Range Term</th>
        <th colSpan="4" style={{width:"10%"}}>Errors</th>
        <th colSpan="2" style={{width:"10%"}}>Actions</th>
      </tr>
    </thead>
    <tbody>
    {values.map(item =>
      <ValuePairs key={item.id} {...item} dictionaryName={dictionaryName}/>
    )}
    </tbody>
  </table>

export default DictionaryPairValues;

import React from 'react';
import PropTypes from 'prop-types';
import ValuePairs from '../containers/ValuePairs';

const DictionaryPairValues = props => {
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan="8" className="text-center">Dictionary {props.dictionaryName} properties</th>
          </tr>
          <tr>
            <th>Domain Term</th>
            <th>Range Term</th>
            <th colSpan="4" style={{width:"10%"}}>Errors</th>
            <th colSpan="2" style={{width:"10%"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
        {props.values.map(item =>
          <ValuePairs key={item.id} {...item} dictionaryName={props.dictionaryName}/>
        )}
        </tbody>
      </table>
    </div>
  );
};

DictionaryPairValues.propTypes = {
  dictionaryName: PropTypes.string,
  values: PropTypes.array,
  editingDomainTerm: PropTypes.string,
  editingRangeTerm: PropTypes.string,
  editValues: PropTypes.func,
  inpute: PropTypes.func,
  removeValuePairs: PropTypes.func
};

export default DictionaryPairValues;

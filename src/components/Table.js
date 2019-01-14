import React from 'react';
import PropTypes from 'prop-types';
import './Components.css';
import { connect } from 'react-redux';
import Spinner from '../assets/spinner';
import { makeGetList } from '../selectors';

const Table = props => {
  if (props.list.length === 0) return <Spinner/>
  return (
    <table className="list" style={{width:"95%", margin:"auto", marginTop:"1rem"}}>
      <thead>
        <tr>
          <th colSpan="3" className="text-center">Product List</th>
        </tr>
        <tr>
          <th>Product</th>
          <th>Color</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map(item=>
          <tr key={item.id}>
          <td>{item.product}</td>
          <td>{item.color}</td>
          <td>{item.price}</td>
          </tr>
        )}
      </tbody>
    </table>
    )}

Table.propTypes = {
  list: PropTypes.array
}

const makeMapStateToProps = () => {
  const getList = makeGetList();
  const mapStateToProps = state => {
    return {
      list: getList(state)
    }
  }
  return mapStateToProps;
}

export default connect(makeMapStateToProps)(Table);

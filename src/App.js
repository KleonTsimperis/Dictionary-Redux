import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchList } from './actions/actions';
import axios from 'axios';
import Header from './containers/Header';
import MainContent from './components/MainContent';
import { makeGetList } from './selectors';


class App extends Component{

  componentDidMount(){
    axios.get('/list.json')
         .then(res => this.props.dispatch(fetchList(res.data)))
         .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <Header/>
        <MainContent/>
      </div>
    );
  }
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



export default connect(makeMapStateToProps)(App);

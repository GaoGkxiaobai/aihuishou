import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import Bottom from './Components/Bottom/bottom'

class App extends Component {
  render() {
    return <div>
      {this.props.children}
      {this.props.isShow?
      <Bottom/>:null}
      {/* <Bottom/> */}
    </div>
  }
}

const mapStateToProps = (state)=>{
  // console.log(state) //store.getState() 
  return {
    isShow:state.tabbarReducer.isShow
  }
}
// export default App;
export default connect(mapStateToProps)(App);

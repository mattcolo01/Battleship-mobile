import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/Grid';

export default class App extends React.Component {
  constructor(props){
    super(props);
    let t=new Array();
    for(let row=1; row<=10; row++) {
      t[row-1]=new Array();
      for(let col=1; col<=10; col++) {
        t[row-1][col-1]={
          id: (row-1)*10+col,
          status: 'empty',
        }
      }
    }
    this.state={
      gridStatus: t,
    };
  }
  render(){
    return (
      <Grid status={this.state.gridStatus} />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

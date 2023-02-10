import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from './components/Grid';

export default class App extends React.Component {
  constructor(props){
    super(props);
    let t=new Array();
    for(let row=0; row<10; row++) {
      t[row]=new Array();
      for(let col=0; col<10; col++) {
        t[row][col]={
          id: (row)*10+col,
          status: 'empty',
        }
      }
    }
    //console.log(t);
    this.state={
      myGrid: t,
      opponentGrid: t,
      myTurn: true,
    };
    this.shoot=this.shoot.bind(this);
  }

  shoot(id){
    console.log("Sparo");
    if(this.state.myTurn) {
      row=Math.floor(id/10);
      col=id%10;
      let t=this.state.opponentGrid;
      if(t[row][col].status=='empty') {
        t[row][col].status="miss";
        this.setState({ opponentGrid: t, myTurn: false });
      } else if(t[row][col].status=='ship') {
        t[row][col].status="hit";
        this.setState({ opponentGrid: t, myTurn: false });
      }
    }
  }

  opponentmove() {
    
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>{ this.state.myTurn ? "E' il tuo turno, spara!\n" : "Turno dell'avversario, attendi\n" }</Text>
        <Grid status={ this.state.myTurn ? this.state.myGrid : this.state.opponentGrid } onShoot={this.shoot} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

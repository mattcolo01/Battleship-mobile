import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default class Tile extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Pressable onPress={this.props.shoot.bind(this,this.props.id)} style={
                this.props.cont=='empty'? s.empty :
                    this.props.cont=='ship'? s.ship :
                        this.props.cont=='hit'? s.hit : s.miss} >
                            <Text style={s.cross}>{this.props.cont == 'hit' || this.props.cont == 'miss' ? 'X' : null}</Text>
            </Pressable>
        );
    };
}

const s=StyleSheet.create({
    empty:{
        aspectRatio: 1,
        width: 30,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: 1,
        backgroundColor: 'lightblue',
    },
    ship:{
        aspectRatio: 1,
        width: 30,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: 1,
        backgroundColor: 'black',
    },
    miss:{
        aspectRatio: 1,
        width: 30,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: 1,
        backgroundColor: 'lightblue',
    },
    hit:{
        aspectRatio: 1,
        width: 30,
        borderStyle: 'solid',
        borderColor: 'lightgrey',
        borderWidth: 1,
        backgroundColor: 'black',
    },
    cross: {
        color: 'red',
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 25,
    }
})
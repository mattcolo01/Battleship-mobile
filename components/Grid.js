import React from 'react';
import { StyleSheet, View } from 'react-native';
import Tile from './Tile';

export default class Grid extends React.Component {
    render(){
        return(
            <View style={s.frame}>
                { this.props.status.map( (row)=>{
                    return(
                        <View id={row[0].id} style={s.row}>
                            { row.map( (tile)=>{
                                return <Tile id={tile.id} cont={tile.status} shoot={this.props.onShoot} />
                            } ) }
                        </View>);
                } ) }
            </View>
        );
    }
}

const s=StyleSheet.create({
    frame: {
        aspectRatio: 1,
        borderStyle: 'solid',
        borderColor: 'grey',
        borderWidth: 2,
        width: 305,
        flexDirection: 'column',
        /* alignSelf: 'center', */
    },
    row: {
        flexDirection: 'row',
    }
});
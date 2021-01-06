import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../style/styles';
import {connect} from 'react-redux';
import { removeFromFavorite } from '../actions/action1';

class FavoriteFilms extends Component{

    render(){
        console.log("data",this.props.array)
        return(
            <ScrollView style={styles.scroll}>
                {this.props.array?.map((item,index) => (
                <View key={index} style={styles.mapView}>
                    <Image source={{uri: item?.favoriteMovieImage}} style={styles.image}/>
                   <Text style={styles.text}>
                       {item.favoriteMovieTitle}
                   </Text>
                   <TouchableOpacity onPress={() => this.props.removeFromFavorite(this.props.array, item.favoriteMovieTitle,item?.favoriteMovieImage )} style={styles.touchable}>
                       <Text style={styles.text}>
                           Remove
                       </Text>
                   </TouchableOpacity>
                </View>
                ))}
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return{
        state,
        array: state.reducer2.arrayOfFavorite
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        removeFromFavorite: (arrayOfFavorite, title, image) => dispatch(removeFromFavorite(arrayOfFavorite, title, image)) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteFilms);
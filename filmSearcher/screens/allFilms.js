import React, {Component} from 'react';
import { View, ScrollView, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import styles from '../style/styles';
import { connect } from 'react-redux';
import {setTitle, setFavourite, getMovie} from '../actions/action1';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class AllFilms extends Component {

  defaultImage = 'https://c0.klipartz.com/pngpicture/564/490/gratis-png-cine-claqueta-cine-movie4k-to-pizarras-s.png';

  componentDidMount(){
    this.props.getMovie(this.props.title);
  }

  checkForFavorite(title, image) {
  const name = this.props.array.filter(name => name.favoriteMovieTitle === title);
  const img = this.props.array.filter(picture => picture.favoriteMovieImage === image);
  if ((name.length == 0 && img.length == 0) || (name.length != 0 && img.length == 0) || (name.length == 0 && img.length != 0)) {
    this.props.changeArrayOfFavorite(title,image);
  }
  }

  render(){
   //const name = this.props.array.filter(name => name.favoriteMovieTitle === "Shred!");
    console.log("array",this.props.array);
    // console.log("name",name);
    // console.log("nameLength", name.length)
      return (
        <View style={styles.background}>

      <KeyboardAwareScrollView style={styles.topView}>
        <TextInput onChangeText={(text) => this.props.changeTitle(text)} placeholder='Введите название фильма'  style={styles.inputText} onSubmitEditing={() => this.getMovie()}/>
        <TouchableOpacity onPress={() => this.props.getMovie(this.props.title)} style={styles.button}>
          <Text style={styles.search}>
            SEARCH
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>

        <View style={styles.scroll}>
        <ScrollView >
      <View style={{flex: 1}}>
          {this.props.initialArray?.map((item, index) => (
            <View key={index} style={styles.mapView}>
          <Image source={{uri: item?.show?.image?.medium ?? this.defaultImage}} style={styles.image}/>
          <Text style={styles.text}>
            {item?.show?.name}
          </Text>
          <TouchableOpacity style={styles.touchable} onPress={() => this.checkForFavorite(item?.show?.name, item?.show?.image?.medium ?? this.defaultImage)}>
            
            <Text style={styles.text}>
              Add to favorite
            </Text>
           
          </TouchableOpacity>
          </View>
          ))} 
          </View>
          
        </ScrollView>
        </View>
        </View>
    )}
}

function mapStateToProps(state) {
  return {
    title: state.reducer1.title,
    array: state.reducer2.arrayOfFavorite,
    initialArray: state.reducer1.arrayOfData
  };
}

function mapDispatchToProps(dispatch) {
  return{
    getMovie: title => dispatch(getMovie(title)),
    changeTitle: title => dispatch(setTitle(title)),
    changeArrayOfFavorite: (data, image) => dispatch(setFavourite(data, image)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AllFilms)
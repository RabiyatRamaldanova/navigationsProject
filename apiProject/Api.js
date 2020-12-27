import React, {Component} from 'react';
import { View, ScrollView, TextInput, Image, TouchableOpacity, Text} from 'react-native';
import styles from './style';

class Api extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: "shrek",
      arrayOfData: []
    }
  }

  defaultImage = 'https://c0.klipartz.com/pngpicture/564/490/gratis-png-cine-claqueta-cine-movie4k-to-pizarras-s.png'

  componentDidMount = async () => {
    this.getMovie();
  }

  getMovie = async () =>{
    try{
      const response = await fetch(`http://api.tvmaze.com/search/shows?q=${this.state.title}`);
      const arrayOfData = await response.json();
      this.setState({arrayOfData});
    } catch (e) {
      console.log("URL is wrong")
    }
  }

  changeData(inputText){
    this.setState({title: inputText});
  }

  render() {
  return (
    <View  style={styles.background}>
      <View style={styles.topView}>
        <TextInput onChangeText={inputText => this.changeData(inputText)} placeholder='Введите название фильма'  style={styles.inputText}/>
        <TouchableOpacity onPress={() => this.getMovie()} style={styles.button}>
          <Text style={styles.search}>
            SEARCH
          </Text>
        </TouchableOpacity>
       
      </View>
      
        <ScrollView style={styles.scroll}>
          {this.state.arrayOfData.map((item, index) => (
            <View key={index}>
          <Image source={{uri: item?.show?.image?.medium ?? this.defaultImage}} style={styles.image}/>
          <Text style={styles.text}>
            {item.show.name}
          </Text>
          </View>
          ))}
        </ScrollView>
    </View>
  );
  }
}

export default Api;